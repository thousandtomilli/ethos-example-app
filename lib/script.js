console.log("Script running");
let xul = new Image();
xul.src = '../img/zombie_skull.png';
xul.onload = () => {
  const autogen = new headbreaker.Canvas('autogen-canvas', {
    width: 800, height: 650,
    pieceSize: 100, proximity: 20,
    borderFill: 10, strokeWidth: 1.5,
    lineSoftness: 0.18, image: xul,
  });

  autogen.adjustImagesToPuzzleHeight();
  autogen.autogenerate({
    horizontalPiecesCount: 6,
    verticalPiecesCount: 5
  });
  autogen.draw();
}