// console.log("conectado")

//Menu toggle

let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');

toggle.onclick = function () {
    navigation.classList.toggle('active')    
    main.classList.toggle('active')    
}

//add hovered in class in selected list item

let list = document.querySelectorAll('.navigation li');
function activeLink(){
    list.forEach((item) => 
    item.classList.remove('hovered'));
    this.classList.add('hovered');
}
list.forEach((item) =>
item.addEventListener('mouseover', activeLink))


//
/*
const xmlhttp = new XMLHttpRequest();
const url = "https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP031/106";

xmlhttp.open("GET", url, true);
xmlhttp.send();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    const datapoints = JSON.parse(this.responseText);
    console.log(datapoints);
  }
};
*/