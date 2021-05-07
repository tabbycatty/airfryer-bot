///
///		DEEP FRYER BOT
///		by tabby
///

// Import discord.js and create client
const Discord = require('discord.js')
const client = new Discord.Client();

// Import FS
const fs = require('fs');

// Read client secret from file (TODO: catch error if file not present)
const loginSecret = fs.readFileSync('./secret.txt', 'utf-8');

// client ready console log
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

