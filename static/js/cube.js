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
$(".title").hide();
$(document).ready(function() {

    render(0.001);

    setTimeout(function() {

        $("#cube").fadeOut(1000, function() {
            cancelAnimationFrame(cubeAnimationID);
        });
        titleIn();
    }, 2000)
})

function titleIn() {
    $(".title").show();
    $(".title").addClass("animated flipInX");
    $("#logo_mask").addClass("animated zoomIn");
}

//fade in title text
//$(".title").fadeIn(1000);
