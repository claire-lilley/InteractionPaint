var brushSizes = [4,6,8,10,12,14,16,18,20,22];
var brushShapes =['rect','ellipse'];
var paintColours = ['yellow', 'green', 'blue', 'red','pink', 'purple', 'orange' ];

var brushSize, brushShape, paintColour, c;

function setup() {
  c = createCanvas(600, 400);
  background(220);
  brushSize = 0;
  brushShape = 0;
  paintColour = paintColours[0];

}

function draw() {
  
  
  fill(100);
  rect(0, height-65,width,65);
  
  fill(0)
  stroke (10);
  text ('Brush Size', 10, height -50);
  text(brushSizes[brushSize], 30, height-30); // wanted mine futher in than chris so put 30 not 10
  
  text ('Brush Shape', 100, height -50);
  text(brushShapes[brushShape], 120, height-30);
  
  text('Paint Colour', 190, height -50);
  text (paintColour, 210, height-30);
  
  
 if(paintColour === 'yellow'){
    fill('RGB(255, 179, 15)');
  } else if(paintColour === 'green'){
    fill ('RGB(132,147,36)');
  } else if(paintColour === 'blue'){
    fill ('RGB( 33,150,243)');
  } else if(paintColour === 'red'){
    fill ('RGB(253,21,27)');
  } else if(paintColour === 'pink'){
    fill ('RGB(245,100,118)');
  } else if(paintColour === 'purple'){
    fill ('RGB(139,125,181)');
  } else if(paintColour === 'orange'){
    fill ('RGB(254,100,21)');
  }

  
  if(mouseIsPressed === true){
    noStroke();
    if(brushShapes[brushShape] === 'rect'){
      
    rect(mouseX, mouseY, brushSizes[brushSize],brushSizes[brushSize]);
      
  } else if (brushShapes[brushShape] === 'ellipse'){
    
    ellipse(mouseX, mouseY, brushSizes[brushSize],brushSizes[brushSize]);
  }
}
}

function keyPressed(){
  if(keyCode === UP_ARROW && brushSize < brushSizes.length -1){
     brushSize = brushSize +1;
     } else if (keyCode === DOWN_ARROW && brushSize != 0){
       brushSize = brushSize -1;
     }
  
  if(keyCode === RIGHT_ARROW &&  brushShape < brushShapes.length -1){
     brushShape = brushShape +1;
     } else if (keyCode === LEFT_ARROW && brushShape != 0 ){
       brushShape = brushShape -1;
     }

  if(key === 'q'){
    paintColour = paintColours[0];
  }
  if(key === 'w'){
    paintColour = paintColours[1];
  }
    if(key === 'e'){
    paintColour = paintColours[2];
  }
  if(key === 'r'){
    paintColour = paintColours[3];
  }
  if(key === 't'){
    paintColour = paintColours[4];
  }
  if(key === 'y'){
    paintColour = paintColours[5];
  }
  if(key === 'a'){
    paintColour = paintColours[6];
  }
  
  if(key === 's'){
    saveCanvas(c, 'myCanvas', 'jpg');
  }
} 

  
