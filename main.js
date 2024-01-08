let eta=prompt("Entra la tua età" );
let km=prompt("Entra il numero di kilometri");
let price= km*0.21;
console.log(price);
let minDiscount= price*(20/100);
console.log(minDiscount);
let maxDiscount= price*(40/100);
console.log(maxDiscount);
if(eta<18) {
    price= price-minDiscount;
}
else if(eta >18) {
 price=price-maxDiscount;
}
else{
price=price;
}
document.writeln(`il prezzo del biglieto è: ${price}`);




