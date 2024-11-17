class Personaje {
  constructor() {
    this.posX = width / 2 - 100;
    this.posY = height - 100;   
    this.balas = []; 
    this.image = personaje;
  }

  dibujar() {
    image(this.image,this.posX, this.posY, 200, 100);  
  }
   
  disparar() {
    let bala = new Bala(this.posX + 100, this.posY); 
    this.balas.push(bala);
  }
}
