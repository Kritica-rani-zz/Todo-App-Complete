import React from 'react'
import CartItem from "./CartItem"
const Cart =(props)=> {
    

        
           const {products}= props;
console.log(props,"props")
            
            return (
                <div className="cart">
                    {products.map((product) => {
                        return <CartItem product={product} key={product.id} 
                        OnIncreaseQuantity={props.OnIncreaseQuantity}
                        OnDecreaseQuantity={props.OnDecreaseQuantity}
                        deleteQuantity={props.deleteQuantity}/>
                    })
                    }


                </div>
            );
        }

    
export default Cart;