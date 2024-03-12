let changeTheamaLight = document.querySelector(".active-thema");
let changeTheamaDark = document.querySelector(".passive-thema");

let changeThema = function (){
    changeTheamaLight.addEventListener("click" , ()=> {

        changeTheamaLight.classList.add("active-thema");
        changeTheamaLight.classList.remove("passive-thema");
        changeTheamaDark.classList.add("passive-thema");
    });

    changeTheamaDark.addEventListener("click" , ()=> {
        changeTheamaDark.classList.add("active-thema");
        changeTheamaDark.classList.remove("passive-thema");
        changeTheamaLight.classList.add("passive-thema");
    });
}
changeThema();

var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:8080/main-section', true);
xhr.setRequestHeader('Access-Control-Allow-Origin', '*'); // CORS header eklemek
xhr.onload = function () {
  consoleç.log("istek tamamlandı")
};
xhr.send();

