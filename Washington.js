import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';



var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 80, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var controls = new OrbitControls (camera, renderer.domElement);

var geoplane= new THREE.PlaneGeometry(1,6);
//yellow
var geomaterial=new THREE.MeshBasicMaterial({color: 0xffff00});
var plane=new THREE.Mesh(geoplane, geomaterial);
scene.add(plane);
plane.position.set(0.5,0,-0.5);
plane.rotation.y=Math.PI/-2;

//purple
var geocolor=new THREE.Color(0.4,0,0.25);
var geoplane1= new THREE.PlaneGeometry(1,6);
var geomaterial1=new THREE.MeshBasicMaterial({color: geocolor});
var plane1=new THREE.Mesh(geoplane1, geomaterial1);
scene.add(plane1);
plane1.position.set(1,0);


var geoplane2= new THREE.PlaneGeometry(1,6);
//cyan
var geomaterial2=new THREE.MeshBasicMaterial({color: 0x00ffff});
var plane2=new THREE.Mesh(geoplane2, geomaterial2);
scene.add(plane2);
plane2.position.set(1,0, -1);
plane2.rotation.y=Math.PI;


var geoplane3= new THREE.PlaneGeometry(1,6);
//red
var geomaterial3=new THREE.MeshBasicMaterial({color: 0xf44336});
var plane3=new THREE.Mesh(geoplane3, geomaterial3);
scene.add(plane3);
plane3.position.set(1.5,0, -0.5);
plane3.rotation.y=Math.PI/2;


const trix = 0, triy = 0;
const triangle = new THREE.Shape();
triangle.moveTo( trix+1, triy);
triangle.lineTo( trix+0.5, triy+1);
triangle.lineTo( trix, triy);
const geometry = new THREE.ShapeGeometry( triangle );
var tricolor=new THREE.Color("green");
const material = new THREE.MeshBasicMaterial( { color: tricolor } );
const tri = new THREE.Mesh( geometry, material ) ;
scene.add( tri );
tri.position.set(0.5,3,-1);
tri.rotation.y=Math.PI/-2;


const trix1 = 0, triy1 = 0;
const triangle1 = new THREE.Shape();
triangle1.moveTo( trix+1, triy);
triangle1.lineTo( trix+0.5, triy+1);
triangle1.lineTo( trix, triy);
const geometry1 = new THREE.ShapeGeometry( triangle1 );
//dark blue
const material1 = new THREE.MeshBasicMaterial( { color: 0x0b5394 } );
const tri1 = new THREE.Mesh( geometry1, material1 ) ;
scene.add( tri1 );
tri1.position.set(1.5,3, -1);
tri1.rotation.y=Math.PI;


const trix2 = 0, triy2 = 0;
const triangle2 = new THREE.Shape();
triangle2.moveTo( trix+1, triy);
triangle2.lineTo( trix+0.5, triy+1);
triangle2.lineTo( trix, triy);
const geometry2 = new THREE.ShapeGeometry( triangle1 );
//orange
const material2 = new THREE.MeshBasicMaterial( { color: 0xff8200 } );
const tri2 = new THREE.Mesh( geometry2, material2) ;
scene.add( tri2 );
tri2.position.set(0.5,3);

const trix3 = 0, triy3 = 0;
const triangle3 = new THREE.Shape();
triangle3.moveTo( trix+1, triy);
triangle3.lineTo( trix+0.5, triy+1);
triangle3.lineTo( trix, triy);
const geometry3 = new THREE.ShapeGeometry( triangle3 );
//brown
var tricolor2=new THREE.Color(0.67, 0.32, 0);
const material3 = new THREE.MeshBasicMaterial( { color: tricolor2 } );
const tri3 = new THREE.Mesh( geometry3, material3 ) ;
scene.add( tri3 );
tri3.position.set(1.5,3);
tri3.rotation.y=Math.PI/2;


tri2.rotation.x=-0.524;
tri1.rotation.x=0.524;
tri.rotateX(-0.524);
tri3.rotateX(-0.524);


camera.position.z = 5;



var animate = function () {
	requestAnimationFrame( animate );
		
		

	renderer.render( scene, camera );
};

animate();
