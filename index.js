import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = React.createElement(
  "h1",
  {"id": "heading",
    "style": {
      "color": "blue",
      "fontSize": "24px",
      "textAlign": "center"
    }
  }, 
  "This is a react element 🚀"
);
const rootdd = ReactDOM.createRoot(document.getElementById("rootdiv"));
rootdd.render(heading);

const jsxheading= <h1 id="heading23" tabIndex="5"style={{color: "red", fontSize: "24px", textAlign: "center"}}>This is a JSX element 🚀</h1>;
const rooty = ReactDOM.createRoot(document.getElementById("rootdiv2"));
rooty.render(jsxheading);


const check = React.createElement(
  "div",
  {
    id: "Normaltext",
    style: {
      color: "green",
      fontSize: "24px",
      textAlign: "center"
    }
  },
  "This is a normal text element 📝"
);


const root3 = ReactDOM.createRoot(document.getElementById("Normaltext"));
root3.render(check);

let jsxheading1 =( <h1 id="heading2" tabIndex="5" style={{color: "red", fontSize: "24px", textAlign: "center"}}>This is a JSX element using React 🚀</h1>);
const rootx = ReactDOM.createRoot(document.getElementById("heading2"));
rootx.render(jsxheading1);

const jsxElement = (
  <><div
    id="parent"
    style={{ color: "purple", fontSize: "24px", textAlign: "left" }}>

    <div id="child1">
      <h1>This is a JSX heading 🚀</h1>
    </div>
    <div id="child2">
      <ul color="black" style={{ listStyleType: "square" }}>
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
        <li>Fourth item</li>
        <li>Fifth item</li>

      </ul>
    </div>
  </div><a
    href="https://www.google.com" target="_blank" rel="noopener noreferrer">
      Visit Google
    </a></>


);


const root = ReactDOM.createRoot(
  document.getElementById("heading3")
);

root.render(jsxElement);

// There are two type of components in React:
// 1. Functional Component-- the modern way of writing components, it is a JavaScript function that returns JSX. It can also use hooks to manage state and side effects.
// 2. Class Component-- old way of writing components, not used much now a days.
// Functional Component Example


const Title = () =>{
  return (
    <div
      id="title"
      style={{ color: "orange", fontSize: "24px", textAlign: "center" }}
    >
      <p>
        This is a title using functional component 
      </p>
    </div>
  );
}
const HeadingComponent = () =>  <h1 className="Heading">This is a functional component 🚀 using react arrow function</h1>;
const root2 = ReactDOM.createRoot(document.getElementById("one"));
root2.render(<HeadingComponent />);
let elem = <span>This is an react element</span>

// let data = api.getData();
const HeadingComponent2 = () =>  {
  return (
    <div id = "container">
      <Title />
      <Title></Title>
      {Title()}
{/* Three ways to call a functional component. This is amazing!  */}
      {elem}
      
      <h1 className="Heading">This is a functional component 🚀 using react With return plus () brackets</h1>
    </div>
  );
}
const roots = ReactDOM.createRoot(document.getElementById("two"));
roots.render(<HeadingComponent2 />);


const HeadingComponent3 = () =>  {
  return <h1 className="Heading">This is a functional component 🚀 using react using return</h1>;
}
const root4 = ReactDOM.createRoot(document.getElementById("three"));
root4.render(<HeadingComponent3 />);


// We cant render it like root2.render(HeadingComponent); because it will render the function definition instead of the JSX element that the function returns. So we need to call the function by adding parentheses after it, like root2.render(HeadingComponent()); but this will not work because it will execute the function and return the JSX element, but we want to render the JSX element that the function returns, so we need to use JSX syntax to render the component, like root2.render(<HeadingComponent />); this way React will understand that we want to render the component and it will call the function and render the JSX element that it returns.
// root.render(HeadingComponent) use for react element 
// root.render(<HeadingComponent />) use for react component
// this is the syntax babel understand to render the component and it will call the function and render the JSX element that it returns.


/*
this should be an example of function different type 
such as const fn = () => true;
const fn2 = function() {
  return true;
}
  both are same but the first one is an arrow function and the second one is a regular function.

*/


// lets try another things
let HeadingComponent4 = () =>(
  <h1>This is a tag without curly braces</h1>
);
let root5 = ReactDOM.createRoot(document.getElementById("four"));
root5.render(<HeadingComponent4 />);