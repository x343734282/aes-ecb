/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2019-05-26 18:09:47
 * @version $Id$
 */

var aes = require('./aes-ecb.js');
const readline = require('readline');

const read = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

var r = aes.encrypt.bit128('1111111111111111', 'abc');

console.log(r);

var dec = aes.decrypt.bit128('1111111111111111', r);

console.log(dec);

read.question('What do you think of Node.js? ', (answer) => {
	// TODO: Log the answer in a database
	console.log(`Thank you for your valuable feedback: ${answer}`);

	read.close();
});