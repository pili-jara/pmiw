// Pilar Jara, comisión 4
// Legajo 119058/2
// Link https://youtu.be/qyK8ROyKtq0

let imagen;
let estado = 1;
let contador = 0;
let cantidad = 3;
let  miNumero = 3;
let lado, r1, r2, r3;
let posX, posY, x, y, i;
let resultado;

function preload() {
  imagen=loadImage('data/imagen.jpeg');
}

function setup() {
  createCanvas(800, 400);
  image(imagen, 0, 0, width/2, height);
  rectMode(CORNER);
  ellipseMode(CORNER);
  frameRate(4);
  lado = width/6;

  resultado= esPar(miNumero);
  print("¿El número " + miNumero + " es par? " + resultado);
}

function draw() {
  print("estado="+estado);
  translate(width/2, 0);

  if ( estado == 1) {
    DibujarOpArt();
    contador++;
    if ( contador>=5 ) {
      estado++;
      contador = 0;
    }
  } else if ( estado == 2 ) {
    Colores(r1, r2, r3);
  }
}
function DibujarOpArt() {
  for (let x = 0; x < cantidad; x++) {
    for (let y = 0; y < cantidad; y++) {
      if (x % 2 == 0 && y  % 2 != 0) {
        fill(0);
      } else {
        fill(55, 40, 200);
      }
      if (x % 2 != 0 && y  % 2 == 0) {
        fill(0);
      }
      rect(x * lado, y * lado, lado, lado);
    }
  }

  for (let x = 0; x < cantidad; x++) {
    for (let y = 0; y < cantidad; y++) {
      if (x % 2 == 0 && y  % 2 != 0) {
        fill(55, 40, 200);
      } else {
        fill(0);
      }
      if (x % 2 != 0 && y  % 2 == 0) {
        fill(55, 40, 200);
      }
      ellipse(x * lado, y * lado, lado, lado);
    }
  }
}

function Colores(r1, r2, r3) { //función propia con parámetros que no devuelve un valor
  for (let i=width; i>0; i-=55) {
    r1 = random(255);
    r2 = random(255);
    r3 = random(255);
    let c1 = color(r1, r2, r3);
    let c2 = color(r3, r2, r1);
    for (let j=height; j>0; j-=50) {
      fill(c2);
      fill(c1);
    }
    for (let x = 0; x < cantidad; x++) {
      for (let y = 0; y < cantidad; y++) {
        if (x % 1 == 0 && y  % 18 != 3) {
          ellipse(x * lado, y * lado, lado, lado);
        }
      }
    }
  }
}

function esPar(numero) { //función propia con parámetros que devuelve un valor
  if (numero % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

function mouseClicked() {
  DibujarOpArt();
  estado = 1;
}
