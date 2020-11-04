var FS = require("fs");
var logPath = "C:/node-profiler-logs"

var createFolderStructure = function() {
    if (FS.existsSync(logPath)) {
        if(FS.existsSync(`${logPath}/memoryLeak.txt`)) {
            FS.unlinkSync(`${logPath}/memoryLeak.txt`)
        }

        if(FS.existsSync(`${logPath}/memoryStats.txt`)) {
            FS.unlinkSync(`${logPath}/memoryStats.txt`)
        }

        if(FS.existsSync(`${logPath}/logs.txt`)) {
            FS.unlinkSync(`${logPath}/logs.txt`)
        }
    } else {
        FS.mkdirSync(logPath);
    }
}

module.exports = {
    logPath,
    createFolderStructure
}