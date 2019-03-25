import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";

class Details extends Component {
  state = {};
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;
          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>

              <div className="row">
                <div className="col-10 mx-auto text-captalize col-md-6 my-3">
                  <img src={img} alt="product" className="img-fluid" />
                </div>

                <div className="col-10 mx-auto text-capitalize col-md-6 my-3">
                  <h2>model : {title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by : <span className="text-uppercase">{company}</span>
                  </h4>
                  <h1 className="text-blue">
                    <strong>
                      price : <span>$</span>
                      {price}
                    </strong>
                  </h1>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    some info about product :
                  </p>

                  <p className="text-muted lead">{info}</p>

                  <Link to="/">
                    <ButtonContainer>back to products</ButtonContainer>
                  </Link>

                  <ButtonContainer
                    cart
                    disabled={inCart ? true : false}
                    onClick={() => {
                      return value.addToCart(id);
                      //  value.modalOpen(id);
                    }}
                  >
                    {inCart ? "inCart" : "add to cart"}
                  </ButtonContainer>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
