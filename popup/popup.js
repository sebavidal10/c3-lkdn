console.log('soy el popup');
chrome.tabs.query(
  {
    active: true,
    lastFocusedWindow: true,
  },
  function (array_of_Tabs) {
    var tab = array_of_Tabs[0];
    var url = tab.url;
    if (url.startsWith('https://www.linkedin.com/in/')) {
      chrome.tabs.executeScript(tab.id, {
        code:
          'chrome.runtime.sendMessage({name: document.getElementsByTagName("h1")[0].innerHTML, url: "' +
          url +
          '"});',
      });
    } else {
      chrome.tabs.executeScript(tab.id, {
        code: 'chrome.runtime.sendMessage({name: "-", url: "-"});',
      });
    }
  }
);

chrome.runtime.onMessage.addListener(function (request) {
  document.getElementById('url').innerHTML = request.url;
  document.getElementById('name').innerHTML = request.name;
});
