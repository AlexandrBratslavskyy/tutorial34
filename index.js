var menu = document.getElementById("menu");
var disp = document.getElementById("display");
var bgInp = document.getElementById("bgText");

var ir = document.getElementById("red");
var ib = document.getElementById("blue");
var ig = document.getElementById("green");

var rr = document.getElementById("rred");
var rb = document.getElementById("rblue");
var rg = document.getElementById("rgreen");

var colorInp = document.getElementById("colorInp");
var curElement = disp;

disp.addEventListener("click", function () {
    console.log(curElement);
    curElement = disp;
    console.log(curElement);
});
menu.addEventListener("click", function () {
    console.log(curElement);
    curElement = menu;
    console.log(curElement);
});
bgInp.addEventListener("click", function () {
    console.log(curElement);
    curElement = bgInp;
    console.log(curElement);
});

document.getElementById("change").addEventListener("click", function () {
    console.log(bgInp.value);
    curElement.style.backgroundColor = bgInp.value;
    bgInp.value = "";
});

ir.addEventListener("change", function () {
    curElement.style.backgroundColor = "rgb("+ir.value+", "+ig.value+", "+ib.value+")";
    rr.value = ir.value;
});
ig.addEventListener("change", function () {
    curElement.style.backgroundColor = "rgb("+ir.value+", "+ig.value+", "+ib.value+")";
    rg.value = ig.value;
});
ib.addEventListener("change", function () {
    curElement.style.backgroundColor = "rgb("+ir.value+", "+ig.value+", "+ib.value+")";
    rg.value = ig.value;
});

rr.addEventListener("change", function () {
    curElement.style.backgroundColor = "rgb("+rr.value+", "+rg.value+", "+rb.value+")";
    ir.value = rr.value;
});
rg.addEventListener("change", function () {
    curElement.style.backgroundColor = "rgb("+rr.value+", "+rg.value+", "+rb.value+")";
    ig.value = rg.value;
});
rb.addEventListener("change", function () {
    curElement.style.backgroundColor = "rgb("+rr.value+", "+rg.value+", "+rb.value+")";
    ib.value = rg.value;
});

colorInp.addEventListener("change", function () {
    curElement.style.backgroundColor = colorInp.value;
});