const links=[...document.querySelectorAll('.header .nav li a' )]
let lastElemnt = links.pop();
const images =[...document.querySelectorAll('.home .container .images .box')]
const desc =[...document.querySelectorAll('.home .container .images .box .desc')]
const sections=[...document.querySelectorAll('body > section')];
const setting = document.querySelector('.nav .setting');
const colorsList = document.querySelectorAll('.colors .color ');
const closeSetting =document.querySelector('.setting > i');
const mode = document.querySelectorAll('.setting  .mode img');
const moon = document.querySelector('.setting  .mode img:nth-child(2)')
const sun = document.querySelector('.setting  .mode img:nth-child(3)')
const btnContact = document.querySelector('.about .container .btn-content')
let x=0 , index=0
let autoChange = document.getElementById('chek');



var loding = document.getElementById('loading');
window.addEventListener('load',function(){
 loding.style.display ="none";
})


links.forEach(link=>{
    link.addEventListener('click',()=>{
        links.forEach(link=>{
            link.classList.remove('active');
            if(link.getAttribute('data-index') < 3){
            index = link.getAttribute('data-index')
            if(index < sections.length){
            sections[link.getAttribute('data-index')].classList.remove('d-block');
            sections[link.getAttribute('data-index')].classList.add('d-none');
            lastElemnt.classList.remove('active')
            setting.classList.remove('active')
            }}
        })
        link.classList.add('active');
        sections[link.getAttribute('data-index')].classList.remove('d-none');
        sections[link.getAttribute('data-index')].classList.add('d-block');
        settingIcon.classList.remove('fa-spin')
})  
})

const settingIcon = document.querySelector('.header ul li:nth-child(4) a i' )
console.log(settingIcon)
lastElemnt.onclick = ()=> {
    setting.classList.toggle('active')
    lastElemnt.classList.toggle('active')
    settingIcon.classList.toggle('fa-spin')
}

sections[0].onclick = ()=> {
    setting.classList.remove('active')
    lastElemnt.classList.remove('active')
    settingIcon.classList.remove('fa-spin')
}

sections[1].onclick = ()=> {
    setting.classList.remove('active')
    lastElemnt.classList.remove('active')
    settingIcon.classList.remove('fa-spin')
}

sections[2].onclick = ()=> {
    setting.classList.remove('active')
    lastElemnt.classList.remove('active')
    settingIcon.classList.remove('fa-spin')
}

closeSetting.onclick = ()=> {
    setting.classList.remove('active')
    lastElemnt.classList.remove('active')
    settingIcon.classList.remove('fa-spin')
}

btnContact.classList.add('d-none')


btnContact.onclick = () => {
    console.log(123)
    sections[1].classList.add('d-none');
    sections[1].classList.remove('d-block');
    sections[2].classList.add('d-block');
    sections[2].classList.remove('d-none');
    links[1].classList.remove('active')
    links[2].classList.add('active')
}


colorsList.forEach(ele=>{
    ele.addEventListener('click',()=>{
        colorsList.forEach(ele=>{
            ele.classList.remove('active')
        })
        ele.classList.add('active')
        document.documentElement.style.setProperty('--main-color',ele.dataset.color)
    })
})

moon.onclick=()=>{
    mode.forEach(ele=>{
        ele.classList.remove('d-block')
        ele.classList.remove('d-none')
    })
     moon.classList.add('d-none')
     sun.classList.remove('d-block')
     document.body.classList.remove('light-mode')
}


sun.onclick=()=>{
    mode.forEach(ele=>{
        ele.classList.remove('d-block')
        ele.classList.remove('d-none')
    })
  sun.classList.add('d-none')
  moon.classList.remove('d-block')
  document.body.classList.add('light-mode')
}

images.forEach(img=>{
img.addEventListener('click',()=>{
    const isActive = img.className.includes('active');
    if(isActive) {
        img.classList.add('dark')
        desc[img.getAttribute('data-index')].classList.add('active')
        autoChange.checked = false;
        return;
    }
    images.forEach(img=>{
        desc[img.getAttribute('data-index')].classList.remove('active');
        img.classList.remove('active')
        img.classList.remove('dark')
      
    })
    img.classList.add('active')
    autoChange.checked = false;
    x=img.getAttribute('data-index');
    console.log(x)
})
})


autoChange.onclick = setInterval(()=>{
    if(autoChange.checked == true){
if(x>=4) {
    x=0;
}
else {
    x++;
}}

active(x)
} ,3000)


autoChange.onclick=()=>{
    desc.forEach(ele=>{
        ele.classList.remove('active')
    })
    images.forEach(img=>{
        img.classList.remove('dark')
    })

}

// autoChange.onclick=console.log(autoChange.cheked == true);





function active(x){
images.forEach(img=>{
    img.classList.remove('active') 
})
console.log(x)
images[x].classList.add('active')
}
  

// ===== about ==== 


let index2=0;
links[1].onclick =()=>{
    setTimeout(() => {
        btnContact.classList.remove('d-none')
    } ,8000)
index2++;
if(index2 === 1){
// var typed = new Typed(".auto", {
//     strings: ['ABOUT US'],
//     typeSpeed: 60,
//     backSpeed:50,
//     cursorChar:'',
//     loop:false
//     }
// );

var typed = new Typed(".auto2", {
    strings: ['','This site introduces some countries It introduces the country and provides you with several information about it'],
    typeSpeed: 32,
    backSpeed:50,
    backDelay:800,
    cursorChar:'',
    loop:false
  });

}}