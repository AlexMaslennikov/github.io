/* Скрипт для скроллинга */

$('a[href^="#anchor-about-me"]').bind('click.smoothscroll', function(e) {
    e.preventDefault();

    var target = this.hash,
        $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top - 50
    }, 500, 'swing', function() {
        window.location.hash = target;
    });
});

$('a[href^="#anchor-portfolio"]').bind('click.smoothscroll', function(e) {
    e.preventDefault();

    var target = this.hash,
        $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top - 50
    }, 500, 'swing', function() {
        window.location.hash = target;
    });
});

$('a[href^="#anchor-skills"]').bind('click.smoothscroll', function(e) {
    e.preventDefault();

    var target = this.hash,
        $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top - 50
    }, 500, 'swing', function() {
        window.location.hash = target;
    });
});

$('a[href^="#anchor-contacts"]').bind('click.smoothscroll', function(e) {
    e.preventDefault();

    var target = this.hash,
        $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top - 50
    }, 500, 'swing', function() {
        window.location.hash = target;
    });
});

// Прилипающее меню

var StickyElement = function(node) {
        var doc = $(document),
            fixed = false,
            anchor = node.find('.sticky-anchor'),
            content = node.find('.sticky-content');

        var onScroll = function(e) {
            var docTop = doc.scrollTop(),
                anchorTop = anchor.offset().top;

            console.log('scroll', docTop, anchorTop);
            if (docTop > anchorTop) {
                if (!fixed) {
                    anchor.height(content.outerHeight());
                    content.addClass('fixed');
                    fixed = true;
                }
            } else {
                if (fixed) {
                    anchor.height(0);
                    content.removeClass('fixed');
                    fixed = false;
                }
            }
        };

        $(window).on('scroll', onScroll);
    };

    var demo = new StickyElement($('#sticky'));

// Выпадающее меню

$(".burger-btn").click(function(){
	event.preventDefault();
	$(".burger-menu").slideToggle(1000);
	$("#menu-icon").toggleClass('fa-bars fa-times');
});

// Появляющиеся блоки

var skillReveal1 = {
  delay    : 200,
  distance : '90px',
  easing   : 'ease-in-out',
  rotate   : { z: 10 },
  scale    : 1.1
};

var skillReveal2 = {
  delay    : 400,
  distance : '90px',
  easing   : 'ease-in-out',
  rotate   : { z: 10 },
  scale    : 1.1
};

var skillReveal3 = {
  delay    : 600,
  distance : '90px',
  easing   : 'ease-in-out',
  rotate   : { z: 10 },
  scale    : 1.1
};

var skillReveal4 = {
  delay    : 800,
  distance : '90px',
  easing   : 'ease-in-out',
  rotate   : { z: 10 },
  scale    : 1.1
};

var skillReveal5 = {
  delay    : 1000,
  distance : '90px',
  easing   : 'ease-in-out',
  rotate   : { z: 10 },
  scale    : 1.1
};

window.sr = ScrollReveal();
sr.reveal('.skill1', skillReveal1);
sr.reveal('.skill2', skillReveal2);
sr.reveal('.skill3', skillReveal3);
sr.reveal('.skill4', skillReveal4);
sr.reveal('.skill5', skillReveal5);

sr.reveal(document.getElementById('skills-wrapper'));

// Скрипт подъема наверх


  $('#up').click(function() {
    $('html, body').animate({scrollTop: 0},500);
    return false;
  });