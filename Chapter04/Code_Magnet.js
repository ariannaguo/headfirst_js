/**
 * Created by Arianna on 7/18/14.
 */
var products = ["Choo Choo Chocolate","Icy Mint","Cake Batter","Bubblegum"];
var hasBubbleGum =[false,false,false,true];

var i=0;
while (i<hasBubbleGum.length){
    if(hasBubbleGum[i]){
        console.log(products[i]+" contains bubble gum");
    }
    i=i+1;
}
