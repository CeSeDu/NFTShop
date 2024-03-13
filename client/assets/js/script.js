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

// fetch('http://localhost:8080/main-section', {
//   method: 'GET',
//   mode: 'cors',
// })
// .then(response => {
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
//   return response.json();
// })
// .then(data => {
//   console.log(data); // Veriyi konsola yazdırma
// })
// .catch(error => {
//   console.error('İstek hatası:', error);
// });

var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:8080/main-section', true);

xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    console.log(xhr.responseText); // Gelen veriyi konsola yazdır
  } else {
    console.error('İstek hatası:', xhr.statusText);
  }
};

xhr.onerror = function () {
  console.error('İstek hatası:', xhr.statusText);
};

xhr.send();

