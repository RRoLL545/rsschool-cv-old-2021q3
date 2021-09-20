const toggleClassName = () => {
    const navigationList = document.querySelector('.navigation-list');
    navigationList.classList.toggle('burger-menu-open');
}

const burgerMenu = document.querySelector('.burger-icon');
burgerMenu.addEventListener('click', toggleClassName );

const selfEstimation = 
`
Hello %USER_NAME%!
Please find below my self estimation of CV task. Happy checking! =)

Self estimation:
Validated layout (done) +10;
Semantic layout (done) +20;
CSS styles are used (done) +10;
All content is in centered block (done) +10;
Adaptive layout (done) +10;
Adaptive burger-menu with smooth h-links(done) +10;
Avatar photo is in CV (done) +10;
Contact info is in CV as ul > li (done) +10;
All recommended data is in CV (done) +10;
Code example is in CV (done) +10;
Pet projects icons are in CV as h-links (done) +10;
CV is in English (done) +10;
Pull request requirements are satisfied (done) +10;
No video is in CV (not done) 0;
CV design and quality is up to you to estimate =) +10?

total is 140 + 10? = 150?

Thank you in advance
`


window.onload = console.log(selfEstimation);