let productImg = document.querySelector("#productImg")
let btn = document.querySelectorAll(".btn")


btn[0].onclick = () => {
    productImg.src = "./src/img/image1.png"   
}

btn[1].onclick = () => {
    productImg.src = "./src/img/image2.png"   
}

btn[2].onclick = () => {
    productImg.src = "./src/img/image3.png"   
}