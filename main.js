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

// Set default prefix (TODO: read prefix from file and actually use it)
let prefix = '$'

// Listen for messages
client.on('message', msg => {
	// Ignore bots and messages not using the prefix
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	// Split message into command and arguments
	const args = message.content.slice(prefix.length).trim().split(' ');
	const command = args.shift().toLowerCase();

	switch(command){
		case 'deepfry':
			msg.channel.send('Deepfry Test')
			msg.channel.send(args);
		break;
	}
});

// Login with secret from file
client.login(loginSecret);