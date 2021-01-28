/**
 * Created by ZHANG YL on 2017/8/8.
 */

window.onload = function () {
    (function(){
        var w = window.screen.width;
        var targetW = 750;
        var scale = w/targetW; //当前尺寸/目标尺寸
        var meta = document.createElement("meta");
        meta.name = "viewport";
        meta.content = "user-scalable=no,initial-scale="+scale+",minimum-scale="+scale+",maximum-scale="+scale+""
        //console.log(scale);
        document.head.appendChild(meta);
    })();


    function view() {//获取可视区的宽高
        return {
            w: document.documentElement.clientWidth,
            h: document.documentElement.clientHeight
        };
    }

    document.body.style.height = view().h + 'px';

};

