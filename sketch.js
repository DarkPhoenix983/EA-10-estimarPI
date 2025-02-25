let puntos = 1000
let contador = 0
let inputPuntos
let botonEjecutar
let colorCuadrado
let colorCirculo

function preload() {
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(800,800)
  noLoop()  // Drop solo se ejecutara una vez
  rectMode(CENTER)
  inputPuntos = createInput(String(puntos))
  botonEjecutar = createButton('Ejecutar')
  colorCuadrado = createColorPicker('red')
  colorCirculo = createColorPicker('blue')

  inputPuntos.position(10, 10)
  colorCuadrado.position(10, 70)
  colorCirculo.position(10, 100)
  botonEjecutar.position(10, 40)
  botonEjecutar.mousePressed(ejecutar)
}

function ejecutar() { 
  puntos = int(inputPuntos.value())
  contador = 0
  redraw()
}

function draw() {
    // put drawing code here
  // background(255)
  // rect(100,100,200,200)
  translate(width/2, height/2)
  let cCirc = colorCirculo.color()
  let cCua = colorCuadrado.color()
  let radio = width/2
  let lado = width
  
  fill(cCua)
  rect(0, 0, width, height)
  fill(cCirc)
  circle(0, 0, width)
  strokeWeight(4)
  stroke(0)
  
  for (let i = 0; i<puntos; i++) {
    let x = random(-width/2, height/2)
    let y = random(-width/2, height/2)
    point(x, y)
    let d = dist(0, 0, x, y)
    if (d <= radio) {
      contador++
    }
  }
 
  let pi = (contador * lado * lado) / (puntos * radio * radio)
  fill(255)
  textSize(28)
 
  text("Valor de pi: " + pi, 10, 60)
  text("Dentro: " + contador, 10, 30)
  text("Total: " + puntos, 10, 90)
}

// Sacar api 
let hola = async() => {
  let respuesta = await fetch('https://api.github.com/users/DanielCastr02')
  .then(res => res.json())
  .then(datos => console.log(datos))
  console.log(respuesta)

}


