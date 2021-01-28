/**
 * Created by ZHANG YL on 2017/8/7.
 */

//test3.html?score=1

var res = {};

function parseURL(Url){
    //console.log(url)
    var url = Url.split("?")[1];
    //console.log(url)
    //var para = url.split("&");
    var len = url.length;
    var arr = [];
    //for(var i=0;i<len;i++){
        arr = url.split("=");
        res[arr[0]] = arr[1];
    //}
    return res;
}
