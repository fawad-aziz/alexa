var Alexa = require('alexa-sdk');
var data = require("./data");

const skillName = "Family Information";

var handlers = {

    "InfoIntent": function () {
        var info = "";
        if (this.event.request.intent.slots.Name.value && this.event.request.intent.slots.Name.value.toLowerCase() == "aariz") {
            info = data.aariz;
        } else if (this.event.request.intent.slots.Name.value && this.event.request.intent.slots.Name.value.toLowerCase() == "inaya") {
            info = data.inaya;
        }
        this.emit(':tellWithCard', info, skillName, info);
    },

    "AMAZON.StopIntent": function () {
        var info = "Goodbye";
        this.emit(':tell', info);
    },
 
    "AMAZON.CancelIntent": function () {
        var info = "Goodbye";
        this.emit(':tell', info);
    }
};

exports.handler = function (event, context) {
    var alexa = Alexa.handler(event, context);
    alexa.appID = "amzn1.echo-sdk-ams.app.APP_ID";
    alexa.registerHandlers(handlers);
    alexa.execute();
};