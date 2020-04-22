const CryptoJS = require("crypto-js")
const {random} = require('./util')

const DES3 = {
    iv: function () {
        return formatDate(new Date(), "yyyyMMdd")
    },
    encrypt: function (b, c, a) {
        if (c) {
            return (CryptoJS.TripleDES.encrypt(b, CryptoJS.enc.Utf8.parse(c), {
                iv: CryptoJS.enc.Utf8.parse(a || DES3.iv()),
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            })).toString()
        }
        return ""
    },
    decrypt: function (b, c, a) {
        if (c) {
            return CryptoJS.enc.Utf8.stringify(CryptoJS.TripleDES.decrypt(b, CryptoJS.enc.Utf8.parse(c), {
                iv: CryptoJS.enc.Utf8.parse(a || DES3.iv()),
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            })).toString()
        }
        return ""
    }
};

function strTobinary(str) {
    var result = [];
    var list = str.split("");
    for (var i = 0; i < list.length; i++) {
        if (i != 0) {
            result.push(" ");
        }
        var item = list[i];
        var binaryStr = item.charCodeAt().toString(2);
        result.push(binaryStr);
    };
    return result.join("");
}
const haha=()=>{
    var date = new Date();
    var timestamp = date.getTime().toString();
    var salt =random(24);
    var year = date.getFullYear().toString();
    var month = (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date
        .getMonth()+1).toString();
    var day = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate())
        .toString();
    var iv = year + month + day;
    var enc = DES3.encrypt(timestamp, salt, iv).toString();
    var str = salt + iv + enc;
    var ciphertext = strTobinary(str);
    return ciphertext;

}
module.exports = {haha};