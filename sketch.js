var ball;
var database,dog,dog2,foodS,foodStock;

function preload(){
    dogI=loadImage("Dog.png");
    dog2I=loadImage("happydog.png");
}

function setup(){
    createCanvas(500,500);

    database=firebase.database();
    
    dog = createSprite(250,250,10,10);
    dog.addImage(dogI);
    dog.scale=0.2;
    
    foodStock=database.ref("Food");
    foodStock.on("value",readStock);
}

function draw(){
    background(46,139,87);
    
    if(keyWentDown(UP_ARROW)){
        writeStock(foodS);
        dog.addImage(dog2I);
    }
    
    
    drawSprites();

    textSize(12);
    fill("white");
    text("Note: Press UP_ARROW Key To Feed Drago Milk!",120,20);

}

function readStock(data){
   foodS=data.val();
}

function writeStock(x){
    if(x<=0){
        x=0;
    }else{
        x=x-1;
    }
    database.ref("/").update({
       Food:x
    });
}

// function showError(){
//     console.log("there is an error")
// }
