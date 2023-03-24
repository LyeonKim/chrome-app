const images = [
    "./images/bg01.png",
    "./images/bg02.png",
    "./images/bg03.png",
    "./images/bg04.png",
]

const bgBtn = document.querySelector('.bg-btn');
const bgImage = document.querySelector("body");

bgBtn.addEventListener('click', () => {
    const pickedImage = images[ Math.floor(Math.random() * images.length)];
    
    bgImage.style.background = `url(${pickedImage}) no-repeat 50% 50% / cover`; 
})

// const bgImage = document.createElement("img"); //js상에서만 존재
// bgImage.src = pickedImage; 
// bgImage.className = 'background-img';

// const div = document.querySelector('#quote .content')
// div.appendChild(bgImage);