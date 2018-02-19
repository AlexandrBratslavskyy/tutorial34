var bgText = document.getElementById("bgText");
var prevDiv = document.getElementById("preview");
var c1 = document.getElementById("choice1");
var c2 = document.getElementById("choice2");
var c3 = document.getElementById("choice3");
var picChooser = document.getElementById("picChooser");

var numUse = 0;

bgText.addEventListener("keyup", function (ev) {
    //console.log(ev.keyCode);
    if(ev.keyCode == 13){ //if1S
        //console.log(c1.checked, c2.checked, c3.checked)
        if(c1.checked){ //if2S
            if(bgText.value == "bird"){ //if3S
                document.body.style.backgroundImage = "url(imgs/1.jpg)";
            } else if(bgText.value == "grass"){
                document.body.style.backgroundImage = "url(imgs/2.jpg)";
            } else if(bgText.value == "dog"){
                document.body.style.backgroundImage = "url(imgs/3.jpg)";
            } else {
                document.body.style.backgroundColor = bgText.value;
            }} //if23E
        
        else if(c2.checked){ //if4S
            if(bgText.value == "bird"){ //if5S
                prevDiv.style.backgroundImage = "url(imgs/1.jpg)";
            } else if(bgText.value == "grass"){
                prevDiv.style.backgroundImage = "url(imgs/2.jpg)";
            } else if(bgText.value == "dog"){
                prevDiv.style.backgroundImage = "url(imgs/3.jpg)";
            } else {
            prevDiv.style.backgroundColor = bgText.value;
            }} //if45E
        
        else if (c3.checked){ //if6S
            if(bgText.value == "bird"){ //if7S
                menu.style.backgroundImage = "url(imgs/1.jpg)";
            } else if(bgText.value == "grass"){
                menu.style.backgroundImage = "url(imgs/2.jpg)";
            } else if(bgText.value == "dog"){
                menu.style.backgroundImage = "url(imgs/3.jpg)";
            } else {
            menu.style.backgroundColor = bgText.value;
            }} //if67E
        
        else { //if8S
            alert("Choose an option");
        } //if8E
        bgText.value = "";
        numUse++;
        console.log(numUse);
        if(numUse > 5){
            //alert("You've used reached the limit. Please pay to use more!");
            document.getElementById("display").innerHTML = "You've used reached the limit. Please pay to use more!";
        }
    } //if1E
});
picChooser.addEventListener("change", function (){
    var picNum = parseInt(picChooser.value);
    if(picNum < 1){
        picChooser.value = 3;
    }
    if(picNum > 3){
        picChooser.value = 1;
    }
    prevDiv.style.backgroundImage = "url(imgs/"+picChooser.value+".jpg)";
});