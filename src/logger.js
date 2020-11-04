var FS = require("fs");
var dirSetup = require("./dirSetup");
var logFile;

var startLogging = function() {
    logFile = FS.createWriteStream(`${dirSetup.logPath}/logs.txt`, { flags: 'as', autoClose: false })

    logFile.on('error', (err) => {
        console.log("writing info/error event to logs.txt file failed", err)
    });
}

var log = function(data) {
    if(typeof data !== 'string') {
        data = JSON.stringify(data)
    }

    var logTxt = {
        'created': new Date().toISOString(),
        'message': data 
    }

    logFile.write(`${JSON.stringify(logTxt)},\r\n`)
}

module.exports = {
    log,
    startLogging
}