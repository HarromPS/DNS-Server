// we will be using a dgram.js library which provides an implementation of UDP packets
// no need to install, already comes with nodejs

const dnsPacket = require('dns-packet'); // dns packet decoder
const dgram = require('node:dgram');

// create a server 
const server = dgram.createSocket('udp4');  // it can be udp4 or udp6

// database of domain name and IP addresses  
const config = require("./dnsRecords.json");
const db = config.db;

// so what to do when a message/query comes on server 
server.on('message', (msg, remoteInfo)=>{
    // remote info give info about from where the query has come

    // console.log({
    //     msg: msg.toString(),
    //     rinfo: remoteInfo
    // })

    // decoding binary message using dns packet decoder 

    const incomingReq = dnsPacket.decode(msg); // decode message
    const ipFromDb = db[incomingReq.questions[0].name];     // domain name to IP from database 

    if(ipFromDb===undefined){
        console.log("No record found!");
        return;
    }
    
    if(ipFromDb.type === 'CNAME'){
        const newipFromDb = db[ipFromDb.data];
        const ans = dnsPacket.encode({
            type:"response",
            id: incomingReq.id,
            flags: dnsPacket.AUTHORITATIVE_ANSWER,
            answers: [{
                type:newipFromDb.type,
                class: 'IN',
                name: incomingReq.questions[0].name,
                data: newipFromDb.data
            }]
        })
    
        // send from where it came from 
        server.send(ans, remoteInfo.port, remoteInfo.address);

        return;
    }

    // if name exists, create a answer 
    const ans = dnsPacket.encode({
        type:"response",
        id: incomingReq.id,
        flags: dnsPacket.AUTHORITATIVE_ANSWER,
        answers: [{
            type:ipFromDb.type,
            class: 'IN',
            name: incomingReq.questions[0].name,
            data: ipFromDb.data
        }]
    })

    // send from where it came from 
    server.send(ans, remoteInfo.port, remoteInfo.address);
});

// now run server on port 
// server.bind() is used to bind a socket to a specific IP address and port number

server.bind(8087, ()=>{    //  Bind to all IPs, on port 8080
    console.log("DNS is up and running on port 8087");
})  

server.on('listening', () => {
    const address = server.address();
    console.log(`server listening ${address.address}:${address.port}`);
});

server.on('error', (err) => {
    console.error(`server error:\n${err.stack}`);
    server.close();
});

// now dig @localhost -p 8087 piyushgarg.dev    i.e make a query to localhost on another terminal
// gives a binary message 

/*
{
  msg: 'S(\x01 \x00\x01\x00\x00\x00\x00\x00\x01\x06google\x03com\x00\x00\x01\x00\x01\x00\x00)\x04�\x00\x00\x00\x00\x00\f\x00\n\x00\b�^kK����',
  rinfo: { address: '127.0.0.1', family: 'IPv4', port: 50843, size: 51 }
}
*/