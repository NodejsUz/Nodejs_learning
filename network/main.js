const os = require('os');
const request = require('request');

const dns = require('dns');

// const hostname = 'www.google.com';

// dns.lookup(hostname, (err, address, family) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
  
//   console.log(`The IP address of ${hostname} is ${address}`);
// });

const interfaces = os.networkInterfaces();
console.log(interfaces);
const ip = interfaces.enp2s0.find(i => i.family === 'IPv4').address;

console.log(`The IP address of the computer is ${ip}`);

// const hostname = os.hostname();
// const interfaces = os.networkInterfaces();
// console.log(hostname, interfaces);
// const ip = interfaces.en0.find(i => i.family === 'IPv4').address;

// const url = `https://api.ipgeolocation.io/ipgeo?apiKey=YOUR_API_KEY&ip=${ip}`;

// request(url, { json: true }, (err, res, body) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
  
//   console.log(`The location of ${hostname} (${ip}) is:`);
//   console.log(`  Country: ${body.country_name}`);
//   console.log(`  Region: ${body.region}`);
//   console.log(`  City: ${body.city}`);
// });
