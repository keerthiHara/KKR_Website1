let menuli=document.querySelectorAll('header nav ul li a');
let section=document.querySelectorAll('section');

function activeMenu(){
    let len=section.length;
    while(--len && window.scrollY+97 <section[len].offsetTop){}
    menuli.forEach(sec =>sec.classList.remove("active1"));
    menuli[len].classList.add("active1");
}

activeMenu();
window.addEventListener("scroll",activeMenu)

