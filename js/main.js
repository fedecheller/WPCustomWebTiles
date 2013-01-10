function getQSParam(paramName) {
    var QS = window.location.toString();
    var indSta = QS.indexOf(paramName + "=");
    if (indSta==-1 || paramName=="") return null;
    var indEnd=QS.indexOf('&',indSta);
    if (indEnd==-1) indEnd=QS.length;
    var valore = unescape(QS.substring(indSta+paramName.length+1,indEnd));
    return valore;
}
function removeArgs(lc){
    var result = lc.replace("<","").replace(">","").replace("&","").replace("#","").split('?')[0];
    return result;
}
function createUrl(){
    document.getElementById('fadingBarsG').style.visibility = 'visible';
    var t = setTimeout(function(){
        var url = 'pin.html?cl=' + document.getElementById('cl').value;
        url += '&amp;lc='+ removeArgs(document.getElementById('lc').value);
        url += '&amp;lb='+ removeArgs(document.getElementById('lb').value);
        url += '&amp;ic='+ removeArgs(document.getElementById('ic').value);
        document.location.href = url;
    },2000);
}
var prevImage;
function selectIcon(){
    if(event.srcElement.id=='imgCustom'){
        window.scrollTo(0,0);
        document.getElementById('overlay').style.width = "105%";
        document.getElementById('overlay').style.height = $.getDocHeight();
        document.getElementById('promptCustomIcon').style.display=document.getElementById('overlay').style.display='block';
    }
    else if(event.srcElement.src){
        setIcon(event.srcElement);
    }
}

function setIcon(el){
    document.getElementById('ic').value = el.src;
    el.style.border = "1px solid " + document.getElementById('cl').value;
    el.style.backgroundColor = document.getElementById('cl').value;
    el.style.backgroundImage = "url('img/tick.png')";
    el.style.backgroundPosition = "top right";
    el.style.backgroundRepeat = "no-repeat";
    if(prevImage && prevImage != el){
        prevImage.style.border = "1px solid white";
        prevImage.style.background = "";
        prevImage.style.backgroundColor = "#000000";
    }
    prevImage = el;
}
function undoCustomIcon(){
    document.getElementById('cu').value='';
    document.getElementById('promptCustomIcon').style.display = document.getElementById('overlay').style.display='none';
}
function confirmCustomIcon(){
    document.getElementById('imgCustom').src = document.getElementById('cu').value;
    setIcon(document.getElementById('imgCustom'));
    document.getElementById('promptCustomIcon').style.display = document.getElementById('overlay').style.display='none';
}
function pinAppTile(){
    parent.document.getElementById('lc').value = "http://cheller.info/wpt/";
    parent.document.getElementById('cl').selectedIndex = 0;
    parent.document.getElementById('ic').value = "http://www.cheller.info/wpt/apple-touch-icon-144x144-precomposed.png";
    parent.document.getElementById('lb').value = "tile creator";
    parent.document.getElementById('createTile').click();
}
function shareIt(code){
    var path;
    switch(code)
    {
        case 1:
            path = "http://www.facebook.com/sharer/sharer.php?u=http://cheller.info/wpt/";
            break;
        case 2:
            path = "http://www.linkedin.com/shareArticle?url=http://cheller.info/wpt/";
            break;
        case 3:
            path = "https://plus.google.com/share?url=http://cheller.info/wpt/";
            break;
        case 4:
            path = "https://twitter.com/intent/tweet?text=windows phone custom tile creator&url=http://cheller.info/wpt/";
            break;
        case 5:
            path = "http://www.reddit.com/submit?url=http://cheller.info/wpt/";
            break;
        case 6:
            path = "mailto:?Subject=Windows Phone Custom Tile Creator&Body=http://cheller.info/wpt/";
            break;
        default:
            path = undefined;
    }
    if(path) window.open(path, '_blank');
}