var database

var dog,sadDog,happyDog;

 var feed
 var addFood
  var Milk
 var foodObj

 var fedTime, lastFed

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,500);

  database = firebase.database();

  dog=createSprite(800,300,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  foodObj = new Food()

  feed= createButton("Feed the dog")
  feed.position(700,100)
  feed.mousePressed(feedDog);

  addFood = createButton("Add the Food")
  addFood.position(800,100)
  addFood.mousePressed(addFood)

 
}

function draw() {
  background(46,139,87);

  drawSprites();

  foodObj.display();
}

//function to read food Stock
 //textSize(15)
 //fill(255,255,254);
//if(lastFed>=12){
//text("last Feed : " + lastFed%12 + "PM" , 350,30)
//}
 // else if(lastFed == 0){
  //text("last Feed : 12 AM " , 350,30)
 // }
 // else{
   // text("last Feed : " + lastFed +"AM" , 350,30);
  //}

//fedTime= database.ref('FeedTime');
//fedTime.on("value",function(data){
 // lastFed= data.val();
//})

//function to update food stock
function feedDog(){
 dog.addImage(happyDog)

 if(foodObj.getFoodStock()<=0){
  foodObj.updateFoodStock(foodObj.getFoodStock()*0);
}
  else{
    foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  }
}

//function to update food stock and last fed time
//  function feedDog(){
 // dog.addImage(happyDog)

 // foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  //database.ref('/').update({
  //  Food: foodObj.getFoodStock(),
  //  FeedTime: hour()
 // })
 // }



//function to add food in stock
function addFood(){
   foodS++;
   database.ref('/').update({
     Food: foodS
   })

}
