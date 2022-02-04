
import React from 'react'
import CartItem from "./CartItem"
import Cart from "./Cart"
import Navbar from './Navbar';
class App extends React.Component {

  constructor() {
    super();
    this.state = {
        products: [
            {
                price: 99,
                title: 'Mobile Phone',
                qty: 1,
                img: '',
                id:1
            },
            {
                price: 9,
                title: 'Chocolate',
                qty: 5,
                img: '',
                id:2
            },
            {
                price: 9999,
                title: 'Laptop',
                qty: 1,
                img: '',
                id:3
            }
        ]
    };
}
handleIncreaseQuantity= (product) => {
console.log("hey ps increse the qty of", product);

const { products } = this.state;
const index =products.indexOf (product);
products [index].qty += 1;
this.setState({
    products:products
})
console.log(this.state.products,"products")
}
handleDecreaseQuantity= (product) => {
console.log("hey ps decrease the qty of", product);

const { products } = this.state;
const index =products.indexOf (product);
if(products[index].qty===0){
    return;
}
products [index].qty -= 1;
this.setState({
    products:products
})
console.log(this.state.products,"products")
}
handleDeleteProduct=(id) =>{
console.log("id",id)
const{products}= this.state;
const items= products.filter((item) => item.id!==id);
console.log("items", items);
this.setState({
    products:items
    
})
}
getCartCount=()=>{
  const {products}= this.state;
  let count= 0;
  products.forEach((product) =>{
    count += product.qty;
    
  } )
  return count;
  
}
getCartTotal=()=>{
  const {products}= this.state;
  let cartTotal = 0;
  products.map((product) => {
    cartTotal= cartTotal + product.qty*  product.price
  })
  
  return cartTotal;
  
}



  render() {


    return (
      <div className="App">
        <Navbar count ={this.getCartCount()} />
        <Cart 

        OnIncreaseQuantity={this.handleIncreaseQuantity}
        OnDecreaseQuantity={this.handleDecreaseQuantity}
        deleteQuantity={this.handleDeleteProduct}
        products={this.state.products}/>
<div>TOTAL: {this.getCartTotal()}</div>
      </div>
      
);
  }
}


export default App;
