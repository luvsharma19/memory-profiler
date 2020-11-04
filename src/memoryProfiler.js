var FS = require("fs");
var memwatch = require('node-memwatch');
var logger = require("./logger")
var dirSetup = require("./dirSetup");
var logFile1;
var logFile2;

var registerEvents = function() {
    logFile1.on('error', (err) => {
        logger.log(err)
    });

    logFile2.on('error', (err) => {
        logger.log(err)
    });
}

var startProfilerLogs = function() {
    logFile1 = FS.createWriteStream(`${dirSetup.logPath}/memoryLeak.txt`, { flags: 'as', autoClose: false })
    logFile2 = FS.createWriteStream(`${dirSetup.logPath}/memoryStats.txt`, { flags: 'as', autoClose: false })

    registerEvents()
}

var startProfiler = function() {
    logger.log("memory profiling started")

    memwatch.on('leak', function(info) { 
        info.created = new Date().toISOString()
        logFile1.write(`${JSON.stringify(info)},\r\n`);
    });

    memwatch.on('stats', function(stats) { 
        stats.created = new Date().toISOString()
        logFile2.write(`${JSON.stringify(stats)},\r\n`);
     });
}

dirSetup.createFolderStructure()
logger.startLogging()
startProfilerLogs()
startProfiler()

module.exports = memwatch