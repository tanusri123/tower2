class Box  {
    constructor(x, y, width, height){
      super(x,y,width,height);

   push();
   strokeWeight(10);
   fill(204, 153, 0);
   ellipse(33, 50, 33, 33); 

   push(); 
   stroke(0, 102, 153);
   ellipse(66, 50, 33, 33); 
   pop(); 

   pop(); 

   ellipse(100, 50, 33, 33); 
    }}