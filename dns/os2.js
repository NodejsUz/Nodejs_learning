const os = require('os');
const fs = require('fs');
const path = require('path');

const reportDirectory = 'reports';
const reportFile = 'resource-usage-report.txt';

// Create the report directory if it doesn't exist
if (!fs.existsSync(reportDirectory)) {
  fs.mkdirSync(reportDirectory);
}

// Define a function to generate the resource usage report
const generateReport = () => {
  const reportPath = path.join(reportDirectory, reportFile);
  const timestamp = new Date().toISOString();
  
  const memoryUsage = os.totalmem() - os.freemem();
  const memoryUsagePercentage = (memoryUsage / os.totalmem()) * 100;
  
  const report = `
Resource Usage Report
---------------------
Timestamp: ${timestamp}

Memory Usage
------------
Total Memory: ${os.totalmem()} bytes
Free Memory: ${os.freemem()} bytes
Memory Usage: ${memoryUsage} bytes (${memoryUsagePercentage.toFixed(2)}%)
  `;
  
  fs.writeFileSync(reportPath, report);
};

// Example usage of the generateReport function
generateReport();
console.log('Resource usage report generated!');
