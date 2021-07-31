import React from "react";
import { Card, Carousel, Row,Col } from "react-bootstrap";
import "../style/TodaysDeals.css";
import electronic from "../Images/electronis.jpg";
import fashsion from "../Images/fashion.jpg";
import book from "../Images/books.jpg";
import CardSection from "../components/CardSection";
import { Link } from "react-router-dom";
import tv from "../Images/Tv.jpg";
import headPhone from "../Images/Headphone.jpg";
import mobile from "../Images/Mobile.jpg";
import watch from "../Images/Watch.jpg";
import clock from "../Images/Clock.jpg";
import watch1 from "../Images/Watch1.jpg";
import tshirt from "../Images/T-shirt.jpg";
import tshirt1 from "../Images/T-shirt1.jpg";
import saree from "../Images/Sarees.jpg";
import jeans from "../Images/Jeans.jpg";
import shirt from "../Images/Shirt.jpg";
import shorts from "../Images/Shorts.jpg";
import flutter from "../Images/Flutter.jpg";
import django from "../Images/Django.jpg";
import english from "../Images/EngliishBook.jpg";
import flutter1 from "../Images/Flutter1.jpg";
import javaScript from "../Images/JavaScript.jpg";
import coding from "../Images/Coding.jpg";
 
const dealList = [
  {
    id:"1",
    productName:"Laptop",
    productImage:electronic,
    productPrice:230.0,
    productDescription:"Get you laptop with affordable price.",
    productImages:[
      {
        id:"1",
        image:tv
      },
      {
        id:"2",
        image:tv
      },
      {
        id:"3",
        image:tv
      },
      {
        id:"4",
        image:tv
      },
    ],
    similarProduct:[
      {
        id:"1",
    productName:"HeadPhones",
    productImage:headPhone,
    productPrice:830.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"2",
    productName:"Watch",
    productImage:watch,
    productPrice:430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"3",
    productName:"Clock",
    productImage:clock,
    productPrice:3430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"4",
    productName:"Mobile",
    productImage:mobile,
    productPrice:3430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
    ]
  },
  {
    id:"2",
    productName:"T-Shirt",
    productImage:fashsion,
    productPrice:530.0,
    productDescription:"Latest brand and quality shirt and be trendy.",
    productImages:[
      {
        id:"1",
        image:tv
      },
      {
        id:"2",
        image:tv
      },
      {
        id:"3",
        image:tv
      },
      {
        id:"4",
        image:tv
      },
    ],
    similarProduct:[
      {
        id:"1",
    productName:"HeadPhones",
    productImage:headPhone,
    productPrice:830.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"2",
    productName:"Watch",
    productImage:watch,
    productPrice:430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"3",
    productName:"Clock",
    productImage:clock,
    productPrice:3430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"4",
    productName:"Mobile",
    productImage:mobile,
    productPrice:3430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
    ]
  },
  {
    id:"3",
    productName:"Let Us C",
    productImage:book,
    productPrice:330.0,
    productDescription:"Get Deliver your programming book here.",
    productImages:[
      {
        id:"1",
        image:tv
      },
      {
        id:"2",
        image:tv
      },
      {
        id:"3",
        image:tv
      },
      {
        id:"4",
        image:tv
      },
    ],
    similarProduct:[
      {
        id:"1",
    productName:"HeadPhones",
    productImage:headPhone,
    productPrice:830.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"2",
    productName:"Watch",
    productImage:watch,
    productPrice:430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"3",
    productName:"Clock",
    productImage:clock,
    productPrice:3430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"4",
    productName:"Mobile",
    productImage:mobile,
    productPrice:3430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
    ]
  },
  {
    id:"4",
    productName:"Flutter",
    productImage:book,
    productPrice:430.0,
    productDescription:"Complete flutter course with projects.",
    productImages:[
      {
        id:"1",
        image:tv
      },
      {
        id:"2",
        image:tv
      },
      {
        id:"3",
        image:tv
      },
      {
        id:"4",
        image:tv
      },
    ],
    similarProduct:[
      {
        id:"1",
    productName:"HeadPhones",
    productImage:headPhone,
    productPrice:830.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"2",
    productName:"Watch",
    productImage:watch,
    productPrice:430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"3",
    productName:"Clock",
    productImage:clock,
    productPrice:3430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"4",
    productName:"Mobile",
    productImage:mobile,
    productPrice:3430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
    ]
  },
  {
    id:"5",
    productName:"TV",
    productImage:electronic, 
    productPrice:1530.0,
    productDescription:"just bring your smart TV home with best service.",
    productImages:[
      {
        id:"1",
        image:tv
      },
      {
        id:"2",
        image:tv
      },
      {
        id:"3",
        image:tv
      },
      {
        id:"4",
        image:tv
      },
    ],
    similarProduct:[
      {
        id:"1",
    productName:"HeadPhones",
    productImage:headPhone,
    productPrice:830.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"2",
    productName:"Watch",
    productImage:watch,
    productPrice:430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"3",
    productName:"Clock",
    productImage:clock,
    productPrice:3430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"4",
    productName:"Mobile",
    productImage:mobile,
    productPrice:3430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
    ]
  },
  {
    id:"6",
    productName:"Air Conditioner",
    productImage:electronic,
    productPrice:1230.0,
    productDescription:"Get you air conditioner by one click.",
    productImages:[
      {
        id:"1",
        image:tv
      },
      {
        id:"2",
        image:tv
      },
      {
        id:"3",
        image:tv
      },
      {
        id:"4",
        image:tv
      },
    ],
    similarProduct:[
      {
        id:"1",
    productName:"HeadPhones",
    productImage:headPhone,
    productPrice:830.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"2",
    productName:"Watch",
    productImage:watch,
    productPrice:430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"3",
    productName:"Clock",
    productImage:clock,
    productPrice:3430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"4",
    productName:"Mobile",
    productImage:mobile,
    productPrice:3430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
    ]
  },
];

function TodaysDeal() {
  return (
    <div className="container" style={{textAlign:"center"}}>
    <div className="dealSection">
  <h1 className="dealLable">Today's Deal</h1>
  <p className="para">View All</p>
 <div className="todayDealTable">
 <Row className="row">
    {
      dealList.map((item)=>{
        return <Col lg={4} md={6} sm={12}>
        <Link to={{pathname:"/todayDeal/" + item.id, state:item}} style={{color:"black",textDecoration:"none"}}>
        <CardSection  name={item.productName} image={item.productImage} price={item.productPrice} description={item.productDescription} isCategoru={true} />
        </Link>
      
        </Col>
      })
    }
  </Row>
 </div>
</div>
</div>
);
}

export default TodaysDeal;
