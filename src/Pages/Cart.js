import { faBook } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import CartComponent from '../components/CartComponent';
import "../style/Cart.css";
import book from "../Images/books.jpg";
import fashion from "../Images/fashion.jpg";

const cartItem = [
    {
        id:"1",
        itemName:"Learn English",
        status:true,
        quantity:1,
        itemImage:book,
        price:3532,
        discount:1200,
        delivery:100,
        total:3323,
        address:"189/2 Prince Nagar, Kushwaha Nagar, Indore"
    },
    {
        id:"1",
        itemName:"T-Shirt",
        status:false,
        quantity:1,
        itemImage:fashion,
        price:7532,
        discount:1200,
        delivery:100,
        total:6323,
    },
];
function Cart() {
    console.log("this is cart page");
    return (
        <div className="container" id="cart">
            <div className="mainContainer">
                <h2 style={{marginBottom:"30px"}}>My Cart</h2>
                {
                    cartItem.map((e)=>{
                        return <CartComponent name={e.itemName} image={e.itemImage} availability={e.status} quantity={e.quantity} price={e.price} delivery={e.delivery} discount={e.discount} total={e.total} address={e.address} />;
                    })
                }
            </div>
        </div>
    )
}

export default Cart
