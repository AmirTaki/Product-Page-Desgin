let productImg = document.querySelector("#productImg")
let btn = document.querySelectorAll(".btn")


btn[0].onclick = () => {
    productImg.src = "./src/img/image1.png"   
    for(bt of btn){
        bt.classList.remove('active')
    }
    console.log(btn[0].classList)
      btn[0].className = "btn active"
}


btn[1].onclick = () => {
    productImg.src = "./src/img/image2.png"   
        for(bt of btn){
        bt.classList.remove('active')
    }
    btn[1].className = "btn active"
}


btn[2].onclick = () => {
    productImg.src = "./src/img/image3.png"   
    for(bt of btn){
        bt.classList.remove('active')
    }
     btn[2].className = "btn active"
}
