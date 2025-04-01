var anketa = document.querySelectorAll(".obrazky img");
anketa = Array.prototype.slice.call( anketa );

anketa.forEach (function(anketa) {

    anketa.addEventListener("click", function() {
    
        var skoreElement = this.nextElementSibling,
            skore = Number( skoreElement.textContent );
        
        skore = skore + 1;
        skoreElement.textContent = skore;
    });
});


