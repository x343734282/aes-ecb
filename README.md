# aes-ecb
aes-ecb nodejs implement for communication with others languages like java, .net.

# API
encrype
aes-128-ecb
encrype.bit128(key,text,outEncoding)
aes-192-ecb
encrype.bit192(key,text,outEncoding)
aes-256-ecb
encrype.bit256(key,text,outEncoding)

decrypt
aes-128-ecb
decrypt.bit128(key,text,encryptEncoding,outEncoding)
aes-192-ecb
decrypt.bit192(key,text,encryptEncoding,outEncoding)
aes-256-ecb
decrypt.bit256(key,text,encryptEncoding,outEncoding)

# example
var aes = require('./aes-ecb.js');
var r = aes.encrypt.bit128('1111111111111111', 'abc','hex');

var dec = aes.decrypt.bit128('1111111111111111', r,'hex','utf8');
