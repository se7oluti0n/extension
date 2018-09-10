let changeColor = document.getElementById('changeColor');

  chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
  });

  changeColor.onclick = function(element) {
    let color = element.target.value;

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {message: "getData"}, function(response) {
        console.log(response.data);

        var csv_text = 'Date,start1,start2,end1,end2\n';

        for (var i = 0; i < response.data.length; ++i) {
          day = response.data[i]
          console.log(day);
          csv_text += (day['date'] + ',' + day['start1'] + ','
                   + day['start2'] + ','
                   + day['end1'] + ','
                   + day['end2'] + '\n');
        }


    // Save as file
        var url = 'data:text/plain;base64,' + btoa(csv_text);
        chrome.downloads.download({
            url: url,
            filename: 'timesheet.csv'
        });
        
      });

    });
    
  };