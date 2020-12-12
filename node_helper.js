/* Magic Mirror
 * Module: ComEdPrice5Min 
 *
 */
var NodeHelper = require('node_helper');
var request = require('request');

module.exports = NodeHelper.create({

  start: function () {
    console.log('MMM-ComEdPrice5Min helper started ...');
  },

  getData: function (url) {
      var self = this;
      //console.log('requesting:' + url);
      request({ url: url, method: 'GET' }, function (error, response, body) {
          if (!error && response.statusCode == 200) {
              var result = JSON.parse(body);
              self.sendSocketNotification('POWER_DATA_RESULT', result);
          } else {
              console.log("MMM-ComEdPrice5Min : Could not load data.");
          }
      });
  },

  //Subclass socketNotificationReceived received.
  socketNotificationReceived: function(payload) {
     this.getData(payload);
  }
});
