//Selecting the canvas
var $canvas = $("canvas");
//Gettting the canvas context 
var context = $canvas[0].getContext("2d");
//Add the line Color 
var color = context.strokeStyle = "#f1c40f";
//var SizeLine Add the line Sizes 
var SizeLine;
//Update the Line
var lastEvent;

//Update the Size
function update (){
  return SizeLine = $('#size').val();
}
//Clear the canvas
 $( "#clear" ).click(function() {
  context.clearRect(0, 0, 800, 400);
});

//Erase the canvas
var Erase = false; 
  $('#erase').click(function(){
     Erase = true;
  if(Erase){
  color = "#ECF0F1";}
  });

  //Load the image 
  var outlineImage = new Image();
  outlineImage.src = "img/mario.png";

//When clicking on control list items
$(".Colors").on("click", "li", function(){
  //Deselect sibling elements
  $(this).siblings().removeClass("selected");
  //Select clicked element
  $(this).addClass("selected");
  //cache current color
  color = $(this).css("background-color");
});
  

//update the new color span
function changeColor() {
  //Getting the value for each color
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  $("#newColor").css("background-color", "rgb(" + r + "," + g +", " + b + ")");
}
//Call the function
  changeColor();

//When color sliders change Update the wheel
$("input[type=range]").change(changeColor);

//When "Add Color" is pressed
$("#addNewColor").click(function(){
  //Append the color to the controls ul
  var $newColor = $("<li></li>");
  $newColor.css("background-color", $("#newColor").css("background-color"));
  $(".Colors ul").append($newColor);
  //Select the new color
  $newColor.click();
});


//Mousedown as a Global Varible 
var mousedown = false;
//Adding colors 
//When the Canvas is cliked the draw Begins
$canvas.mousedown(function(e){
  lastEvent = e;
  mouseDown = true;
}).mousemove(function(e){
  //Draw lines
  if(mouseDown) {
    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.lineTo(e.offsetX, e.offsetY);
    context.strokeStyle = color;
    context.lineCap = 'round'
    context.lineWidth = update();
    context.stroke();
    context.drawImage(outlineImage, 150, 50, 350, 300);//Adding the Suprise Image
    lastEvent = e;
  }
}).mouseup(function(){
  mouseDown = false;
}).mouseleave(function(){
  $canvas.mouseup();
});


