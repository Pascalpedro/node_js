// Node.js program to demonstrate the cipher.final() method
 
// Importing crypto module
const crypto = require('crypto');

// Creating and initializing algorithm and password
const algorithm = 'aes-192-cbc';
const password = 'Password used to generate key';

// Getting key for cipher object
crypto.scrypt(password, 'salt', 24,
    { N: 512 }, (err, key) => {

        if (err) throw err;

        // Creating and initializing the static iv
        const iv = Buffer.alloc(16, 0);

        // Creating and initializing the cipher object
        const cipher = crypto
             .createCipheriv(algorithm, key, iv);
															   
