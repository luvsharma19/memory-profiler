!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=2)}([function(t,e){t.exports=require("fs")},function(t,e,r){var n=r(0),o="C:/memory-profiler-logs";t.exports={logPath:o,createFolderStructure:function(){n.existsSync(o)?(n.existsSync(o+"/memoryLeak.txt")&&n.unlinkSync(o+"/memoryLeak.txt"),n.existsSync(o+"/memoryStats.txt")&&n.unlinkSync(o+"/memoryStats.txt"),n.existsSync(o+"/logs.txt")&&n.unlinkSync(o+"/logs.txt")):n.mkdirSync(o)}}},function(t,e,r){var n=r(3);t.exports=n},function(t,e,r){var n,o,i=r(0),a=r(4),u=r(5),s=r(1);s.createFolderStructure(),u.startLogging(),n=i.createWriteStream(s.logPath+"/memoryLeak.txt",{flags:"as",autoClose:!1}),o=i.createWriteStream(s.logPath+"/memoryStats.txt",{flags:"as",autoClose:!1}),n.on("error",t=>{u.log(t)}),o.on("error",t=>{u.log(t)}),u.log("memory profiling started"),a.on("leak",(function(t){t.created=(new Date).toISOString(),n.write(JSON.stringify(t)+",\r\n")})),a.on("stats",(function(t){t.created=(new Date).toISOString(),o.write(JSON.stringify(t)+",\r\n")})),t.exports=a},function(t,e){t.exports=require("node-memwatch")},function(t,e,r){var n,o=r(0),i=r(1);t.exports={log:function(t){"string"!=typeof t&&(t=JSON.stringify(t));var e={created:(new Date).toISOString(),message:t};n.write(JSON.stringify(e)+",\r\n")},startLogging:function(){(n=o.createWriteStream(i.logPath+"/logs.txt",{flags:"as",autoClose:!1})).on("error",t=>{console.log("writing info/error event to logs.txt file failed",t)})}}}]);