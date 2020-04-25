$(document).ready(function(){
    // au clic sur un lien
    $('a').on('click', function(evt){
       // bloquer le comportement par défaut: on ne rechargera pas la page
       evt.preventDefault(); 
       // enregistre la valeur de l'attribut  href dans la variable target
 var target = $(this).attr('href');
       /* le sélecteur $(html, body) permet de corriger un bug sur chrome 
       et safari (webkit) */
 $('html, body')
       // on arrête toutes les animations en cours 
       .stop()
       /* on fait maintenant l'animation vers le haut (scrollTop) vers 
        notre ancre target */
       .animate({scrollTop: $(target).offset().top}, 1000 );
    });
});

/*var scrollPos = 0; // Position initiale
var mouseX, mouseY;
var test = true;

function scrolling(){
    window.addEventListener("scroll", function event(e){
        // détecte nouvelle position et compare avec celle initiale
        if ((document.body.getBoundingClientRect()).top > scrollPos){
            console.log("up");
            if (mouseY < 700){ //probleme loop
                window.scrollTo(0, 100);
                window.removeEventListener("scroll", event(e));
                window.setTimeout(scrolling, 1000);
            }
        }
        else {
            console.log("down");
            if (mouseY < 700){
                window.scrollTo(0, 700);
                window.removeEventListener("scroll", event(e));
                window.setTimeout(scrolling, 1000);
            }
        }
        // sauvegarde la nouvelle position pour l'itération
        scrollPos = (document.body.getBoundingClientRect()).top;
    });
} scrolling();

function mouse(){
    document.onmousemove = function(e){
        mouseX = e.pageX;
        mouseY = e.pageY;
    }
} mouse();

var smoothScroll = {
    speed: 0,
    delay: 10, // en ms
    timer: null,
    scrollSpeed: 4,
    inertia: 0.95,
    init: function(){
        this.setEventsListeners();
    },
    setEventsListeners: function(){
        var me = this;
        $(document).bind('DOMMouseScroll mousewheel', function(e){
            me.setSpeed(e.originalEvent);
        });
     },
    setSpeed: function(e){
        var direction = e.detail ? -e.detail : e.wheelDelta;
        this.speed += direction < 0 ? -this.scrollSpeed : this.scrollSpeed;
        if(this.timer == null){
            this.timer = setTimeout(this.smoothScroll, this.delay, this); 
        }
        e.preventDefault();
    },
    smoothScroll: function(scope){
        var self = scope;
        self.speed *= self.inertia;

        var currScrollTop = $(window).scrollTop();
        $(window).scrollTop(currScrollTop-self.speed);

        if(self.speed < self.inertia && self.speed > -self.inertia){
            self.speed = 0;
            clearTimeout(self.timer);
            self.timer = null;
        }else{
            self.timer = setTimeout(self.smoothScroll, self.delay, self);
        }
    }
}

smoothScroll.init();
*/

