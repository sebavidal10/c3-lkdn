chrome.webRequest.onSendHeaders.addListener(
  function (e) {
    // if (e.url.startsWith('https://www.linkedin.com/ambry/')) {
    //   console.log('aqui');
    //   console.log(e.url);
    //   $.ajax({
    //     type: 'GET',
    //     url: e.url,
    //     // data: data,
    //     crossDomain: true,
    //     cache: false,
    //     async: false,
    //     success: function (msg) {
    //       console.log(msg);
    //     },
    //     error: function (jxhr) {
    //       console.log(jxhr.responseText);
    //     },
    //   });
    // }
  },
  {
    urls: ['<all_urls>'],
    types: ['xmlhttprequest'],
  },
  ['requestHeaders']
);
