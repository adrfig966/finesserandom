const axios = require('axios');

function randAPI () {
  const CALLOBJ = {
    method: 'post',
    url: 'https://api.random.org/json-rpc/4/invoke',
    data: {
      "jsonrpc": "2.0",
      "method": "generateIntegers",
      "params": {
          "apiKey": process.env.RANDAPI,
          "n": process.env.RANDSIZE,
          "min": process.env.RANDMIN,
          "max": process.env.RANDMAX
      },
      "id": 13
    }
  }

  var callapi = function() {
    return axios(CALLOBJ);
  }

  return {
    callapi: callapi,
  }
}

module.exports = randAPI();
