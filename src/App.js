import "./App.css";
import Header from "./Header";
import Home from "./Home";
import CheckOut from "./CheckOut";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const promise = loadStripe(
  "pk_test_51MuvXNSHxKyXVo9cC2I3wGiDvfgZweF8DzyhYjwOCGEGISM0NX2mMMcUo9QOvTlgg334Wcu8y0YKMA3tlZMhC6BL00AIC4sZ5W"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>>", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="`  `">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          ></Route>

          <Route
            exact
            path="/checkOut"
            element={
              <>
                <Header />
                <CheckOut />
              </>
            }
          ></Route>
          <Route
            exact
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          ></Route>
          <Route
            exact
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
