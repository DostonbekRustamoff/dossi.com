
const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.sec-1 h3',{delay:200, origin:'top'});
sr.reveal('.sec-1 h2',{delay:200, origin:'top'});
sr.reveal('.sec-1 h1',{delay:200, origin:'left'});
sr.reveal('.sec-1 p',{delay:200, origin:'right'});
sr.reveal('.sec-1 button',{delay:200, origin:'bottom'});
sr.reveal('.nav',{delay:200, origin:'left'});
sr.reveal('.sec-2',{delay:450, origin:'right'});
sr.reveal('.coro',{delay:250, origin:'left'});
sr.reveal('.lok',{delay:250, origin:'bottom'});
sr.reveal('.loko',{delay:250, origin:'left'});
sr.reveal('.lot',{delay:250, origin:'right'});
sr.reveal('.loto',{delay:250, origin:'left'});
sr.reveal('.koko',{delay:250, origin:'top'});
sr.reveal('.footer',{delay:250, origin:'right'});





//typed js
const typed = new Typed('.multiple-text', {
    strings:['Frontend Developer', 'You tuber', 'Sportsman','Musiciant','Teacher',],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});