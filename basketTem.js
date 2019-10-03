


export default function Basket (){
  itemsInTheBaskets =[]

  this.addItemsToBasket = (itemQuantity,productName)=>{
    return itemsInTheBaskets.push(...Array(itemQuantity).fill(productName));
  }


  this.calculateAllShopping =()=>{
    return itemsInTheBaskets.map((eachProduct)=> eachProduct.getItemPrice()).reduce((a,b)=> a + b , 0)
  }


  this.displayShoppingList =()=>{
    console.log(`Total Items ${this.calculateAllShopping()}`)
  }
}
