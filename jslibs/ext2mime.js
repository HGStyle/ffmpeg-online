/* Made by HGStyle using database from GitHub jshttp/mime-db */

async function get_parsed_data() {
  return new Promise((resolve, reject) => {
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = async function() {
      if (httpRequest.readyState === 4) {
        if (httpRequest.status === 200) {
          d = JSON.parse(httpRequest.responseText);
          newData = {};
          keys = Object.keys(d);
          for (k of keys) {
            if (!d[k].hasOwnProperty('extensions')) {
              continue;
            }
            for (e of d[k]['extensions']) {
              newData[e] = k;
            }
          }
          resolve(newData);
        } else {
          reject(new Error('Request failed'));
        }
      }
    };
    httpRequest.open('GET', location.href.replace(/\/[^\/]+?\.[^\/]+?$/, '/') + "jslibs/mime-db.json");
    httpRequest.send();
  });
}
