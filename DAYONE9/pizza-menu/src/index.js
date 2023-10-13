import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

///////
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

///////
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // styling inline react
  // css properties should be written in camelCase in jsx
  //Eg : font-size = fontSize
  // and values shou;d be written in stringas it is object
  return (
    // <h1 style={{ color: "red", fontSize: "32px", textTransform: "uppercase" }}>
    //   Fast react Pizza Company
    // </h1>
    <header className="header">
      <h1> Fast react Pizza Company</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // EVEN EMPTY ARRAY IS TRURTHY VALUE IN SHORT CIRCUTIng
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {/* Conditional Rendering With && */}
      {/* {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )} */}
      {/* using ternary operator */}
      {/* we can not use if else statement inside javascript block because it doesnot produces a value so we are using ternary operator */}
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>we're are still working on Today's Menu please come back Later </p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        photoName="pizzas/spinaci.jpg"
        alt="spinach"
        price={10}
      />
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        photoName="pizzas/spinaci.jpg"
        alt="spinach"
        price={10}
      /> */}
    </main>
  );
}
/////////////////////////////////////////////
// props
// Props are used to pass data from parent componets to child components
//

// components rules as function in react
// function name should start with Uppercase and should return something
// one way dataflow => parents to children ---- not from children to parent
function Pizza(props) {
  // console.log(props);
  if (props.pizzaObj.soldOut) return null;
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt="spinach" />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p> {props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </li>
  );
}

/////////////////////////////////////////////
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  // {/* Conditional Rendering With && */}
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) {
  //   alert("we are Currently Open ...");
  // } else {
  //   alert("closed");
  // }
  console.log(hour);
  // Without jsx
  // return React.createElement("footer", null, "we are Currently open!");

  // if (isOpen)
  //   return <p>We're open until {closeHour}:00. Come Visit us order Online</p>;
  return (
    <footer className="footer">
      {/* {isOpen && (
        <p>We're open until {closeHour}:00. Come Visit us order Online</p>
      )} */}
      {isOpen ? (
        <p>We're open until {closeHour}:00. Come Visit us order Online</p>
      ) : (
        <p>
          We are happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

// JSX
// Declarative syntax to describe what components look like and how they work
// Components must return a block of jsx
// Extension of JS that allows us to embed JS, CSS and Recat Component into HTML
//Each JSX element is converted to a React.createElement function
// inline cs = style =  {{camalCase PropertName : "value in string"}}
// js = {}
//external css = className = ""
// html = html
///////////
// Styling Css
// inline css
// external css
//sass
//modules
//tailwind css

///////////////////////////////////////////////////////
// rendering lists
///////////////////////////////////////////////////////////
// React v18 and above
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
