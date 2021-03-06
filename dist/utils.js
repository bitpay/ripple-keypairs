"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const hashjs = require("hash.js");
const BN = require("bn.js");
function bytesToHex(a) {
    return a.map(function (byteValue) {
        const hex = byteValue.toString(16).toUpperCase();
        return hex.length > 1 ? hex : '0' + hex;
    }).join('');
}
exports.bytesToHex = bytesToHex;
function hexToBytes(a) {
    assert(a.length % 2 === 0);
    return (new BN(a, 16)).toArray(null, a.length / 2);
}
exports.hexToBytes = hexToBytes;
function computePublicKeyHash(publicKeyBytes) {
    const hash256 = hashjs.sha256().update(publicKeyBytes).digest();
    const hash160 = hashjs.ripemd160().update(hash256).digest();
    return Buffer.from(hash160);
}
exports.computePublicKeyHash = computePublicKeyHash;
function seedFromPhrase(phrase) {
    return hashjs.sha512().update(phrase).digest().slice(0, 16);
}
exports.seedFromPhrase = seedFromPhrase;
//# sourceMappingURL=utils.js.map