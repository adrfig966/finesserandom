const randAPI = require("../util/randapi");

function randStore () {
  var randarr = [];

  var getrand = function() {
    //CHeck if random array is empty
    if(randarr.length == 0) {
      //Refill array using API singleton
      return randAPI.callapi().then( res => {
          console.log("Raw Random.org response", res.data.result);
          console.log("API call needed");
          randarr = res.data.result.random.data;
          return randarr.pop();
        }
      )
    } else {
      console.log("No API call needed");
      return Promise.resolve(randarr.pop());
    }
  }

  return {
    getrand: getrand,
  }
}

module.exports = randStore();
