function summonPageBar() {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "l", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var pages = [];
    var tL = 450;
    //tL = tL - 7*10;
    var pageMarker;
    var color1 = "#aa610a";
    var color2 = "#990a0a";
    var currentpage;


    var topAl = "12.5px";
    var botAl = "0px"
    var rightAl = "400px";



    var main = document.getElementById("main");
    var headBar = document.getElementById("head");
    var tP = 10;//no including left and right
    currentpage = tP - 2;
    var spacing = (tL / tP);

    var pastColor;
       // 423de6
    if (tP >= 2) {
        var temp = createDiv("absolute", "10px", "10px", "0px","a", "0px");
        temp.style.backgroundColor = color1;
        headBar.appendChild(temp);

       

        temp = createDiv("absolute", "10px", "10px", "a", "0px", "0px");
        temp.style.backgroundColor = color2;
        temp.addEventListener("click", function () {
            console.log("ran");
            if (currentpage < 0) {
                pages[0].style.color = pastColor;
                currentpage = tP - 2;
            }
            console.log(currentpage)
            console.log(pastColor)

            pastColor = rbgToHex(pages[currentpage].style.color);
            pages[currentpage].style.color = "#423de6";

            if (currentpage != tP - 2) { console.log("in"); pages[currentpage + 1].style.color = pastColor; }
            

            currentpage--;
        });

        headBar.appendChild(temp);
    }

    var alphaOff = tP - 2;
    for (x = 1; x < tP; x++) {

        //  var div = document.createElement('a');
        var calc = (spacing * x);
        var norm = calc / tL;
        //  div.innerHTML ="{"+alphabet[alphaOff]+"}";
        // div.style.position = "absolute";
        // div.style.color = blendColors(color1,color2,norm);
        var fontSize = Math.min(Math.max((spacing / tL) * tL / 1.4, 0), 20);

        var temp = createText("relative", fontSize + "px", calc, blendColors(color1, color2, norm), "{" + alphabet[alphaOff] + "}", topAl, rightAl);
        alphaOff--;

        pages[x - 1] = temp;
        main.appendChild(temp);
       
        //div.style.opacity = norm;
        // main.appendChild(div)
        //  div.style.fontSize = fontSize +  "px";
        // div.style.right = calc-(div.clientWidth/2)+"px";
    }
    pastColor = rbgToHex(pages[currentpage].style.color);
    //pageMarker = document.createElement('span');
    //main.appendChild(pageMarker)
    //console.log(pages[currentpage].style.right);
    //pageMarker.style.width = pages[currentpage].clientWidth /2 + "px";
    //console.log("client: " + pages[currentpage].clientWidth);
    //pageMarker.style.height = "2px";
    //pageMarker.style.backgroundColor = "red";
    //pageMarker.style.position = "absolute";
    //pageMarker.style.right = parseInt(pages[currentpage].style.right.replace("px", "")) + pages[currentpage].clientWidth / 4 + "px";
}


function rbgToHex(string)
{
    var a = string.split("(")[1].split(")")[0];
    a = a.split(",");
    var b = a.map(function (x) {             //For each array element
        x = parseInt(x).toString(16);      //Convert to a base16 string
        return (x.length == 1) ? "0" + x : x;  //Add zero if we get only one character
    })
    b = "#" + b.join("");
    return b
}

function blendColors(colorA, colorB, amount) {
    const [rA, gA, bA] = colorA.match(/\w\w/g).map((c) => parseInt(c, 16));
    const [rB, gB, bB] = colorB.match(/\w\w/g).map((c) => parseInt(c, 16));
    const r = Math.round(rA + (rB - rA) * amount).toString(16).padStart(2, '0');
    const g = Math.round(gA + (gB - gA) * amount).toString(16).padStart(2, '0');
    const b = Math.round(bA + (bB - bA) * amount).toString(16).padStart(2, '0');
    return '#' + r + g + b;
}

function createDiv(position, width, height, right,left, top) {
    var obj = document.createElement("div");
    obj.style.position = position;
    obj.style.width = width;
    obj.style.height = height;
    obj.style.right = right;
    obj.style.top = top;
   
    return obj;
}
function createText(position, fontSize, calc, color, inner,top , right) {
    var obj = document.createElement("a");
   // obj.style.position = position;
    obj.style.color = color;
    //obj.style.top = top;
   // obj.style.right = right;

    obj.innerHTML = inner;
 main.appendChild(obj);
    obj.style.right = calc - (obj.clientWidth / 2) + "px";
    obj.style.fontSize = fontSize;
    return obj;
}
function nextPage() {
    console.log("ran");
    currentpage--;
    if (currentpage < 0) {
        currentpage = tP - 2;
    }
    pageMarker.style.right = parseInt(pages[currentpage].style.right.replace("px", "")) + pages[currentpage].clientWidth / 4 + "px";
}


//window.addEventListener("resize", resize);