/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2019-05-26 17:32:15
 * @version $Id$
 */

var crypto = require('crypto');

function encryptTo128(key, text, outEncoding) {
	if (key.length != 16) {
		throw new Error('the key length must 16');
	}

	return encrypt('aes-128-ecb', text, key, outEncoding);
}

function encryptTo192(key, text, outEncoding) {
	if (key.length != 24) {
		throw new Error('the key length must 24');
	}

	return encrypt('aes-192-ecb', text, key, outEncoding);
}

function encryptTo256(key, text, outEncoding) {
	if (key.length != 32) {
		throw new Error('the key length must 32');
	}

	return encrypt('aes-256-ecb', text, key, outEncoding);
}

function encrypt(algorithm, text, key, outEncoding) {
	var encoding = 'hex';
	if (!outEncoding) {
		encoding = outEncoding || encoding;
	}

	cipher = crypto.createCipheriv(algorithm, key, '');
	result = cipher.update(text).toString(encoding);
	result += cipher.final().toString(encoding);
	return result;
}

function decrypt(algorithm, key, encryptText, encryptEncoding, outEncoding) {
	var defEncryptEncoding = 'hex';
	if (!encryptEncoding) {
		encryptEncoding = encryptEncoding || defEncryptEncoding;
	}

	var defOutEncoding = 'utf8';
	if (!outEncoding) {
		outEncoding = outEncoding || defOutEncoding;
	}

	var deCipher = crypto.createDecipheriv(algorithm, key, '');
	var result = deCipher.update(encryptText, encryptEncoding);
	result += deCipher.final().toString(outEncoding);
	return result;
}

function decrypt128(key, text, encryptEncoding, outEncoding) {
	if (key.length != 16) {
		throw new Error('the key length must 16');
	}
	return decrypt('aes-128-ecb', key, text, encryptEncoding, outEncoding);
}

function decrypt192(key, text, encryptEncoding, outEncoding) {
	if (key.length != 24) {
		throw new Error('the key length must 24');
	}

	return decrypt('aes-192-ecb', key, text, encryptEncoding, outEncoding);
}

function decrypt256(key, text, encryptEncoding, outEncoding) {
	if (key.length != 32) {
		throw new Error('the key length must 32');
	}

	return decrypt('aes-256-ecb', key, text, encryptEncoding, outEncoding);
}

module.exports = {
	encrypt: {
		bit128: encryptTo128,
		bit192: encryptTo192,
		bit256: encryptTo256
	},
	decrypt: {
		bit128: decrypt128,
		bit192: decrypt192,
		bit256: decrypt256
	}
}