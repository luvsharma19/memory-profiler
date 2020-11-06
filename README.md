`memory-profiler`: Intelligent memory profiler for Node.js applications to provide memory leak and heap memory usage information
============================================================
npm link - https://www.npmjs.com/package/@luvsharma1931/memory-profiler

`npm install @luvsharma1931/memory-profiler`

- It is a `plug and play module` created using Node.js which can be easily imported with a single import statement in your node.js application. 
- This module provides `fully automated memory profiling` process for Node.js applications and does not require any manual intervention at all from developers.
- It also automatically `creates report files for memory leak information and heap memory usage` by the application which are saved at a default system location and can also be shared with teams.

![alt text](https://github.com/luvsharma19/memory-profiler/blob/main/img/image.png?raw=true)

 - These files contain data in `JSON format` and can directly be used as a data source for visualization tools like `Kibana or Graphana` to show graphs and charts depicting the heap memory usage trends or memory leak trends for your Node.js applications.
 - This module can run memory profiling for your application for `‘n’ number of days` continuously without requiring any manual effort from developer. 
 - Also, it can be used to `run memory profiling on production/release candidate builds(live deployments)` created using CI/CD pipelines as it is easily imported with a single import statement and no complex integration is required at all.

Installation
------------
Please make sure you have `Python version 2.7.18(recommended) or greater` installed on your system. You can install it from official python website:
 https://www.python.org/downloads/release/python-2718/

- Install the memory-profiler using npm:

```javascript
npm install @luvsharma1931/memory-profiler
```
- The module has to be imported in the Node.js application code using a single line import statement.

```javascript
var memoryProfiler = require("@luvsharma1931/memory-profiler");
```

How does this plug n play module works?
---------------------------------------

- When the Node.js application gets started and comes to running state, the memory profiling also automatically starts running for this application and the module creates three files – ``memoryStats.txt, memoryLeak.txt, logs.txt`` at default system location – ``“C:\memory-profiler-logs\”``. 
- The module writes ``heap memory usage`` data to the memoryStats.txt file at times just after a garbage collection is run automatically in the Node.js runtime environment.
- If a ``memory leak`` is found by the module, it writes the leak information to memoryLeak.txt file. If any error occurs during the memory profiling process, the module logs the error message to logs.txt file.
- The module logs an info message in the logs.txt file indicating that memory profiling started successfully.

![alt text](https://github.com/luvsharma19/memory-profiler/blob/main/img/image2.png?raw=true)

![alt text](https://github.com/luvsharma19/memory-profiler/blob/main/img/image3.png?raw=true)

Please feel free to provide you feedback and contribute to this project by creating a pull request. You can also reach me via email - luvsharma1931@yahoo.com
