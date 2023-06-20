
// var hamLine
// hamLine = querySelector("line1");


let data =[
    {
        "slideNo": 1,
        "img1Path": 'images/barkbox-alt.svg',
        "img2Path": 'images/verizon-media-alt.svg',
        "img3Path": 'images/box-alt.svg',
        "img4Path": 'images/expensify-alt.svg'
    },
    {
        "slideNo": 2,
        "img1Path": 'images/instacart-alt.svg',
        "img2Path": 'images/logitech-alt.svg',
        "img3Path": 'images/dialpad-alt.svg',
        "img4Path": 'images/philips-alt.svg'
    },
    {
        "slideNo": 3,
        "img1Path": 'images/wisetech-global-alt.svg',
        "img2Path": 'images/microsoft-alt.svg',
        "img3Path": 'images/intercom-alt.svg',
        "img4Path": 'images/overstock-alt.svg'
    },
    {
        "slideNo": 4,
        "img1Path": 'images/chevron-alt.svg',
        "img2Path": '',
        "img3Path": '',
        "img4Path": ''
    },
]
// var ham = document.querySelector(".ham")
var ham = document.querySelector('.ham')
// console.log(ham);
let isOpen = 0;
function openHam() {

    if(isOpen===0){
        // console.log("clicked")
        ham.classList.remove('disabled-ham');
        isOpen =1;
    }
    else{
        document.querySelector(".ham").classList.add('disabled-ham');
        isOpen = 0;
    }
}
var hamBtn = document.querySelector(".hamburger-button");
hamBtn.addEventListener("click", openHam);
// hamBtn.addEventListener("click", openHam);


let jsAddition = document.querySelector(".js-addition");
const jsAdditionText = [" developer"," data scientist"," system admin"," mobile developer"," game developer",];
let i = 0;
// let jsAdditionSlide = document.querySelectorAll(".js-addition-slideIn")

function textAddition(){
    // console.log("in function");
    document.querySelector(".js-addition").innerHTML = jsAdditionText[i];
    i = i + 1;
    if(i>4){
        i = 0;
    }
};

// console.log("working");
setInterval(textAddition,2000);

// let j=0;
// function scrollX() {
//     if(j===0){
//         document.getElementById("1").classList.remove('d-none');
//         document.getElementById("2").classList.remove('d-none');
//         document.getElementById("3").classList.remove('d-none');
//         document.getElementById("4").classList.remove('d-none');
//         j=1;
//     }
//     else if(j===1){
//         document.getElementById("1").classList.add('d-none');
//         document.getElementById("2").classList.add('d-none');
//         document.getElementById("3").classList.add('d-none');
//         document.getElementById("4").classList.add('d-none');
//         document.getElementById("5").classList.remove('d-none');
//         document.getElementById("6").classList.remove('d-none');
//         document.getElementById("7").classList.remove('d-none');
//         document.getElementById("8").classList.remove('d-none');
//     }
// }

let isboxAppear = 0;
function handleScroll() {
    const scrollPosition = window.scrollY;

    if(scrollPosition > 2000 && scrollPosition< 2650){
        boxAppear();
        isboxAppear = 1;
        window.removeEventListener('scroll', handleScroll);
    }
    else{
        window.addEventListener('scroll', handleScroll);
    }
}

window.addEventListener('scroll', handleScroll);

function boxAppear() {
    document.querySelector("#flex-1").classList.toggle('is-ready');
    document.querySelector("#flex-1").classList.toggle('animations-show-1');
    document.querySelector("#flex-2").classList.toggle('is-ready');
    document.querySelector("#flex-2").classList.toggle('animations-show-2');
    document.querySelector("#flex-3").classList.toggle('is-ready');
    document.querySelector("#flex-3").classList.toggle('animations-show-3');

}
window.addEventListener('scroll', handleSctoll2);

function handleSctoll2() {
    const scrollPosition2 = window.scrollY;

    if(scrollPosition2 >4000 && scrollPosition2 <4500){
        boxAppear2();
        window.removeEventListener('scroll', handleSctoll2);
    }
    else{
        window.addEventListener('scroll', handleSctoll2);
    }
}

function boxAppear2() {
    document.querySelector("#appearing-box-1").classList.toggle('animations-show-1');
    document.querySelector("#appearing-box-2").classList.toggle('animations-show-2');
    document.querySelector("#appearing-box-3").classList.toggle('animations-show-3');
    document.querySelector("#appearing-box-4").classList.toggle('animations-show-4');
}

