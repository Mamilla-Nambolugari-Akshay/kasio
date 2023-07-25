
function ac1(){
document.getElementById("res").value=" "}
function show1(input)
{
document.getElementById("res").value+=input}
function cal1()
{
var output=eval(document.getElementById("res").value);
document.getElementById("res").value=output}
function del1()
{
res.value=res.value.slice(0,-1)
}
function ac(){
document.getElementById("res1").value=" "}
function show(input)
{
document.getElementById("res1").value+=input}
function cal()
{
var output=eval(document.getElementById("res1").value);
document.getElementById("res1").value=output}
function log()
{
var output=eval(document.getElementById("res1").value);
document.getElementById("res1").value=Math.log(output)}
function log2()
{
var output=eval(document.getElementById("res1").value);
document.getElementById("res1").value=Math.log2(output)}
function log10()
{
var output=eval(document.getElementById("res1").value);
document.getElementById("res1").value=Math.log10(output)}
function ln()
{
var output=eval(document.getElementById("res1").value);
document.getElementById("res1").value=Math.LN2(output)}
function cosh()
{
var output=eval(document.getElementById("res1").value);
document.getElementById("res1").value=Math.cosh(output)}
function sih()
{
var output=eval(document.getElementById("res1").value);
document.getElementById("res1").value=Math.sinh(output)}

function cb()
{
var output=eval(document.getElementById("res1").value);
document.getElementById("res1").value=Math.cbrt(output)}
function tah()
{
var output=eval(document.getElementById("res1").value);
document.getElementById("res1").value=Math.tanh(output)}
function del5()
{
res1.value=res1.value.slice(0,-1)
}


function ac2(){
document.getElementById("res2").value=" "}
function show2(input)
{
document.getElementById("res2").value+=input}
function cal2()
{
var output=eval(document.getElementById("res2").value);
document.getElementById("res2").value=output}
function del2()
{
res2.value=res2.value.slice(0,-1)
}
function ac3(){
document.getElementById("res3").value=" "}
function show3(input)
{
document.getElementById("res3").value+=input}
function cal3()
{
var output=eval(document.getElementById("res3").value);
document.getElementById("res3").value=output}


function del3()
{
res3.value=res3.value.slice(0,-1)
}


function openPage(pageName,elm,color) {
  var i, myapp, aa;
 myapp= document.getElementsByClassName("myapp");
  for (i = 0; i < myapp.length; i++) {
    myapp[i].style.display = "none";
  }
aa = document.getElementsByClassName("aa");
  for (i = 0; i < aa.length; i++) {
    aa[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elm.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function ac3(){
document.getElementById("res3").value=" "}
function show3(input)
{
document.getElementById("res3").value+=input}
function cal3()
{
var output=eval(document.getElementById("res3").value);
document.getElementById("res3").value=output}

function round()
{
var output=eval(document.getElementById("res3").value);
document.getElementById("res3").value=Math.round(output)}
function sign()
{
var output=eval(document.getElementById("res3").value);
document.getElementById("res3").value=Math.sign(output)}

function floor()
{
var output=eval(document.getElementById("res3").value);
document.getElementById("res3").value=Math.floor(output)}

function ceil()
{
var output=eval(document.getElementById("res3").value);
document.getElementById("res3").value=Math.ceil(output)}
function abs()
{
var output=eval(document.getElementById("res3").value);
document.getElementById("res3").value=Math.abs(output)}

function del()
{
res3.value=res3.value.slice(0,-1)
}



