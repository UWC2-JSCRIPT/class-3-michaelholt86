// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price

const logReceipt = function(...menuItems){
    let totalPrice = 0
    let tax = .086
    menuItems.forEach((menuItem)=>{
      console.log(`${menuItem.descr} : ${menuItem.price}`)
      totalPrice += menuItem.price
    })
    console.log("Sub-Total: $" + totalPrice.toFixed(2))
    console.log("Tax: $"+ (totalPrice * tax).toFixed(2))
    console.log("Total: $" + ((totalPrice * tax) + totalPrice).toFixed(2))

 
   
} 

// Check
logReceipt(
  { descr: 'Burrito', price: 5.99 },
  { descr: 'Chips & Salsa', price: 2.99 },
  { descr: 'Sprite', price: 1.99 },
  { descr: 'Nachos', price: 4.99 },
  { descr: 'Agua Fresca', price: 3.99 },
  { descr: 'Carne Asada Fries', price: 11.99 }
);
// should log something like:
// Burrito - $5.99
// Chips & Salsa - $2.99
// Sprite - $1.99
// Total - $10.97
