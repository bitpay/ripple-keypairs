"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hashjs = require("hash.js");
const BigNum = require("bn.js");
class Sha512 {
    constructor() {
        this.hash = hashjs.sha512();
    }
    add(bytes) {
        this.hash.update(bytes);
        return this;
    }
    addU32(i) {
        return this.add([(i >>> 24) & 0xFF, (i >>> 16) & 0xFF,
            (i >>> 8) & 0xFF, i & 0xFF]);
    }
    finish() {
        return this.hash.digest();
    }
    first256() {
        return this.finish().slice(0, 32);
    }
    first256BN() {
        return new BigNum(this.first256());
    }
}
exports.default = Sha512;
//# sourceMappingURL=sha512.js.map