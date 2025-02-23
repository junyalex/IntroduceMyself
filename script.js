const span1 = document.querySelector('main h2 span');
const array = ["WEB DEVELOPER", "SOFTWARE DEVELOPER"]; // fixed array syntax

let index = 0;
let currentText = array[index].split("");

function writeText(){
    span1.textContent += currentText.shift();

    if(currentText.length !== 0){
        setTimeout(writeText, Math.floor(Math.random() * 100));;
    } else{
        currentText = span1.textContent.split("");
        setTimeout(deleteText, 3000);
    }
}

function deleteText(){
    currentText.pop();
    span1.textContent = currentText.join("");

    if (currentText.length !== 0){
        setTimeout(deleteText, Math.floor(Math.random() * 100))
    } else{
        index++;
        currentText = array[index % array.length].split("");
        writeText();
    }
}

writeText();


const header1= document.querySelector('header');
window.addEventListener('scroll', function(){
    this.requestAnimationFrame(scrollCheck());
});

function scrollCheck(){
    const browswerscroll = window.scrollY;

    if(browswerscroll > 0){
        header1.classList.add('active');
    } else{
        header1.classList.remove('active');  
    }
}

const buttons= document.querySelectorAll("[data-animation-scroll='true']");

const animationMove = function(selector){
    const target=document.querySelector(selector);
    const browswerscroll = window.scrollY; 
    const targetscroll = target.getBoundingClientRect().top + browswerscroll;
    window.scrollTo({top: targetscroll, behavior: 'smooth'});
}

for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click', function(e){
        animationMove(this.dataset.target);
    });
}

document.querySelectorAll('.social a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        // Use the href attribute of the link; ensure they are not '#' placeholders
        const url = this.getAttribute('href');
        if(url && url !== '#'){
            window.open(url, '_blank');
        }
        // Optionally, provide a default URL for placeholders:
        else {
            window.open('https://example.com', '_blank');
        }
    });
});