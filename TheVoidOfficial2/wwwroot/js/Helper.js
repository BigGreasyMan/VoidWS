
var faded = []

function initAppendSpace()
{
    textComp = document.getElementById("textComp");
    //Econsole.log(textComp)
}
function appendSpace(text)
{
    //TODO optimise
    var textComp = document.getElementById("textComp");
    textComp.innerHTML += text;
    //console.log(this.textComp.innerHTML)
}
function animationFade(name)
{
   console.log("Fade Started:"+name)
    var element = document.getElementById(name);
    console.log("Fade Started:" + element)

    if(name.length = 1)
        faded.push(element);
    let anim1 = setInterval(function () {

        // console.log(element.style.opacity);

        element.style.opacity = parseFloat(element.style.opacity) + 0.02;

        if (parseFloat(element.style.opacity) >= 1) {
            clearInterval(anim1)
            console.log("Fade In Finished");
        }

    }, 20);
}
function setCookie(cname, cvalue, exdays)
{
    if(!checkCookie(cname))
    {
        console.log("Cookie created ")
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/chat";
    }
  
}

function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
            end = dc.length;
        }
    }
    // because unescape has been deprecated, replaced with decodeURI
    //return unescape(dc.substring(begin + prefix.length, end));
    return decodeURI(dc.substring(begin + prefix.length, end));
}

function checkCookie(name,read) {
    var myCookie = getCookie(name);

    if (myCookie == null) {
        return false;
    }
    else {

        return true;
    }
}



