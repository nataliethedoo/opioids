var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("cube").appendChild(renderer.domElement);
var geometry = new THREE.BoxGeometry(500, 500, 500, 10, 10, 10);
var material = new THREE.MeshBasicMaterial({ color: 0x56a0d3, wireframe: true });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 950;
var increment = 0.01;

function render(speed) {
    cubeAnimationID = requestAnimationFrame(function() {
        render(speed);
    });
    cube.rotation.x += increment;
    cube.rotation.y += increment;
    increment += speed;
    renderer.render(scene, camera);
};
/*
$(".title").hide();
$(".content").hide();
*/
/*
$(document).ready(function() {
    triggerAnimation();

    render(0.001);

    setTimeout(function() {

        $("#cube").fadeOut(1000, function() {
            cancelAnimationFrame(cubeAnimationID);
            titleIn();
            //$("#cubeRow").remove();
            //appendParticles();
            addContent();
        });

    }, 1000)
})*/

function titleIn() {
    //$(".title").css("visibility","visible");
    $(".title").addClass("animated flipInX");
    $("#logo_mask").addClass("animated zoomIn");
}

function appendParticles() {
    $('.home').prepend('<div id="particles-js">');
    $('.home').append('</div>');
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 33,
                "density": {
                    "enable": true,
                    "value_area": 1420.4657549380909
                }
            },
            "color": {
                "value": "#56a0d3"
            },
            "shape": {
                "type": "triangle",
                "stroke": {
                    "width": 0,
                    "color": "#56a0d3"
                },
                "polygon": {
                    "nb_sides": 4
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.06313181133058181,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 11.83721462448409,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
}


function addContent() {
    $(".mycontent").css("display", "block");
    $(".mycontent").addClass("animated bounceInDown");

    $(".resourcetitle").addClass("animated bounceInDown");
}
