let input = document.querySelector('button');
let b = document.querySelector('.loader')

const generateKhodam = () =>{
    let a = document.getElementById("Nama").value;
    let arr1 = ["Makhluk yg mengikuti", 
                "Rokok tanpa korek", "Spakbor tanpa kopling", 
                "Kriss Lurus", "Titit si syarif",
                "Dua ama kontol satu"]
    let fixKhodam = arr1[Math.floor(Math.random()*arr1.length)]
    return `Khodam dalam diri ${a} adalah ${fixKhodam}`
}
function loaderOff(){
    let h1 = document.querySelector('h1')
    let refresh = document.querySelector('#refresh')
    b.style.display = "none";
    h1.style.display = "block";
    h1.style.fontSize = "3rem";
    h1.style.width = "50%";
    refresh.style.display = "block";
    refresh.onclick = function(){
        window.location.reload()
    }
    h1.innerHTML = generateKhodam()

}
input.onclick = function(){
   b.style.display = "block";
   document.querySelector('h1').style.display = "none";
   document.querySelector('p').style.display = "none";
   document.querySelector('.Input').style.display = "none";
   document.querySelector('button').style.display = "none";
   setTimeout(loaderOff, 2000);
}
