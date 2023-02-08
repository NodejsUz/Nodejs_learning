'use strict'

const assert = require('assert')
const { createServer } = require('http')
const { connect } = require('net')

const server = createServer(function connectionListener(_, res) {
  res.writeHead(204, { connection: 'close' })
  res.end('')
})

// In the implementations intention, this timeout should be triggered first
server.headersTimeout = 5000

// On node Node 16 and previous version, this will cause the request to rejected
server.requestTimeout = 10000

// This is the maximum time the socket can be idle
server.setTimeout(30000)

server.listen(0, function onConnect() {
  const client = connect(server.address().port)
  const request = ['GET / HTTP/1.1\r\n', 'Host: localhost', '\r\n\r\n']
  let response = ''
  let sentPackets = 0

  function sendPacket() {
    client.write(request.shift())
    sentPackets++
  }

  function verifyResult() {
    assert.strictEqual(response, 'HTTP/1.1 408 Request Timeout\r\nConnection: close\r\n\r\n')
    assert(sentPackets, 2)
    server.close()
  }

  client.on('data', function (chunk) {
    response += chunk.toString('utf-8')
  })

  client.on('end', verifyResult)

  client.resume()

  setTimeout(sendPacket, 100).unref()
  setTimeout(sendPacket, 4000).unref()
  setTimeout(sendPacket, 6000).unref()
})
