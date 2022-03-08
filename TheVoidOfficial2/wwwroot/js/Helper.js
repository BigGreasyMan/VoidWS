
var CurrentAnimations = []

function KillAnimations()
{
    
    if (CurrentAnimations.length == 0) { return;}
    for (var x = 0; x < CurrentAnimations.length; x++)
    {
    console.log("killed animations")
        clearInterval([x])
    }
   // var element = document.getElementById("BaseModule")
   // element.parentNode.removeChild(element);
}

function resetText()
{
}
function TerminalOut(string)
{
    var Chars = string.split('');
    var Count = 0;
    var TextComp = document.getElementById("textComp");
    var OutAnimation = setInterval(function ()
    {
        if (Count == string.length-1) { clearInterval(OutAnimation) }
        var NextChar = Chars.shift();
        if (NextChar == "<") { NextChar = "<br/>" }
        TextComp.innerHTML += NextChar;
        Count++;
        
    },80)
}
function initAppendSpace()
{
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






function FlowAnimation(FlowName,TitleName)
{
    console.log("FlowRan")
    var Base = document.getElementById(FlowName);
    var Canvas = Base.querySelector('#canvas')

    var ctx = Canvas.getContext('2d');
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, Canvas.width, Canvas.height);

    var RenderBar = Base.querySelector("#RenderBar");
    var Title = Base.querySelector("#Title");

    var sectionSize = Canvas.height / 20;
    var offset = 0;
    var count = 0;
    console.log("a")

    //optimse this my making seperate function
    var FullRender;
    Title.innerHTML = "  ⚙ Rendering ⚙ ";

    var RandomRender = setInterval(function(){
                count++;
            if (count >= 15) {
                clearInterval(RandomRender);
                RenderBar.style.top = "0%"
                 FullRender = setInterval(FullRenderFunction, 50);
            } else {
                var random = Math.floor(Math.random() * Canvas.height);
                RenderBar.style.top = String(random / Canvas.height * 100) + "%";
                ctx.clearRect(0, random, Canvas.width, 10)
            }
        }, 50);


    var FullRenderFunction = function ()
    {
        if (parseInt(RenderBar.style.top) >= 100) {
            ctx.clearRect(0, 0, Canvas.width, Canvas.height)
            clearInterval(FullRender);
            RenderBar.style.top = "100%"
            Title.innerHTML = TitleName;
        }



        console.log(offset)
        var top = parseInt(RenderBar.style.top) + 5
        offset += sectionSize;

        ctx.clearRect(0, 0, Canvas.width, offset)

        RenderBar.style.top = top + "%";
    }

}


function SlowLoadAnimation() {
    var InnerModules = document.getElementsByClassName("InnerWraps");

    var InstaLoads = document.querySelectorAll("#InstaLoad");

    var SideBars = document.querySelectorAll("#amin");
    // var SideBars = [];
    var count = 4

    count = InnerModules.length;


    var elementsFlick = []; //elements that flick on
    var elementsFinalFade = [];

    for (var a = 0; a < InstaLoads.length; a++) { elementsFinalFade.push(InstaLoads[a]) }
    // var elementsFinalFade = []; // elemnts that turn back on all together

    for (var x = 0; x < count; x++) {
        var Flick = InnerModules[x].querySelectorAll("#Flick");

        for (var a = 0; a < Flick.length; a++) { elementsFlick.push(Flick[a]) }
        console.log(elementsFlick)


        var FinalFade = InnerModules[x].querySelectorAll("#FinalFade");

        for (var a = 0; a < FinalFade.length; a++) { elementsFinalFade.push(FinalFade[a]) }
    }
    console.log(elementsFlick.length)

    var RandomRender = setInterval(function () {
        var random = Math.floor(Math.random() * (elementsFlick.length - 1));
        console.log(random)
        var element = elementsFlick[random]
        elementsFlick.splice(random, 1)
        console.log("spliced" + elementsFlick.length)

        element.style.opacity = 1;
        if (elementsFlick.length == 0) {
            clearInterval(RandomRender);

            for (var x = 0; x < SideBars.length; x++) {
                SideBars[x].className = "ModuleSideBarOn";


            }
            for (var x = 0; x < elementsFinalFade.length; x++) {
                elementsFinalFade[x].style.opacity = 1;
            }
        }
    }, 30);









}


    var ChatContainer;
    var InputBox;
    var MaxCharMessage;
    var StatsPannel;
    var StatsButton;
     var MessageContainer;
    function OnStreamingPageLoad() 
    {
        var player = videojs('my-player');

        player.src("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4");
         MessageContainer = document.getElementById("MessageContainer")
        MessageContainer.addEventListener("DOMNodeInserted", frame)
         ChatContainer = document.getElementById("ChatContainer");
         InputBox = document.getElementById("InputBox");
        MaxCharMessage = document.getElementById("MaxCharMessage");
         StatsPannel = document.getElementById("StatsPannel");
         StatsButton = document.getElementById("StatsButton");
        StatsButton.addEventListener("click", Stats)
        InputBox.addEventListener("input", AutoScale)
        InputBox.addEventListener("load", Load())
        console.log("Ran Stream Init")
    }

    /// Streaming Page
    //InputBox.style.maxWidth = ChatContainer.clientWidth;
    //InputBox.addEventListener("keypress",charLimit)
    //console.log("width"+ ChatContainer.offsetWidth)
    var CharLimit = 100;
    var MaxHeight = 50;
    var IsStatsActive = false;
    var Offset = -3;
    var IsCharMessageOn = false;

    var StatsAnimation = null;
    function Stats() {
        if (!IsStatsActive) {


            StatsPannel.style.position = "relative";
            StatsAnimation = setInterval(AnimateStatsOut, 50);
        }
        else {
            StatsAnimation = setInterval(AnimateStatsIn, 50);
        }
    }

    function AnimateStatsOut() {

      
        console.log("Ran")
        StatsPannel.style.top = Offset + "%";
        Offset += 0.2;
        if (Offset >= 0) {
            console.log("in")
            Offset = 0;
            clearInterval(StatsAnimation)
            IsStatsActive = true

            return;
        }

    }
    function AnimateStatsIn() {

        console.log("Ran")
        StatsPannel.style.top = Offset + "%";
        Offset -= 0.2;


        if (Offset <= -3) {
            console.log("in")
            Offset = -3;
            clearInterval(StatsAnimation)
            IsStatsActive = false
            StatsPannel.style.position = "absolute";
            return;
        }
    }

    function Load() {
        InputBox.style.height = 0;
        InputBox.style.height = InputBox.scrollHeight + 'px';
        InputBox.value = ""
    }

function charLimit()
{
    if (InputBox.value.length == CharLimit)
    {
            IsCharMessageOn = true;
            MaxCharMessage.style.opacity = 1;
            MaxCharMessage.style.position = "static"
             return;
    }
    if (InputBox.value.length == 0)
    {
            InputBox.style.height = 0;
            InputBox.style.height = InputBox.scrollHeight + 'px';
           
    }
    if (IsCharMessageOn)
    {
            IsCharMessageOn = false;
            MaxCharMessage.style.opacity = 0;
            MaxCharMessage.style.position = "absolute";
    }
}
    function AutoScale() {
        console.log("ran")
        charLimit()

        if (MaxHeight <= parseInt(this.style.height)) { return; }
        this.style.height = 0;
        this.style.height = this.scrollHeight + 'px';
    }



   
    function frame() {
        console.log(MessageContainer.scrollHeight);
        MessageContainer.scrollBy(0, 20)
    }



  







