import React from 'react'
import "../style/order.css";
import OrderCart from './OrderCart';
import book from "../Images/books.jpg";
import fashion from "../Images/fashion.jpg";
import laptop from "../Images/electronis.jpg";

const orderList = [
    {
        itemImage:laptop,
        itemName:"Learn Coding",
        itemPrice:4443.0,
        status:"Delivered",
        delivereyDate:"23/05/2021",
        ratings:5,
    },
    {
        itemImage:fashion,
        itemName:"Jeans",
        itemPrice:6443.0,
        status:"Progress",
        delivereyDate:"23/05/2021",
        ratings:5,
    },
    {
        itemImage:book,
        itemName:"Learn Coding",
        itemPrice:4443.0,
        status:"Cancelled",
        delivereyDate:"23/05/2021",
        ratings:5,
    },
];

function Order() {
    return (
        <div className="container">
            <div className="orders">
                <h2 style={{paddingBottom:"15px"}}>Orders</h2>
               {
                   orderList.map((e)=>{
                       return  <OrderCart image={e.itemImage} name={e.itemName} price={e.itemPrice} status={e.status} date={e.delivereyDate} ratings={e.ratings} />;
                   })
               }
            </div>
        </div>
    )
}

export default Order
