//es6语法
//const [current,imgs] =[document.querySelector("#current"),document.querySelectorAll(".imgs img")];

//imgs.forEach(img=>img.addEventListener("click",(e)=>current.src=e.target.src));

const current = document.querySelector("#current");
const imgs =document.querySelectorAll(".imgs img");
const opacity =0.4;
imgs.forEach(img=>img.addEventListener("click",imgClick));

function imgClick(e) {
    //把所有的图片的透明度变成1
    imgs.forEach(img=>(img.style.opacity=1));
    current.src = e.target.src;
    //点击的图片一个透明度
    e.target.style.opacity =opacity;
//大图动画效果
    current.classList.add('fade-in');
    //移除动画效果
    setTimeout(()=>current.classList.remove("fade-in"),500)
    
}