// function navigate(index) {
//     console.log("navigate working");
//     var thirdBodyMain = document.querySelector(".third-body-main");
//     slide = document.createElement('div');
//     slide.className = "slide";
//     slide.id = data[index].slideNo;
    
// }


let thirdBodyActivate = document.querySelectorAll(".basic");

thirdBodyActivate[0].addEventListener("click", activateDiv1);
function activateDiv1() {
    thirdBodyActivate[0].classList.remove('non-active');
    thirdBodyActivate[0].classList.add('active');
    for(let i = 1 ; i<5 ;i++){
        thirdBodyActivate[i].classList.remove('active');
        thirdBodyActivate[i].classList.add('non-active');
    }
}
thirdBodyActivate[1].addEventListener("click", activateDiv2);
function activateDiv2() {
    thirdBodyActivate[1].classList.remove('non-active');
    thirdBodyActivate[1].classList.add('active');
    // for(let i = 0 ; i<5 && i!=1 ;i++){
    //     thirdBodyActivate[i].classList.remove('active');
    //     thirdBodyActivate[i].classList.add('non-active');
    // }
    thirdBodyActivate[2].classList.remove('active');
    thirdBodyActivate[2].classList.add('non-active');
    thirdBodyActivate[3].classList.remove('active');
    thirdBodyActivate[3].classList.add('non-active');
    thirdBodyActivate[4].classList.remove('active');
    thirdBodyActivate[4].classList.add('non-active');
    thirdBodyActivate[0].classList.remove('active');
    thirdBodyActivate[0].classList.add('non-active');
}
thirdBodyActivate[2].addEventListener("click", activateDiv3);
function activateDiv3() {
    thirdBodyActivate[2].classList.remove('non-active');
    thirdBodyActivate[2].classList.add('active');
    // for(let i = 0 ; i<5 && i!=2 ;i++){
    //     thirdBodyActivate[i].classList.remove('active');
    //     thirdBodyActivate[i].classList.add('non-active');
    // }
    thirdBodyActivate[1].classList.remove('active');
    thirdBodyActivate[1].classList.add('non-active');
    thirdBodyActivate[3].classList.remove('active');
    thirdBodyActivate[3].classList.add('non-active');
    thirdBodyActivate[4].classList.remove('active');
    thirdBodyActivate[4].classList.add('non-active');
    thirdBodyActivate[0].classList.remove('active');
    thirdBodyActivate[0].classList.add('non-active');
}
thirdBodyActivate[3].addEventListener("click", activateDiv4);
function activateDiv4() {
    thirdBodyActivate[3].classList.remove('non-active');
    thirdBodyActivate[3].classList.add('active');
    // for(let i = 0 ; i<5 && i!=3 ;i++){
    //     thirdBodyActivate[i].classList.remove('active');
    //     thirdBodyActivate[i].classList.add('non-active');
    // }
    thirdBodyActivate[1].classList.remove('active');
    thirdBodyActivate[1].classList.add('non-active');
    thirdBodyActivate[2].classList.remove('active');
    thirdBodyActivate[2].classList.add('non-active');
    thirdBodyActivate[4].classList.remove('active');
    thirdBodyActivate[4].classList.add('non-active');
    thirdBodyActivate[0].classList.remove('active');
    thirdBodyActivate[0].classList.add('non-active');
}
thirdBodyActivate[4].addEventListener("click", activateDiv5);
function activateDiv5() {
    thirdBodyActivate[4].classList.remove('non-active');
    thirdBodyActivate[4].classList.add('active');
    // for(let i = 0 ; i<5 && i!=3 ;i++){
    //     thirdBodyActivate[i].classList.remove('active');
    //     thirdBodyActivate[i].classList.add('non-active');
    // }
    thirdBodyActivate[1].classList.remove('active');
    thirdBodyActivate[1].classList.add('non-active');
    thirdBodyActivate[2].classList.remove('active');
    thirdBodyActivate[2].classList.add('non-active');
    thirdBodyActivate[3].classList.remove('active');
    thirdBodyActivate[3].classList.add('non-active');
    thirdBodyActivate[0].classList.remove('active');
    thirdBodyActivate[0].classList.add('non-active');
}

var checkBox = document.querySelector(".checkbox")
var change1 = document.getElementById('change-1');
var change2 = document.getElementById('change-2');

checkBox.addEventListener("click",priceChange);
function priceChange() {
    if(checkBox.checked){
        change1.innerText = "$6.50 USD";
        change2.innerText = "$13.50 USD";
    }
    if(!checkBox.checked){
        change1.innerText = "$7.70 USD";
        change2.innerText = "$15.40 USD";
    }
}