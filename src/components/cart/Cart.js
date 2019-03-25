import React, { Component } from "react";
import Title from "../title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import CartTotal from "./CartTotal";
import CartList from "./CartList";
import { ProductConsumer } from "../../context";

class Cart extends Component {
  state = {};
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;

            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="your" title="cart" />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotal value={value} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}

export default Cart;
