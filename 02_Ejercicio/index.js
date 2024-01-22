//* 1.1 Inserta dinamicamente en un html un div vacio con javascript.
const myDiv = document.createElement("div");
document.body.appendChild(myDiv);

//* 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const myDiv1 = document.createElement("div");
const myP = document.createElement("p");
document.body.appendChild(myDiv1);
myDiv1.appendChild(myP);

//* 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
//* loop con javascript.

const myDiv2 = document.createElement("div");

for (let i = 0; i < 6; i++) {
    const myP2 = document.createElement("p");
    myDiv2.appendChild(myP2);
}
document.body.appendChild(myDiv2);

//*1.4 Inserta dinamicamente con javascript en un html una p con el 
//*	texto 'Soy dinámico!'.

const pDinamic = document.createElement("p");
pDinamic.textContent = "Soy dinámico";
document.body.appendChild(pDinamic);

//* 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const myH2 = document.querySelector(".fn-insert-here");
myH2.textContent = "Wubba Lubba dub dub";

//* 1.6 Basandote en el siguiente array crea una lista ul > li con 
//* los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const myUl = document.createElement("ul");
for (const app of apps) {
    const myLi = document.createElement("li");
    myLi.textContent = app;
    myUl.appendChild(myLi);
}
document.body.appendChild(myUl);

//* 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const myNodos = document.querySelectorAll(".fn-remove-me");
for (const nodo of myNodos) {
    nodo.remove();
}

//* 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
//* Recuerda que no solo puedes insertar elementos con .appendChild.
const myP3 = document.createElement("p");
myP3.textContent = "Voy en medio";
const parentDiv = document.querySelector("div");
document.body.insertBefore(myP3, parentDiv);

//* 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
//* .fn-insert-here
const allDivs = document.querySelectorAll("div.fn-insert-here");

for (const div of allDivs) {
    const p = document.createElement("p");
    p.textContent = "Voy dentro";
    div.appendChild(p);
};