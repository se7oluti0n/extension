var port = chrome.runtime.connect();
console.log("Content script loaded");
chrome.runtime.onMessage.addListener(
  function(request, sender) {
    console.log("Contentscript has received a message from from background script: '" + request.message + "'");
    dataTable = $('#editGraphTable tr')
    var csv = []; 
    for (var i = 2; i < dataTable.length; ++i) {
      row = dataTable[i];
      date = row.cells[0].children[0].innerText;
      start1 = row.cells[2].children[0].innerText;
      start2 = row.cells[2].children[1].innerText;
      end1 = row.cells[3].children[0].innerText;
      end2 = row.cells[3].children[1].innerText;
      csv.push({data, start1, start2, end1, end2});
    }
 });

