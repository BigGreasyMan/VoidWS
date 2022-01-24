window.addEventListener("resize", resize);



var currentSpinners = []




var disable = false;
function resize()
{
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
    console.log(w);
    if (disable == false || w < 820) {
        disable = true;
        for (var x = 0; x < currentSpinners.length; x++) {
            currentSpinners[x].disable();
            currentSpinners[x].responsivePres();
            document.getElementById("productFlow").style.opacity = 1;
            document.getElementById("productFlow").style.zIndex = 0;
        }
    }
    else {
        disable = true;
        for (var x = 0; x < currentSpinners.length; x++) {
            currentSpinners[x].enable();
            currentSpinners[x].resetPres();
            document.getElementById("productFlow").style.opacity = 0;
            document.getElementById("productFlow").style.zIndex = -1;
        } }

}



    //LEFT,TOP
var centerLocc;
    //var mainPannel ="main";
    //var overPannel = "overPannel"

var scale = 1;


var buys = 0;

var isPresenting = false;
var currentPresentation = null;


    function scriptInit(centerLoc)
    {
        centerLocc = centerLoc;
       
    }
    function setScale(_scale)
    {
        scale = _scale;
    }


    function createSpinner(amount,container)
    {
        var mods = [];
        for (var i = 0; i < amount; i++)
        {
            mods[i] = new module(["[Rock]", "[$10]", "[Buy]"])
        }

        var spin1 = new moduleRotSpinner(mods
            , 3, container, "overPannel", [200, 400]);
        //setScale(modScale);
        currentSpinners.push(spin1);
        spin1.initLoad();
    }

    function firstCall()
    {
        buys = document.getElementsByName("buyButton")

        if (document.documentElement.clientWidth < 820) {
            for (var x = 0; x < currentSpinners.length; x++)
            {
                currentSpinners[x].disable();
                currentSpinners[x].responsivePres();
            }
        }
    }
   
    class moduleRotSpinner
    {
        constructor(modData,scale,mainPannel,overPannel,centerLoc) {
        
            this.modW = 280;
            this.modH = 150;

           this.modDimentions = this.modH*scale;

            this.radius = Math.ceil(((this.modDimentions * modData.length) / (2 * Math.PI)) - 20 * modData.length)
           this.throttle = false;
           this.centerLoc = centerLoc;
           this.scale = scale;
           this.width = (this.radius*2);
           this.height = this.width;
           this.modData = modData;

           this.mainPannel = mainPannel;
           this.overPannel = overPannel;


           
           //this.currentPresentation = null;
           //this.isPresenting = false;

            var container = document.getElementById(mainPannel)
           container.style.width =   this.height + "px";
            container.style.height = this.height + "px";
           
           console.log(`ModuleSpinner Created \n  Radius : ${this.radius} \n  Scale : ${this.scale} \n  Width : ${this.width} \n  Height : ${this.height} \n  MainPannel : ${this.mainPannel} \n  OverPannel : ${this.overPannel} `);

           for(var x = 0; x < modData.length; x++)
           {
               var mod = modData[x];
               var self = this;
               mod.setParamters(self);
               mod.initPresentation();
               mod.initFirst();
           }
        }
        responsivePres()
        {
            for (var i = 0; i < this.modData.length; i += 1)
            {
                 this.modData[i].rootPres.style.width = "100%";
                this.modData[i].rootPres.style.height = "auto";
            }
        }
        resetPres() {
            for (var i = 0; i < this.modData.length; i += 1) {
                 this.modData[i].rootPres.style.width = "500px";
                this.modData[i].rootPres.style.height = "auto";
            }
        }
        disable()
        {
            var container = document.getElementById(this.mainPannel);
            container.style.opacity = 0;

        }
        enable()
        {
            var container = document.getElementById(this.mainPannel);
            container.style.opacity = 1;
        }

        initLoad()
        {
            var container = document.getElementById(this.mainPannel);
            var modules = container.getElementsByClassName("standModuleRoot");


            var angle = 0, step = (2*Math.PI) / this.modData.length;
         

            for (var i = 0; i < this.modData.length; i += 1) {
                

                var cM = this.modData[i].rootDisplay;
                var self = this;
                cM.setAttribute("draggable","true");
                  cM.addEventListener("drag", function(e)
                  {

                   if(self.throttle){return}
                    self.throttle=true;
                     var step = 1;
                     if(angle == 360)
                        angle =  0.2
   
                 
                  container.style.transform = 'rotate('+angle+'deg)'; 
                  for (var i = 0; i < self.modData.length; i += 1) {
                     var cM = self.modData[i].rootDisplay;
                     cM.style.transform='rotate('+((-angle))+'deg)'; 
                  }
                  angle+=step;
                  setTimeout( function() { self.throttle=false; console.log("throt done") } ,10);
                  });
              
               var x = Math.round(this.width/2 + this.radius * Math.cos(angle) - this.modW/2 ); 
               var y = Math.round(this.height/2 + this.radius * Math.sin(angle) - this.modH/2 );

               console.log(`Mod|Index:${i},X:${x},Y:${y}`)
               console.log(cM.className);
               cM.style.left = x +"px";
                cM.style.top = y + "px";
               angle += step;
               
             
              
            }
        }
    }
     


    //MOD DATA : ["[Rock]","[$20]","[Buy]"]
    class module
    {
        constructor(modData) {
                  this.lablesPres = [];
                    this.overPannel = "";
                    this.mainPannel = "";
                    this.isFadingIn = false;
                    this.centerLoc = [];
                    this.rootPres;
                    this.rootDisplay;
                    this.modData = modData;
                    this.scale = 1;
                    this.parent;
                    this.id = Math.floor((Math.random() * 9990) + 1);
                    
                  
        }

        setParamters(self)
        {
            this.scale = self.scale;
            this.centerLoc = self.centerLoc;
            this.mainPannel = self.mainPannel;
            this.overPannel = self.overPannel;
            this.parent = self;
            //pres module
            //presentationRoot: width,height
            //sideTabe: width height
            //hr: width
            //image : width height

        }


        initPresentation()
        {
            var main = document.getElementById(this.overPannel);
            this.rootPres = document.createElement("div");
           
            main.appendChild(this.rootPres);
           // this.presModules.push(this.root);
           this.rootPres.style=`
           width: 500px; height:auto; background-color: black; background-color: rgba(0, 0, 0, 0.5); position: absolute;
           border-radius: 1px; border-width: 0.25px; border-color: rgba(81, 116, 159, 0.4); border-style: solid; right:0px; 
           `;

            // this.rootPres.style.width =  parseInt(this.rootPres.style.width) *  this.scale;
            // this.rootPres.style.height =  parseInt(this.rootPres.style.height) *  this.scale;
            // this.rootPres.style.fontSize =  parseInt(this.rootPres.style.fontSize) *  this.scale;

            this.rootPres.style.left=this.centerLoc[0];
            this.rootPres.style.top=this.centerLoc[1];
            this.rootPres.style.opacity=0;

          
          var topModule = document.createElement("div");
          topModule.style=`width: 100%;  display:flex; flex-direction:row; 
          flex-wrap: nowrap; justify-content: flex-start; gap: 5px; margin: 6px;`
            
         var prodImage = document.createElement("img");
            prodImage.style =`top:0%;   width:140px; height:140px;
         content: url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.zGnn7M87JT55AHX8iY8_OAHaEo%26pid%3DApif=1);
         `

         var topSideModule = document.createElement("div");
         topSideModule.style = `overflow: hidden; font-size: 15px; color: #423de6; overflow-wrap: break-word;`;
         topSideModule.innerHTML=` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor perferendis voluptates explicabo magnam, saepe quas incidunt adipisci dolorem vel maiores.`

         var topSideBottemModule = document.createElement("div");
         topSideBottemModule.style=`margin-top: 5px;`;

         var offset = -4;
         for(var x = 0; x < 5; x++)
         {
             var rateStar = document.createElement("img");
             rateStar.src = "Star.svg";
             rateStar.style = `width: 17.5px;  position: relative; bottom: -2px;  left: ${offset*x}px;`
             topSideBottemModule.appendChild(rateStar);
         }

         var prodReviews = document.createElement("label");
         prodReviews.style=`display: inline; position: relative; font-size: 15px; color:#aa670e; left:-14px;`
         prodReviews.innerHTML="22 Reviews";

         var prodPrice = document.createElement("label");
         prodPrice.style=`display: block; position: relative; left: 4px; color:#aa670e; font-size:40px;"`;
         prodPrice.innerHTML="$11.54";

               
         this.rootPres.appendChild(topModule);
         topModule.appendChild(prodImage);         
         topModule.appendChild(topSideModule);        
         topSideModule.appendChild(topSideBottemModule); 

         topSideBottemModule.appendChild(prodReviews);
         topSideBottemModule.appendChild(prodPrice);


         //bottem module

       
         
       //  var prodInfo = document.createElement("p");
       //  prodInfo.style="overflow: hidden; font-size: 12px; color: #423de6; margin: 0%; margin-top: 10px; position: relative;";
       //  prodInfo.innerHTML=` 
        

       //      <img name="buyButton" src="Buybutton.svg" style=" width: 300px;  position: absolute; bottom:25px; right:10px;">
       //`;


            var prodInfo = document.createElement("img");
            prodInfo.style =" width: 180px; position: relative; float:left;   content: url(Buybutton2.svg);"
            

            /*<img name="buyButton" src="Buybutton.svg" style=" width: 300px;  position: absolute; bottom:25px; right:10px;">*/
        //  var buyContainer = document.createElement("span");
        //  buyContainer.style="width: 600px; height: 200px; float: right; background-color: re; position: relative; top:0%;";
        //  buyContainer.innerHTML=`  Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quisquam nam dicta, ipsa maiores qui vel iste magni quasi veniam! Quam inventore ab quisquam, incidunt, sapiente, exercitationem explicabo aspernatur et aut dolorum eos. 
         
        //  <span style="width: 600px; height: 200px; float: right; background-color: re; position: relative; top:0%; position:inline">
             
        //  </span>

        //  In error, vitae unde quidem cum, consequatur id assumenda rerum quae nostrum impedit soluta neque, blanditi`


            topSideBottemModule.appendChild(prodInfo);
        
         //this.rootPres.appendChild(bottemModule)
        //  var buyButtonImage = document.createElement("img");

        //  buyButtonImage.style=" width: 600px;  position: absolute; bottom:50px; right:10px;";
        //  buyButtonImage.src = "Buybutton.svg";


    
        }

        initFirst()
        {
            
            //set up structure
            var main = document.getElementById(this.mainPannel);

            this.rootDisplay = document.createElement("div");

            this.rootDisplay.className = "standModuleRoot";
            

            this.rootDisplay.style=`width: 280px; height: 150px; background-color: black; 
            background-color: rgba(0, 0, 0, 0.5); position: absolute; border-radius: 1px; 
            border-width: 0.25px; border-color: rgba(81, 116, 159, 0.4); border-style: solid;  `;



        //    this.rootDisplay.style.width =  parseInt( this.rootDisplay.style.width) *  this.scale;
        //    this.rootDisplay.style.height =  parseInt( this.rootDisplay.style.height) *  this.scale;
        //    this.rootDisplay.style.fontSize =  parseInt( this.rootDisplay.style.fontSize) *  this.scale;

           var topModule = document.createElement("div");
           topModule.style = `width: 280; height: 100; display:flex; flex-direction:row;
            flex-wrap: nowrap; justify-content: flex-start; gap: 5px;`


        //    sideModule.style.width =  parseInt(sideModule.style.width) *  this.scale;
        //    sideModule.style.height =  parseInt(sideModule.style.height) *  this.scale;


           var prodImage = document.createElement("img");

           prodImage.style=`
           top:0%;   width: 100px; height: 100px;  content: url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.zGnn7M87JT55AHX8iY8_OAHaEo%26pid%3DApif=1);
           `;


        //    image.style.width =  parseInt(image.style.width) *  this.scale;
        //    image.style.height =  parseInt(image.style.height) *  this.scale;


           var productDesc = document.createElement("div");
           productDesc.style=`
            overflow: hidden; font-size: 15px; color: #423de6;
            `;

            productDesc.innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ab eaque est sed architecto, officiis odit nesciunt minima incidunt"
           // content.style.left =  parseInt(content.style.left) *  this.scale;

            var bottemModule = document.createElement("div");

           bottemModule.style=`width: 250px; height: 25px;`;

           var prodReviews = document.createElement("label");
            prodReviews.style=`display: inline; position: relative; font-size: 10px; color:#aa670e; left:-14px;`
            prodReviews.innerHTML="22 Reviews";

            var prodPrice = document.createElement("label");
            prodPrice.style=`display: block; position: relative; left: 4px; color:#aa670e;"`;
            prodPrice.innerHTML="$11.54";



           this.rootDisplay.appendChild(topModule);

           this.rootDisplay.appendChild(bottemModule);

           topModule.appendChild(prodImage);

           topModule.appendChild(productDesc);

        


           
            //gen stars
            var offset = -4;
            for(var x = 0; x < 5; x++)
            {
                var rateStar = document.createElement("img");
                rateStar.src = "Star.svg";
                rateStar.style = `width: 25px;  position: relative; bottom: -2px;  left: ${offset*x}px;`
                bottemModule.appendChild(rateStar);
            }
            bottemModule.appendChild(prodReviews);
            bottemModule.appendChild(prodPrice);

            main.appendChild(this.rootDisplay);
            
            //set up events
            var self = this;
            
            this.rootDisplay.addEventListener("mouseover",function()
            {   
                console.log(isPresenting);
                if (isPresenting || currentPresentation == self.rootPres) { return;}
                isPresenting = true;
              
                if (currentPresentation != null)
                {
                    console.log(`Fading Out Current Presentation \n ${currentPresentation}`);

                    //self.parent.isPresenting = true;

                   
                    let step = 1;
                    let anim2 = setInterval(function(){
                        var final = null;
                        console.log("Back");
                        var element = currentPresentation;
                        console.log(element.style.marginLeft);
                       // element.style.left = parseFloat(element.style.left) + step;
                        //self.parent.currentPresentation.style.opacity = parseFloat(self.parent.currentPresentation.style.opacity) + -0.01;
                        currentPresentation.style.opacity = parseFloat(currentPresentation.style.opacity) + -0.01;
                        if( parseFloat(element.style.opacity) >= 0)
                        {
                            element.style.opacity = 0;
                            clearInterval(anim2);
                            //element.style.left = 70;
                            console.log("Fade Cleared");

                            self.fadeIn(self)
                          
                        }
                    },20);
                    
                    
                }
                else
                {
                  self.fadeIn(self)
                }
                
              
            });

            // this.rootDisplay.addEventListener("mouseleave",function()
            // {
            //     self.isHovering = false;
            //     console.log("mouseLeave");
            //     let step = 1;
            //     let anim1 = setInterval(function(){
            //         var final = null;
                    
            //         var element = self.root.childNodes[0];
            //             console.log(element.style.marginLeft);
            //             final = element; //0.0182
            //             element.style.left = parseFloat(element.style.left) + step;
            //             self.root.style.opacity = parseFloat(self.root.style.opacity) + -0.0142;
            //             element.style.opacity = parseFloat(element.style.opacity) + -0.0142;
                   
            //         if( parseFloat(element.style.left) >= 70){clearInterval(anim1); }
            //     },10);
                
            // });
        }
        fadeIn(self)
        {
            currentPresentation = self.rootPres;
    
            console.log("Fading in Started:"+self.id+currentPresentation)
            //self.rootPres.style.opacity = 1;
            let step = 1;
            let anim1 = setInterval(function(){
                var final = null;
                var element = self.rootPres;
                    //element.style.left = parseFloat(element.style.left) + -step;
                    self.rootPres.style.opacity = parseFloat( self.rootPres.style.opacity) + 0.01;
                    element.style.opacity = parseFloat(element.style.opacity) + 0.01;
                
                if(parseFloat(element.style.opacity) >= 1)
                {
                    clearInterval(anim1)
                    console.log("Fade In Finished");   
                   isPresenting = false; 
                    //element.style.left = 0; 
                   // self.rootPres.style.opacity = 1
                    //element.style.opacity = 1
                }
            },20)
        }

    } 

    