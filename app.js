const observer = new IntersectionObserver ((entries) => {
    entries.forEach ((entry) => {
    console.log (entry)
    if (entry.isIntersecting) {
    entry.target. classList.add( 'show');
    } else {
    entry.target.classList.remove('show');}
}) ;
});
    const hiddenElements = document.querySelectorAll('.xcode');
    hiddenElements.forEach((el) => observer. observe(el));




    const observer1 = new IntersectionObserver ((entries) => {
        entries.forEach ((entry) => {
        console.log (entry)
        if (entry.isIntersecting) {
        entry.target. classList.add( 'show');
        } else {
        entry.target.classList.remove('show');}
    }) ;
    });
        const hiddenElements1 = document.querySelectorAll('.xcode1');
        hiddenElements1.forEach((el) => observer. observe(el));


        const observer12 = new IntersectionObserver ((entries) => {
            entries.forEach ((entry) => {
            console.log (entry)
            if (entry.isIntersecting) {
            entry.target. classList.add( 'show');
            } else {
            entry.target.classList.remove('show');}
        }) ;
        });
            const hiddenElements12 = document.querySelectorAll('.xcode1');
            hiddenElements12.forEach((el) => observer12. observe(el));