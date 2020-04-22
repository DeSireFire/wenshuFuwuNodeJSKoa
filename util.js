const randomArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const random = (size) =>{
    var str = "";
    for(var i=0; i<size; i++){
        str += randomArr[Math.round(Math.random() * (randomArr.length-1))];
    }
    return str;


}

const happy =()=>{
    var guid = "";
    for (var i = 1; i <= 32; i++) {
        var n = Math.floor(Math.random() * 16.0).toString(16);
        guid += n;
        // if ((i == 8) || (i == 12) || (i == 16) || (i == 20)) guid +=
        // "-";
    }
    return guid;
}
module.exports={happy,random}