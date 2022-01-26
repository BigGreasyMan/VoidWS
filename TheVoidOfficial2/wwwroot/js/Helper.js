

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

    let anim1 = setInterval(function () {
        
        console.log(element.style.opacity);

        element.style.opacity = parseFloat(element.style.opacity) + 0.02;

        if (parseFloat(element.style.opacity) >= 1) {
            clearInterval(anim1)
            console.log("Fade In Finished");
        }

    }, 20)
}



