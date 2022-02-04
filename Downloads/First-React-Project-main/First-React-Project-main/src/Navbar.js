import React from 'react';

const Navbar = (props)=> {

    console.log(props.count,"navbar is stupis")
    
    
        
        return (
            <div style = {styles.nav}>
               <div style={styles.cartIconContainer}>
                   <img style ={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/512/43/43777.png"/>
                   <span style={styles.cartCount}>{props.count}</span>
                   
                   </div>
                   </div> 
            
            
        );
        
    
}
const styles={
    cartIcon:{
        height:30,
        marginRight:20
    },
    nav:{
        height:70,
        background: '#4267b2',
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center',
        margin: 5
    },
    cartIconContainer:{
        position: 'relative'
    },
    cartCount:{
        background:'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right:0,
    }
}


export default Navbar;