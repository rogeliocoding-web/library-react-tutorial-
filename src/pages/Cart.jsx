import React from "react";

const Cart = () => {
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books_container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="car__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <div className="cart__book">Book</div>
                <div className="cart__quantity">Quantity</div>
                <div className="cart__total">Price</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
