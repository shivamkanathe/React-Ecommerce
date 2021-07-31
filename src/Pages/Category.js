import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "../style/Category.css";
import electronic from "../Images/electronis.jpg";
import fashsion from "../Images/fashion.jpg";
import book from "../Images/books.jpg";
import CardSection from "../components/CardSection";
import { Link, Route } from "react-router-dom";
import CategoryDetil from  "../components/CategoryDetail";
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
 


const categoryList = [
{
  id:"1",
  categoryName:"Electronics",
  categoryImage:electronic,
  categoryDescription:" Get latest electronics item in discounted price to limited time.",
  categoryItems:[
    {
    id:"1",
    productName:"Smart Tv",
    productImage:tv,
    productPrice:1230.0,
    productDescription:"Get you air conditioner by one click.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
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
    productName:"Mobile",
    productImage:mobile,
    productPrice:15330.0,
    productDescription:"Experience latest featured Mobile with wifi calling .",
    productImages:[
      {
        id:"1",
        image:mobile
      },
      {
        id:"2",
        image:mobile
      },
      {
        id:"3",
        image:mobile
      },
      {
        id:"4",
        image:mobile
      },
    ],
    similarProduct:[
      {
        id:"1",
    productName:"Smart TV",
    productImage:tv,
    productPrice:34430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"2",
    productName:"HeadPhones",
    productImage:headPhone,
    productPrice:870.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"3",
    productName:"Watch",
    productImage:watch,
    productPrice:430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"4",
    productName:"Clock",
    productImage:clock,
    productPrice:3430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
    ]
  }, {
    id:"3",
    productName:"Watch",
    productImage:watch,
    productPrice:56630.0,
    productDescription:"Get Watch with latest techonology and better quality.",
    productImages:[
      {
        id:"1",
        image:watch
      },
      {
        id:"2",
        image:watch
      },
      {
        id:"3",
        image:watch
      },
      {
        id:"4",
        image:watch
      },
    ],
    similarProduct:[
      {
        id:"1",
    productName:"Clock",
    productImage:clock,
    productPrice:3530.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"2",
    productName:"Watch",
    productImage:watch1,
    productPrice:930.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"3",
    productName:"HeadPhones",
    productImage:headPhone,
    productPrice:3430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"4",
    productName:"Smart TV",
    productImage:tv,
    productPrice:3430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
    ]
  },
  {
    id:"4",
    productName:"HeadPhones",
    productImage:headPhone,
    productPrice:1230.0,
    productDescription:"Get your speakers now with one click.",
    productImages:[
      {
        id:"1",
        image:headPhone
      },
      {
        id:"2",
        image:headPhone
      },
      {
        id:"3",
        image:headPhone
      },
      {
        id:"4",
        image:headPhone
      },
    ],
    similarProduct:[
      {
        id:"1",
    productName:"Smart TV",
    productImage:tv,
    productPrice:33430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"2",
    productName:"Mobile",
    productImage:mobile,
    productPrice:13430.0,
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
    productName:"Watch",
    productImage:watch1,
    productPrice:430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
    ]
  },
  {
    id:"5",
    productName:"Watch",
    productImage:watch1,
    productPrice:1230.0,
    productDescription:"Get your speakers now with one click.",
    productImages:[
      {
        id:"1",
        image:watch1
      },
      {
        id:"2",
        image:watch1
      },
      {
        id:"3",
        image:watch1
      },
      {
        id:"4",
        image:watch1
      },
    ],
    similarProduct:[
      {
        id:"1",
    productName:"Watch",
    productImage:watch,
    productPrice:630.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"2",
    productName:"Clock",
    productImage:clock,
    productPrice:930.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"3",
    productName:"Mobile",
    productImage:mobile,
    productPrice:13430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"4",
    productName:"HeadPhones",
    productImage:headPhone,
    productPrice:1430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
    ]
  },
  ]
},
{
  id:"2",
  categoryName:"Fashion",
  categoryImage:fashsion,
  categoryDescription:"Be a fashionable and trendy by your fashion.",
  categoryItems:[
    {
    id:"1",
    productName:"T-Shirt",
    productImage:tshirt,
    productPrice:530.0,
    productDescription:"Get your T-shirt now with a click.",
    productImages:[
      {
        id:"1",
        image:tshirt
      },
      {
        id:"2",
        image:tshirt
      },
      {
        id:"3",
        image:tshirt
      },
      {
        id:"4",
        image:tshirt
      },
    ],
    similarProduct:[
      {
        id:"1",
    productName:"Jeans",
    productImage:jeans,
    productPrice:830.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"2",
    productName:"Saree",
    productImage:saree,
    productPrice:1430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"3",
    productName:"Shorts",
    productImage:shorts,
    productPrice:430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"4",
    productName:"T-Shirt",
    productImage:tshirt1,
    productPrice:3430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
    ]
  },
  {
    id:"2",
    productName:"Shirt",
    productImage:shirt,
    productPrice:630.0,
    productDescription:"Get you shirt now with one click.",
    productImages:[
      {
        id:"1",
        image:shirt
      },
      {
        id:"2",
        image:shirt
      },
      {
        id:"3",
        image:shirt
      },
      {
        id:"4",
        image:shirt
      },
    ],
    similarProduct:[
      {
        id:"1",
    productName:"T-Shirt",
    productImage:tshirt1,
    productPrice:3430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"2",
    productName:"T-Shirt",
    productImage:tshirt,
    productPrice:430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"3",
    productName:"Saree",
    productImage:saree,
    productPrice:340.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"4",
    productName:"Shorts",
    productImage:shorts,
    productPrice:3430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
    ]
  },
  {
    id:"3",
    productName:"Shorts",
    productImage:shorts,
    productPrice:430.0,
    productDescription:"Get you Shorts now with one click.",
    productImages:[
      {
        id:"1",
        image:shorts
      },
      {
        id:"2",
        image:shorts
      },
      {
        id:"3",
        image:shorts
      },
      {
        id:"4",
        image:shorts
      },
    ],
    similarProduct:[
      {
        id:"1",
    productName:"Jeans",
    productImage:jeans,
    productPrice:1230.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"2",
    productName:"T-shirt",
    productImage:tshirt1,
    productPrice:430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"3",
    productName:"Shirt",
    productImage:shirt,
    productPrice:3430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"4",
    productName:"T-Shirt",
    productImage:tshirt,
    productPrice:3430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
    ]
  },
  {
    id:"4",
    productName:"Jeans",
    productImage:jeans,
    productPrice:1230.0,
    productDescription:"Get latest trendy Jeans now.",
    productImages:[
      {
        id:"1",
        image:jeans
      },
      {
        id:"2",
        image:jeans
      },
      {
        id:"3",
        image:jeans
      },
      {
        id:"4",
        image:jeans
      },
    ],
    similarProduct:[
      {
        id:"1",
    productName:"Shorts",
    productImage:shorts,
    productPrice:430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"2",
    productName:"Saree",
    productImage:saree,
    productPrice:1230.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"3",
    productName:"Shirt",
    productImage:shirt,
    productPrice:340.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"4",
    productName:"T-Shirt",
    productImage:tshirt,
    productPrice:343.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
    ]
  },
  {
    id:"5",
    productName:"T-Shirt",
    productImage:tshirt1,
    productPrice:830.0,
    productDescription:"Get wedding suit with efforable price.",
    productImages:[
      {
        id:"1",
        image:tshirt1
      },
      {
        id:"2",
        image:tshirt1
      },
      {
        id:"3",
        image:tshirt1
      },
      {
        id:"4",
        image:tshirt1
      },
    ],
    similarProduct:[
      {
        id:"1",
    productName:"T-Shirt",
    productImage:tshirt,
    productPrice:430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"2",
    productName:"Shirt",
    productImage:shirt,
    productPrice:730.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"3",
    productName:"Saree",
    productImage:saree,
    productPrice:3430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"4",
    productName:"Shorts",
    productImage:shorts,
    productPrice:430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
    ]
  },
  {
    id:"6",
    productName:"Sarees",
    productImage:saree,
    productPrice:2230.0,
    productDescription:"Latest collection of various sarees.",
    productImages:[
      {
        id:"1",
        image:saree
      },
      {
        id:"2",
        image:saree
      },
      {
        id:"3",
        image:saree
      },
      {
        id:"4",
        image:saree
      },
    ],
    similarProduct:[
      {
        id:"1",
    productName:"Shirt",
    productImage:shirt,
    productPrice:1430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"2",
    productName:"T-Shirt",
    productImage:tshirt,
    productPrice:330.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"3",
    productName:"T-Shirt",
    productImage:tshirt1,
    productPrice:3430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"4",
    productName:"Jeans",
    productImage:jeans,
    productPrice:930.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
    ]
  },
  ]
},
{
  id:"3",
  categoryName:"Books",
  categoryImage:book,
  categoryDescription:" Get your favorite books with latest collection.",
  categoryItems:[
    {
    id:"1",
    productName:"Learn English",
    productImage:english,
    productPrice:530.0,
    productDescription:"Learn Professional English speaking now.",
    productImages:[
      {
        id:"1",
        image:english
      },
      {
        id:"2",
        image:english
      },
      {
        id:"3",
        image:english
      },
      {
        id:"4",
        image:english
      },
    ],
    similarProduct:[
      {
        id:"1",
    productName:"Flutter",
    productImage:flutter,
    productPrice:3430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"2",
    productName:"Flutter",
    productImage:flutter1,
    productPrice:330.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"3",
    productName:"JavaScript",
    productImage:javaScript,
    productPrice:430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"4",
    productName:"Learn Coding",
    productImage:coding,
    productPrice:3430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
    ]
  },
  {
    id:"2",
    productName:"Learn Django",
    productImage:django,
    productPrice:830.0,
    productDescription:"Get and learn python programming.",
    productImages:[
      {
        id:"1",
        image:django
      },
      {
        id:"2",
        image:django
      },
      {
        id:"3",
        image:django
      },
      {
        id:"4",
        image:django
      },
    ],
    similarProduct:[
      {
        id:"1",
    productName:"Flutter",
    productImage:flutter1,
    productPrice:3430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"2",
    productName:"Learn Coding",
    productImage:coding,
    productPrice:330.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"3",
    productName:"JavaScript",
    productImage:javaScript,
    productPrice:340.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"4",
    productName:"Learn English",
    productImage:english,
    productPrice:130.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
    ]
  },
  {
    id:"3",
    productName:"JavaScript",
    productImage:javaScript,
    productPrice:1230.0,
    productDescription:"Learn JavaScript with deep knowlegde.",
    productImages:[
      {
        id:"1",
        image:javaScript
      },
      {
        id:"2",
        image:javaScript
      },
      {
        id:"3",
        image:javaScript
      },
      {
        id:"4",
        image:javaScript
      },
    ],
    similarProduct:[
      {
        id:"1",
    productName:"Learn English",
    productImage:english,
    productPrice:3430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"2",
    productName:"Learn Django",
    productImage:django,
    productPrice:330.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"3",
    productName:"Learn Coding",
    productImage:coding,
    productPrice:1430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"4",
    productName:"Flutter",
    productImage:flutter,
    productPrice:3430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
    ]
  },
  {
    id:"4",
    productName:"Flutter",
    productImage:flutter,
    productPrice:3530.0,
    productDescription:"Build Scalable mobile app with Flutter.",
    productImages:[
      {
        id:"1",
        image:flutter
      },
      {
        id:"2",
        image:flutter
      },
      {
        id:"3",
        image:flutter
      },
      {
        id:"4",
        image:flutter
      },
    ],
    similarProduct:[
      {
        id:"1",
    productName:"Flutter",
    productImage:flutter1,
    productPrice:3430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"2",
    productName:"JavaScipt",
    productImage:javaScript,
    productPrice:343.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"3",
    productName:"Learn English",
    productImage:english,
    productPrice:1330.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"4",
    productName:"Learn Coding",
    productImage:coding,
    productPrice:330.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
    ]
  },
  {
    id:"6",
    productName:"Learn Coding",
    productImage:coding,
    productPrice:730.0,
    productDescription:"Master Coding with deeper knowledge.",
    productImages:[
      {
        id:"1",
        image:coding
      },
      {
        id:"2",
        image:coding
      },
      {
        id:"3",
        image:coding
      },
      {
        id:"4",
        image:coding
      },
    ],
    similarProduct:[
      {
        id:"1",
    productName:"Flutter",
    productImage:flutter1,
    productPrice:430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"2",
    productName:"Flutter",
    productImage:flutter,
    productPrice:1430.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"3",
    productName:"JavaScipt",
    productImage:javaScript,
    productPrice:730.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
      {
        id:"4",
    productName:"Learn English",
    productImage:english,
    productPrice:930.0,
    productDescription:"Experience latest featured TV with wifi calling.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
    ]
  },
  ]
},
];

function Category() {

  console.log(
    categoryList.map((e)=>{
      return e.categoryName;
    })
  )
  return (
   <div className="container" style={{textAlign:"center"}}> 
        <div className="CategorySection">
      <h1 className="categoryLable">Our Categories</h1>
     <div className="categorytable">
     <Row className="row">
        {categoryList.map((item)=>{
          return <Col lg={4} md={6} sm={12} >
             <Link to={{pathname:"/category/"+item.categoryName , state:item}} style={{textDecoration:"none",color:"black"}}>
             <CardSection  name={item.categoryName} image={item.categoryImage} description={item.categoryDescription} />
             </Link>
        </Col>
        })}
        {/* <Route path="/category/:categoryName" component={CategoryDetil} /> */}
      </Row>
     </div>
    </div>
   </div>
  );
}

export default Category;
