//* 1.1 Basandote en el array siguiente, crea una lista ul > li 
//* dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul = document.createElement("ul");
for (const country of countries) {
    const li = document.createElement("li");
    li.textContent = country;
    ul.appendChild(li);
}
document.body.appendChild(ul);

//*  1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const element = document.querySelector(".fn-remove-me");
element.remove();

//* 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
//* en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const ul1 = document.createElement("ul");
const div = document.querySelector("div[data-function=printHere]");
for (const car of cars) {
    const li = document.createElement("li");
    li.textContent = car;
    ul1.appendChild(li);
}
div.appendChild(ul1);

//* 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
//* h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];
const body = document.querySelector("body");

for (const country of countries2) {
    const divs = document.createElement("div");
    const h4 = document.createElement("h4");
    const img = document.createElement("img");
    h4.textContent = country.title;
    img.src = country.imgUrl;
    divs.appendChild(h4);
    divs.appendChild(img);
    body.appendChild(divs);

}

//* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
//* elemento de la serie de divs.
const btn = document.createElement("button");
btn.textContent = "Eliminar";
body.appendChild(btn);
const allDivs = document.querySelectorAll("div");
const lastDiv = allDivs[allDivs.length - 1];
btn.addEventListener("click", () => {
    lastDiv.remove();
});

//* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
//* divs que elimine ese mismo elemento del html.
for (let i = 1; i < allDivs.length; i++) {
    const div = allDivs[i];
    const btnDivs = document.createElement("button");
    btnDivs.textContent = "Eliminar";
    div.appendChild(btnDivs);
    btnDivs.addEventListener("click", () => {
        div.remove();
    })
};

const lastBtn = allDivs[allDivs.length - 1].nextElementSibling;
lastBtn.remove();