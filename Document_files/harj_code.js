let content = document.getElementById("content");

let hr = document.createElement("hr");
let h3 = document.createElement("h3");
h3.textContent = "Vilma Kilpeläinen";

content.appendChild(hr);
content.appendChild(h3);

let ul = document.querySelector("ul");
let li = document.createElement("li");
li.textContent = "Sunnuntai";
ul.appendChild(li);

let turha = document.querySelector("ul li:first-child");

turha.remove();

let items = document.querySelectorAll("ul:first-child li");

for (item of items){
    let text = item.textContent;
    item.textContent = "";

    let b = document.createElement("b");
    b.textContent = text;
    item.appendChild(b);
}
function changeColor(){
    let elems = document.querySelectorAll("ul:first-child li");

    for (const elem of elems){
        elem.classList.toggle("colored");
    }
}