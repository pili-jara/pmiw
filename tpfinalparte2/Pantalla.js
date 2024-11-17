class Pantalla {
  constructor() {
    this.estado = 1;  
    this.objJuego = new Juego(); 
  }

  dibujar() { 
    if (this.estado === 1) {
      this.pantallaInicio(); 
    } else if (this.estado === 2) {
      this.pantallaInstrucciones(); 
    } else if (this.estado === 3) {
      const resultado = this.objJuego.dibujar();  
      if (resultado === "gano") {
        this.estado = 5;  
      } else if (resultado === "perdio") {
        this.estado = 6; 
      }
    } else if (this.estado === 4) {
      this.pantallaCreditos(); 
    } else if (this.estado === 5) {
      this.pantallaGanar(); 
    } else if (this.estado === 6) {
      this.pantallaPerder();  
    }
  }

  keyPressed() {
    if (keyCode === ENTER) {
      if (this.estado === 1) {  
        this.estado = 2;  
      } else if (this.estado === 2) { 
        this.estado = 3; 
      } else if (this.estado === 5 || this.estado === 6) {  
        this.reiniciar();  
        this.estado = 4; 
      } else if (this.estado === 4) {  
        this.estado = 1;  
      }
    }

 if ((this.estado === 5 || this.estado === 6) && keyCode === 82) {
      this.estado = 3; 
      this.reiniciar();
    }


    if (this.estado === 3) {  
      this.objJuego.teclaPresionada(keyCode);  
    } 
  }

  reiniciar() {
    this.objJuego.reiniciarJuego();  
    this.objJuego.dibujar();
  }

  pantallaInicio() {
    background(255, 220, 248);
    textAlign(CENTER, CENTER);
    textSize(32);
    image (avion, 360, 260, 260, 300);
    image (logo, 77, -40, 500, 200);
    fill(0);
    text("Bienvenido al Juego", 320, 240)//width / 2, height / 3);
     line (20, 180, 620, 180);
    textSize(16);
    fill(255,0,50);
    rect(190,280, 260,40);
    fill(255);
    text("Presiona ENTER para comenzar", width / 2, 300);
    textSize(18);
    fill(0);
    text ('Alma Abril Kaldi', 75, 360);
    text ('120328/0', 45, 380);
    text ('Pilar Jara', 47, 420);
    text ('119058/2',45, 440);
    text ('Comisión 4', 515, 25);
  }


   pantallaInstrucciones() {
    background(255, 220, 248);
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(0);
     line (20, 180, 620, 180);
    text("Instrucciones:", 320, 130);
    textSize(16);
     text("1. Usa la barra espaciadora para disparar", width / 2, height / 2 - 20);
     text(".\n2. Mata a todos los enemigos.\n3. Evita que lleguen al borde inferior.", width / 2, height / 2);  
     text("Presiona ENTER para comenzar a jugar", width / 2, height * 0.75);
  }

  pantallaCreditos() {
    background(255, 220, 248);
    image (avion, 360, 260, 260, 300);
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(0);
    line (20, 180, 620, 180);
    fill(255,0,50);
    rect(190,280, 260,40);
    fill(255, 0, 50);
    fill(0);
    text("Créditos", width / 2, height / 3);
    textSize(16);
    text("Juego desarrollado por Alma Abril Kaldi y Pilar Jara.", width / 2, height / 2);
    fill(255);
    text("Presiona ENTER para volver al inicio", width / 2, height /2 +60);
  }

  pantallaGanar() {
    background(0, 255, 180);
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(0);
    text("¡Ganaste!", width / 2, height / 2);
    textSize(16);
    text("Presiona 'R' para reinciar el juego", width / 2, height * 0.75);
    text("Presiona ENTER para ver los créditos", width / 2, height * 0.65);
     }

  pantallaPerder() {
    background(255, 0, 50);
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(255);
    text("¡Perdiste!", width / 2, height / 2);
    textSize(16);
    text("Presiona 'R' para reinciar el juego", width / 2, height * 0.75);
    text("Presiona ENTER para ver los créditos", width / 2, height * 0.65);
      }
}
