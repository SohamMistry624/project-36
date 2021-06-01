var dog,sadDog,happyDog, database;
var foodS,foodStock;
var addFood;
var foodObj;
var feed, lastFed;


function preload(){
sadDog=loadImage("Dog.png");
happyDog=loadImage("happy dog.png");
}

function setup() {
  //database=firebase.database();
  createCanvas(1000,400);

  foodObj = new Food();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  this.Button("feed the dog");
  this.Button(720, 95);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

}

function draw() {
  background(46,139,87);
  foodObj.display();

  drawSprites();
}

//function to read food Stock
function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS);
}


function feedDog(){
  dog.addImage(happyDog);

    button.buttonPressed(
      foodStock = foodStock-1
    )
  }

//function to add food in stock
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}
