const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let anchorsArray = document.querySelectorAll('nav a');
for (i=0; i <anchorsArray.length; i++){
  anchorsArray[i].textContent = siteContent['nav'][`nav-item-${i+1}`];
} 

let h1 = document.querySelector('h1');
h1.innerHTML = siteContent['cta']['h1'].replaceAll(' ', "<br> ");

let button = document.querySelector('button');
button.textContent = siteContent['cta']['button'];

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

let h4Array = document.querySelectorAll('.main-content h4');

var h4Keys = [];
for (var key in siteContent['main-content']){
  if(key.includes('h4')){
    h4Keys.push(key);
  }
}
for (let i=0; i<h4Array.length; i++){
  h4Array[i].textContent = siteContent['main-content'][h4Keys[i]];
}

let pArray = document.querySelectorAll('.main-content p');

var pKeys =[];
for (var key in siteContent['main-content']){
  if(key.includes('content')){
    pKeys.push(key);
  }
}
for (let i=0; i<pArray.length; i++){
  pArray[i].textContent = siteContent['main-content'][pKeys[i]];
}

let mainImg = document.getElementById('middle-img');
mainImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

let contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent['contact']['contact-h4'];


let contactPArray = document.querySelectorAll('.contact p');
var contactPKeys =[];
for (var key in siteContent['contact']){
  if(!key.includes('h4')){
   contactPKeys.push(key);
  }
}
for (let i=0; i<contactPArray.length; i++){
  contactPArray[i].innerHTML = siteContent['contact'][contactPKeys[i]].replaceAll('Street', "Street<br> ");
}

let footer = document.querySelector('footer');
footer.textContent = siteContent['footer']['copyright']