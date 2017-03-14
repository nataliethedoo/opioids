var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("cube").appendChild(renderer.domElement);
var geometry = new THREE.BoxGeometry(650, 650, 650, 10, 10, 10);
var material = new THREE.MeshBasicMaterial({ color: 0xfffff, wireframe: true });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 1000;

function render() {
    requestAnimationFrame(render);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
};
render();


//fade in title text
//$(".title").fadeIn(1000);
