var div1p =document.getElementById('div1p');
var div2p =document.getElementById('div2p');
var div3p =document.getElementById('div3p');
var div4p =document.getElementById('div4p');
var navp =document.getElementById('navp');
var sec1p =document.getElementById('sec1p');
var h1 =document.getElementById('h1');
var h2 =document.getElementById('h2');
var h3 =document.getElementById('h3');
var h4 =document.getElementById('h4');
var h4women =document.getElementById('h4women');
var goto =document.getElementById('goto');
var left =document.getElementById('left');
var right =document.getElementById('right');
var latest =document.getElementById('latest');
var for1 =document.getElementById('for');

var cartdiv =document.getElementById('cartdiv');
var accountdiv =document.getElementById('accountdiv');


cartdiv.addEventListener('mouseover',()=>{
    
    cartdiv.style.animation = `carthover 3s infinite`;
    
})
cartdiv.addEventListener('mouseleave',()=>{
    
    cartdiv.style.animation = `carthover 0s`;
    cartdiv.style.transform = 'translateX('+0+") scale("+1+")";
    
})
accountdiv.addEventListener('mouseover',()=>{
    
    accountdiv.style.animation = `carthover 3s infinite`;
    
})
accountdiv.addEventListener('mouseleave',()=>{
    
    accountdiv.style.animation = `carthover 0s`;
    accountdiv.style.transform = 'translateX('+0+") scale("+1+")";
    
})


var ul1 =document.getElementById('ul1');

var womansec =document.getElementById('womansec');
var sec2 =document.getElementById('sec2');
if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
    console.log('First time');
    sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
}

h4women.addEventListener('click',()=>{
    navp.style.animation = `3s .2s clicknav forwards`; 
    
    div1p.style.animation = ` 2s .1s clicksec1 forwards`;
    div2p.style.animation = ` 2s .25s clicksec1 forwards`;
    div3p.style.animation = ` 2s .4s clicksec1 forwards`;
    div4p.style.animation = ` 2s .55s clicksec1 forwards`;
    
    //
    accountdiv.style.animation = ` 2s  cartandaccountout forwards`; 
    cartdiv.style.animation = ` 2s  cartandaccountout forwards`;
    //
    sec2.style.display = 'block';
    sec2.style.animation = ` 2s 1.8s clicksec2 forwards`;
    
    left.style.animation = ` 3.5s 3.3s womanul forwards`;
    right.style.animation = ` 3.5s 3.3s womanul forwards`;
    latest.style.animation = ` 3.5s 3.1s womanul forwards`;
    for1.style.animation = ` 3.5s 3.1s womanul forwards`;
    goto.style.animation = ` 3.5s 6s womanul forwards`;
    
})
h1.addEventListener('mouseover',()=>{
    womansec.style.transform = 'translateY('+0+')';
    ul1.style.animation = `1s 1.1s womanul forwards`;

})
h1.addEventListener('mouseleave',()=>{
    womansec.style.transform = 'translateY('+-250+'px'+')';
    ul1.style.animation = ``;
})
womansec.addEventListener('mouseover',()=>{
    womansec.style.transform = 'translateY('+0+')';
    navp.style.animation = `1s hoverp forwards`;
    ul1.style.animation = `1s 1.1s womanul forwards`;
})
womansec.addEventListener('mouseleave',()=>{
    womansec.style.transform = 'translateY('+-250+'px'+')';
    navp.style.animation = `1s hoverpback forwards`;
    ul1.style.animation = ``;
})

navp.addEventListener('mouseover',()=>{
    if (window.innerWidth>1030){
        navp.style.animation = `1s hoverp forwards`;
    }
    
    
    
})
navp.addEventListener('mouseleave',()=>{
    if (window.innerWidth>1030){
        navp.style.animation = `1s hoverpback forwards`;
    }
    
    
})