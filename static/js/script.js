function makeContentVisible() {

}

function initialContent() {
    titleIn();
    //$("#cubeRow").remove();
    appendParticles();
    addContent();
    addSquares(6, 3);
    addGear();
    addCoolCube();
}

function addCoolCube() {
    var html = "<div class='ccube'>" +
        "<div class='top'></div>" +
        "<div class='bottom'></div>" +
        "</div>";

    $("#coolcube").append(html);
}

function addSquares(columns = 5, rows = 5) {
    var html = '<div class="squarebox">';
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
            if (j % (columns + 1) == 0) {
                html = html + '</br>';
            } else {
                html = html +
                    '<div class="square"><div class="squarecut"></div></div>';
            }
        }
    }
    html = html + "</div>"
    $("#squarehere").append(html);
}

function addGear() {
    var html =
        "<div class='clock'>" +
        "<div class='clock__mask'></div>" +
        "<div class='gears'>" +
        "<div class='gear--standard'>" +
        "<div class='gear__peg'></div>" +
        "<div class='gear__peg'></div>" +
        "<div class='gear__peg'></div>" +
        "<div class='gear__peg'></div>" +
        "<div class='gear__peg'></div>" +
        "<div class='gear__peg'></div>" +
        "<div class='gear__peg'></div>" +
        "<div class='gear__peg'></div>" +
        "<div class='gear__peg'></div>" +
        "</div>" +
        "<div class='gear--reverse'>" +
        "<div class='gear__peg'></div>" +
        "<div class='gear__peg'></div>" +
        "<div class='gear__peg'></div>" +
        "<div class='gear__peg'></div>" +
        "<div class='gear__peg'></div>" +
        "<div class='gear__peg'></div>" +
        "<div class='gear__peg'></div>" +
        "<div class='gear__peg'></div>" +
        "<div class='gear__peg'></div>" +
        "</div>" +
        "<div class='gear--large'>" +
        "<div class='gear__peg--large'></div>" +
        "<div class='gear__peg--large'></div>" +
        "<div class='gear__peg--large'></div>" +
        "<div class='gear__peg--large'></div>" +
        "<div class='gear__peg--large'></div>" +
        "<div class='gear__peg--large'></div>" +
        "<div class='gear__peg--large'></div>" +
        "<div class='gear__peg--large'></div>" +
        "<div class='gear__peg--large'></div>" +
        "<div class='gear__peg--large'></div>" +
        "<div class='gear__peg--large'></div>" +
        "<div class='gear__peg--large'></div>" +
        "<div class='gear__peg--large'></div>" +
        "</div>" +
        "</div>" +
        "<div class='gears'>" +
        "<div class='gear--large cornered'>" +
        "<div class='gear__peg--large'></div>" +
        "<div class='gear__peg--large'></div>" +
        "<div class='gear__peg--large'></div>" +
        "<div class='gear__peg--large'></div>" +
        "<div class='gear__peg--large'></div>" +
        "<div class='gear__peg--large'></div>" +
        "<div class='gear__peg--large'></div>" +
        "<div class='gear__peg--large'></div>" +
        "<div class='gear__peg--large'></div>" +
        "<div class='gear__peg--large'></div>" +
        "<div class='gear__peg--large'></div>" +
        "<div class='gear__peg--large'></div>" +
        "<div class='gear__peg--large'></div>" +
        "</div>" +
        "<div class='gear--large cornered'>" +
        "<div class='gear__peg--large'></div>" +
        "<div class='gear__peg--large'></div>" +
        "<div class='gear__peg--large'></div>" +
        "<div class='gear__peg--large'></div>" +
        "<div class='gear__peg--large'></div>" +
        "<div class='gear__peg--large'></div>" +
        "<div class='gear__peg--large'></div>" +
        "<div class='gear__peg--large'></div>" +
        "<div class='gear__peg--large'></div>" +
        "<div class='gear__peg--large'></div>" +
        "<div class='gear__peg--large'></div>" +
        "<div class='gear__peg--large'></div>" +
        "<div class='gear__peg--large'></div>" +
        "</div>" +
        "</div>" +
        "</div>";

    $("#gear").append(html);
}

function triggerAnimation() {
    $(document).delegate('.open', 'click', function(event) {
        $(this).addClass('oppenned');
        event.stopPropagation();
    })
    $(document).delegate('body', 'click', function(event) {
        $('.open').removeClass('oppenned');
    })
    $(document).delegate('.cls', 'click', function(event) {
        $('.open').removeClass('oppenned');
        event.stopPropagation();
    });
}

/*------nav bar---------*/
$('.open-overlay').click(function() {
    console.log("OPen overlay clicked");
    $('.open-overlay').css('pointer-events', 'none');
    var overlay_navigation = $('.overlay-navigation'),
        top_bar = $('.bar-top'),
        middle_bar = $('.bar-middle'),
        bottom_bar = $('.bar-bottom');

    overlay_navigation.toggleClass('overlay-active');
    if (overlay_navigation.hasClass('overlay-active')) {

        top_bar.removeClass('animate-out-top-bar').addClass('animate-top-bar');
        middle_bar.removeClass('animate-out-middle-bar').addClass('animate-middle-bar');
        bottom_bar.removeClass('animate-out-bottom-bar').addClass('animate-bottom-bar');
        overlay_navigation.removeClass('overlay-slide-up').addClass('overlay-slide-down')
        overlay_navigation.velocity('transition.slideLeftIn', {
            duration: 300,
            delay: 0,
            begin: function() {
                $('nav ul li').velocity('transition.perspectiveLeftIn', {
                    stagger: 150,
                    delay: 0,
                    complete: function() {
                        $('nav ul li a').velocity({
                            opacity: [1, 0],
                        }, {
                            delay: 10,
                            duration: 140
                        });
                        $('.open-overlay').css('pointer-events', 'auto');
                    }
                })
            }
        })

    } else {
        $('.open-overlay').css('pointer-events', 'none');
        top_bar.removeClass('animate-top-bar').addClass('animate-out-top-bar');
        middle_bar.removeClass('animate-middle-bar').addClass('animate-out-middle-bar');
        bottom_bar.removeClass('animate-bottom-bar').addClass('animate-out-bottom-bar');
        overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up')
        $('nav ul li').velocity('transition.perspectiveRightOut', {
            stagger: 150,
            delay: 0,
            complete: function() {
                overlay_navigation.velocity('transition.fadeOut', {
                    delay: 0,
                    duration: 300,
                    complete: function() {
                        $('nav ul li a').velocity({
                            opacity: [0, 1],
                        }, {
                            delay: 0,
                            duration: 50
                        });
                        $('.open-overlay').css('pointer-events', 'auto');
                    }
                });
            }
        })
    }
});

function email(){
    window.open('mailto:dukethecube@gmail.com');
}
