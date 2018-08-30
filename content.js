var port = chrome.runtime.connect();
console.log("Content script loaded");

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log("Contentscript has received a message from from background script: '" + request.message + "'");
    console.log(sender.tab ?
      "from a content script:" + sender.tab.url :
      "from the extension");
    if (request.message == 'getData')  {
      dataTable = $('#editGraphTable tr')
      var csv = []; 
      for (var i = 2; i < dataTable.length; ++i) {
        row = dataTable[i];
        date = row.cells[0].children[0].innerText;
        start1 = row.cells[2].children[0].innerText;
        start2 = row.cells[2].children[1].innerText;
        end1 = row.cells[3].children[0].innerText;
        end2 = row.cells[3].children[1].innerText;
        csv.push({date: date, start1: start1, start2: start2, end1: end1, end2: end2});
      }
      
      console.log(sendResponse);
      sendResponse({data: csv});
    }


 });

