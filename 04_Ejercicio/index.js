//* 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
//* evento click que ejecute un console log con la información del evento del click
const btn = document.querySelector("#btnToClick");
btn.addEventListener("click", (e) => {
    console.log(e);
});

//*1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const eventFocus = document.querySelector(".focus");
eventFocus.addEventListener("focus", (e) => {
    console.log(e);
});


//* 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const eventInput = document.querySelector(".value");
eventInput.addEventListener("input", (e) => {
    console.log(e);
});