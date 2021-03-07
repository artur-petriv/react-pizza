import React from "react";
import axios from "axios";
import { Header } from "./components";
import { Home, Cart } from "./pages";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPizzas } from "./redux/actions/pizzas";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get("http://localhost:3004/pizzas").then(({ data }) => {
      dispatch(setPizzas(data));
      console.log("Запрос в БД App.js");
    });
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;
