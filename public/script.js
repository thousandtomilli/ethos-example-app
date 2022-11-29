docReady(function() { 
  let xul = new Image();
  xul.src = 'https://moveecosystem.com/wp-content/uploads/2022/11/zombie-skull.png';
  xul.onload = () => {
    console.log("Script running");
    const autogen = new headbreaker.Canvas('autogen-canvas', {
      width: 512, height: 512,
      pieceSize: 64, proximity: 20,
      borderFill: 10, strokeWidth: 1.5,
      lineSoftness: 0, image: xul,
    });

    autogen.adjustImagesToPuzzleHeight();
    autogen.autogenerate({
      horizontalPiecesCount: 4,
      verticalPiecesCount: 4
    });
    autogen.shuffle(0.8);
    autogen.draw();
  }
  )};

  function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}   