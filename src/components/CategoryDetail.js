import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link, Route } from "react-router-dom";
import "../style/CategoryDetail.css";
import CardSection from "./CardSection";
import ProductCard from "./ProductCard";
import ProductDetail from "./ProductDetail";

function CategoryDetail(props) {

  return (
    <div className="container">
      <div className="categoryDetail">
        <h1>{props.location.state.categoryName}</h1>
        <div className="showProduct">
          <Row className="row">
            {props.location.state.categoryItems.map((item) => {
              return (
                <Col lg={3} md={6} sm={6} xs={6} className="col">
                  <Link to={{ pathname:"/category/"+ props.location.state.categoryName + "/" + item.id, state:item }} style={{textDecoration:"none",color:"black"}}>
                    <ProductCard
                      name={item.productName}
                      image={item.productImage}
                      price={item.productPrice}
                      description={item.productDescription}
                      isCategoru={false}
                    />
                  </Link>
                </Col>
              );
            })}
         
          </Row>
        </div>
      </div>
    </div>
  );
}

export default CategoryDetail;
