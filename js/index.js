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

// Beginning of MVP Tasks

// Nav
let aTags = document.getElementsByTagName('a')

aTags[0].textContent = siteContent.nav["nav-item-1"];
aTags[1].textContent = siteContent.nav["nav-item-2"];
aTags[2].textContent = siteContent.nav["nav-item-3"];
aTags[3].textContent = siteContent.nav["nav-item-4"];
aTags[4].textContent = siteContent.nav["nav-item-5"];
aTags[5].textContent = siteContent.nav["nav-item-6"];

// Color Nav Links Green
Array.from(aTags).forEach((obj) => {
  obj.style.color = 'green';
});

// Add two nav items

let aTagHome = document.createElement('a');
aTagHome.href = '#';
aTagHome.textContent = 'Home';

let newHome = document.querySelector('nav');
newHome.prepend(aTagHome);
aTagHome.style.color = 'green';

let aTagSignUp = document.createElement('a');
aTagSignUp.href = '#';
aTagSignUp.textContent = 'Sign Up';

let newSignUp = document.querySelector('nav');
newSignUp.appendChild(aTagSignUp);
aTagSignUp.style.color = 'green';

//
// Heading, Button, and Image
//

// Heading
let mainHeading = document.querySelector('h1');
mainHeading.textContent = siteContent['cta']['h1'];

// Button
let mainButton = document.querySelector('button');
mainButton.innerText = "Get Started";

// Side Image
let logo2 = document.querySelector("#cta-img");
logo2.setAttribute('src', siteContent["cta"]["img-src"]);

//
// Main Content
//

const sectionHeaders = document.querySelectorAll(".main-content h4");
sectionHeaders[0].textContent = siteContent["main-content"]["features-h4"]
sectionHeaders[1].textContent = siteContent["main-content"]["about-h4"]
sectionHeaders[2].textContent = siteContent["main-content"]["services-h4"]
sectionHeaders[3].textContent = siteContent["main-content"]["product-h4"]
sectionHeaders[4].textContent = siteContent["main-content"]["vision-h4"]

const sectionContent = document.querySelectorAll(".main-content p");
sectionContent[0].textContent = siteContent["main-content"]["features-content"];
sectionContent[1].textContent = siteContent["main-content"]["about-content"];
sectionContent[2].textContent = siteContent["main-content"]["services-content"];
sectionContent[3].textContent = siteContent["main-content"]["product-content"];
sectionContent[4].textContent = siteContent["main-content"]["vision-content"];

//
// Middle Image
//

let middleImg = document.querySelector("#middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];


//
//contact 
//

// H4 Tag
let contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = siteContent.contact["contact-h4"];

// P Tag
let contactContent = document.querySelectorAll(".contact p");
contactContent[0].textContent = siteContent.contact["address"];
contactContent[1].textContent = siteContent.contact["phone"];
contactContent[2].textContent = siteContent.contact["email"];

//
//footer
//

let footer = document.querySelector("footer p");
footer.textContent = siteContent.footer["copyright"]; 