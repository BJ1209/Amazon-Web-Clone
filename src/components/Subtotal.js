import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../context/StateProvider";
import { getBasketTotal } from "../context/reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const [{ basket, user }] = useStateValue();
  const history = useHistory();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      {!user ? (
        <button className="subtotal__button" onClick={(e) => history.push("/login")}>
          Sign-In And Checkout
        </button>
      ) : (
        <button
          disabled={basket?.length !== 0 ? false : true}
          className="subtotal__button"
          onClick={(e) => history.push("/payment")}
        >
          Procced to Checkout
        </button>
      )}
    </div>
  );
}

export default Subtotal;
