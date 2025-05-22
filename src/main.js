let productImg = document.querySelector("#productImg")
let btn = document.querySelectorAll(".btn")

console.log(btn)
btn[0].onclick = () => {
    productImg.src = "./src/img/image1.png"   
}