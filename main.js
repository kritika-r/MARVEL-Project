var canvas = new fabric.Canvas('myCanvas');
var player_x = 10;
var player_y = 10;
var block_image_width = 30;
var block_image_height = 30;
var player_object= "";
var block_image_subject= "";

console.log("This is a SuperHero game inspired by MARVEL heroes.");
console.log("Press specific keys in order to produce any part of a character.");
console.log("The key controls are as follows:");
console.log("Press F for Iron Man's face.");
console.log("Press B for SpiderMan's body.");
console.log("Press L for hulk's legs.");
console.log("Press R for Thor's hand.");
console.log("Press H for Captain America's hand.");
console.log("Press Shift key and P, to increase the size of block produced.");
console.log("Press Shift key and M to decrease the size of the block produced.");
console.log("Press the Arrow keys for their namesake functions.");
console.log("Have fun in creating superheros!");

function player_update(){
    fabric.Image.fromURL("https://i.postimg.cc/zDwfFdYY/player.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToWidth(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_object);
    });

}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80'){
        console.log("Shift key and P pressed together.");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if(e.shiftKey == true && keyPressed == '77'){
        console.log("Shift key and M pressed together.");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if(keyPressed == '70'){
        new_image('https://i.postimg.cc/hGnyTPLB/ironman-face.png');
        console.log("Key F");
    }
    if(keyPressed == '66')
	{
		new_image('https://i.postimg.cc/FscwL6M0/spiderman-body.png'); 
		console.log("b");
	}
	if(keyPressed == '76')
	{
		new_image('https://i.postimg.cc/KzF6GDqt/hulk-legs.png'); 
		console.log("l");
	}
	if(keyPressed == '82')
	{
		new_image('https://i.postimg.cc/8s8BGtwS/thor-right-hand.png'); 
		console.log("r");
	}
	if(keyPressed == '72')
	{
		new_image('https://i.postimg.cc/rw7ckW29/captain-america-left-hand.png'); 
		console.log("h");
	}
    if(keyPressed == '38')
	{
		up();
		console.log("up");
	}
	if(keyPressed == '40')
	{
		down();
		console.log("down");
	}
	if(keyPressed == '37')
	{
		left();
		console.log("left");
	}
	if(keyPressed == '39')
	{
		right();
		console.log("right");
	}
	

}
function up()
{
    if(player_y >=0)
    {
        player_y = player_y - block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When Up arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
 
function down()
{
    if(player_y <=300)
    {
        player_y = player_y + block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When Down arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
 
function left()
{
    if(player_x >0)
    {
        player_x = player_x - block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("When Left arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
 
function right()
{
    if(player_x <=500)
    {
        player_x = player_x + block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("When Right arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}