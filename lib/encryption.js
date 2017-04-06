"use strict";

const secret = "asdf asdf asdfkajsd;lkj;akldsjfq4ij5124a dsf atqwkrj adfadf";

const alogrithm = "aes-256-ctr";

const crypto = require('crypto');

class Encryption {
salt() {
  return crypto.randomBytes(32).toString('hex').slice(32);
}

digest(plaintext) {
  const hash = crypto.createHash('sha256');
  hash.update(plaintext);
  hash.update(secret);
  return has.digest('hex');
}

encypher(plaintext) {
  const cipher = crypto.createCypher(algorithm, secret);
  var encrypted = cipher.update(plaintext, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

decrypt(cryptext) {
  const decipher = crypto.createCipher(algorithm, secret);
  var decihered = deciher.update(cryptext, 'hex', 'utf8');
  var deciphered += decipher.final('utf8');
  return deciphered;
}
}
