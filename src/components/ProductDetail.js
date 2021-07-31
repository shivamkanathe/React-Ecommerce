import React from 'react'
import { Button, Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../style/ProductDetail.css";
import ProductCard from './ProductCard';

function ProductDetail(props) {
  console.log(props);
  console.log("this is data " + props.location.state.productImages);
    return (
        <div className="container" >
          <div className="mainHeading">
          <div className="contain">
            <Row className="roww">
              <Col lg={8} md={8} sm={12} xs={12} className="col11">
             
          <Image className="imag" src={props.location.state.productImage} responsive />
              </Col>
              <Col lg={4} ms={4} sm={12} xs={12} className="productimg">
                <div className="showImages">
                <h2 className="similarName">Product Images</h2>
                <p>See some more images</p>
                  <Row className="similarRow">
                    {props.location.state.productImages.map((item)=>{
                      return <Col lg={6} md={6} sm={6} xs={6} style={{padding:0,margin:0}}>
                      <Image className="similarImage" src={item.image} responsive/>
                    </Col>
                    })}
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
          <div className="other">
            <h3 className="name">{props.location.state.productName}</h3>
            <h4 className="descs">Description</h4>
            <p className="desc1">{props.location.state.productDescription}</p>
          </div>
          <div className="priceSection">
            <Row className = "price">
            <Col lg={6} md={6} sm={6} xs={6}>
            <p  style={{fontWeight:700,fontSize:"24px"}}>Price</p>
            </Col>
            <Col lg={6} md={6} sm={6} xs={6}>
            <p style={{fontWeight:700,fontSize:"24px"}}>Rs. {props.location.state.productPrice}</p>
            </Col>
            </Row>
          </div>

          <div className="btnSection">
            <Button className="btn">Add To Cart</Button>
          </div>
          </div>
          
          <div className="similarProdcut">
          <h2>Similar Products</h2>
          <div className="showProduct">
          <div className="showData">
     <Row className="rows">
        {props.location.state.similarProduct.map((item)=>{
          return <Col lg={3} md={6} sm={6} xs={6} className="simicol">
                  
                    <ProductCard
                      name={item.productName}
                      image={item.productImage}
                      price={item.productPrice}
                      description={item.productDescription}
                      isCategoru={false}
                    />
                
                </Col>
        })}
      </Row>
     </div>
        </div>
          </div>

        </div>
    )
}

export default ProductDetail;
