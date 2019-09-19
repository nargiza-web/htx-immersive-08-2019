var container = document.getElementById("container");

var logo = document.createElement("h1");
var header = document.createElement("header");
header.setAttribute("class", "background color flex");

logo.innerHTML = "HighOnCoding";
header.appendChild(logo);

function headerWeb(){
var navigation = document.createElement("nav");

var ul = document.createElement("ul")
ul.setAttribute("class", "flex1");
var li = document.createElement("li");
//li.setAttribute("class", "padding margin")
var li1 = document.createElement("li");

li.setAttribute("class", "dots");
li1.setAttribute("class", "dots");

var a = document.createElement("a");
var a1 = document.createElement("a");

a.setAttribute("href", "#");
a1.setAttribute("href", "#");


a.textContent = "Home";
a1.textContent = "Categories";

a.setAttribute("class", "color padding");
a1.setAttribute("class", "color");

li.appendChild(a);
li1.appendChild(a1);
ul.appendChild(li);
ul.appendChild(li1);
navigation.appendChild(ul);
//navigation.appendChild(li1);
//header.appendChild(navigation);
return navigation;
}
var newHeader = headerWeb();
header.appendChild(newHeader);
container.appendChild(header);

function div(){
    var div1 = document.createElement("div");
    div1.setAttribute("class", "background1");
    var h2 = document.createElement("h2");
    var para = document.createElement("p");
    h2.textContent = "Curse of the Current Reviews";
    para.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    div1.appendChild(h2);
    div1.appendChild(para);
    return div1;
}
var newDiv = div();
container.appendChild(newDiv);

function div1(){
    var aDiv = document.createElement("div");
    aDiv.setAttribute("class","backgroundDiv padding");
    var h3 = document.createElement("h3");
    var par = document.createElement("p");
    var div = document.createElement("div");
    var par1 = document.createElement("p");
    var par2 = document.createElement("p");

    h3.textContent = "Hello WatchKit";
    h3.setAttribute("class", "h3");
    par.textContent = "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    par1.textContent = "12 comments";
    par1.setAttribute("class", "space");
    par2.textContent = "124 likes";
    par2.setAttribute("class", "space");

    div.appendChild(par1);
    div.appendChild(par2);
    div.setAttribute("class", "orange");

    aDiv.appendChild(h3);
    aDiv.appendChild(par);
    aDiv.appendChild(div);
    return aDiv;
}
var nextDiv = div1();
container.appendChild(nextDiv);

function div2(){
    var aDiv = document.createElement("div");
    aDiv.setAttribute("class","backgroundDiv padding");
    var h3 = document.createElement("h3");
    var par = document.createElement("p");
    var div = document.createElement("div");
    var par1 = document.createElement("p");
    var par2 = document.createElement("p");

    h3.textContent = "Introduction to Swift";
    h3.setAttribute("class", "h3");
    par.textContent = "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    par1.textContent = "15 comments";
    par1.setAttribute("class", "space");
    par2.textContent = "45 likes";
    par2.setAttribute("class", "space");

    div.appendChild(par1);
    div.appendChild(par2);
    div.setAttribute("class", "orange");

    aDiv.appendChild(h3);
    aDiv.appendChild(par);
    aDiv.appendChild(div);
    return aDiv;
}
 var lastDiv = div2();
 container.appendChild(lastDiv);





/*var aNewHeader = document.createElement('header');
var aNewNav = document.createElement('nav');
var aNewAnchor = document.createElement('a');
aNewAnchor.setAttribute("href", "#");
var aNewAnchor1 = document.createElement('a');
aNewAnchor1.setAttribute("href", "#");
var anchorText = document.createTextNode("Home");
var anchorText1= document.createTextNode("Categories");
aNewAnchor1.appendChild(anchorText1);
aNewAnchor.appendChild(anchorText);

aNewNav.appendChild(aNewAnchor);
aNewNav.appendChild(aNewAnchor1);
aNewHeader.appendChild(aNewNav);

var parent = document.getElementById("container");
parent.appendChild(aNewHeader);
*/


/* var para = document.createElement("p");
//var node = document.createTextNode("up above");
//para.appendChild(node);
para.textContent = 'blah';

var parent = document.getElementById("container");
parent.appendChild(para); */