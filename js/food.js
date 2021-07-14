class Food{
  constructor(){

   this.foodStock  = 0
    this.lastFed = null

    this.image = loadImage("Images/Milk.png");
    }

display(){
  var x= 80, y =100;

  imageMode(CENTER);
  image(this.image,200,250,70,70);
   
  if(this.foodStock!=0){
   for (var i=0;i<this.foodStock;i++){
    if(i%10==0){
      x=80;
      y=y+50;
    }
    image(this.image,x,y,50,50);
    x=x+30;
   }
  }
 }


  getFoodStock(){
    database.ref('FoodStock').on("value", function(data){

      FoodStock = data.val()
      
      })


    }
  
  updateFoodStock(FoodStock){
    database.ref('/').update({

      'FoodStock' : FoodStock 
      
      })
  
  
   }
    
   deductFood(){
  
  
   }

}

  
