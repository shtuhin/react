import React from "react";
import ReactDOM from "react-dom/client";

/* =========================
   Simple Heading
========================= */

const heading = React.createElement(
  "h1",
  { style: { color: "blue" } },
  "Lets Try Differet ways to create react element"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

/* =========================
   Paragraph Section
========================= */

const text = React.createElement(
  "p",
  {},
  "This text is under new root"
);

const nrootElement = document.getElementById("newroot");

if (nrootElement) {
  const nroot = ReactDOM.createRoot(nrootElement);
  nroot.render(text);
}

/* =========================
   Moving Text
========================= */

const movingText = React.createElement(
  "marquee",
  { behavior: "scroll", direction: "left" },
  "This is a text inside this react"
);

const classElement = document.getElementsByClassName("cls")[0];

if (classElement) {
  const classRoot = ReactDOM.createRoot(classElement);
  classRoot.render(movingText);
}

/* =========================
   Complex Box
========================= */

const box = React.createElement(
  "div",
  {
    className: "box",
    style: {
      border: "2px solid black",
      padding: "20px",
      marginTop: "20px",
    },
  },
  [
    React.createElement(
      "h1",
      {
        key: 1,
        style: { color: "red" },
      },
      "This is a heading using complex code"
    ),

    React.createElement(
      "p",
      {
        key: 2,
      },
      "This is a simple text using React lorem ipsum dollem amet ki ki je likhbooo"
    ),
  ]
);

const containerElement = document.getElementById("container");

if (containerElement) {
  const containerRoot = ReactDOM.createRoot(containerElement);
  containerRoot.render(box);
}

/* =========================
   Parent and Children
========================= */

const parent = React.createElement(
  "div",
  {
    id: "parent",
    style: {
      border: "2px solid green",
      padding: "20px",
      marginTop: "20px",
    },
  },

  [
    React.createElement(
      "div",
      {
        key: 1,
        id: "child",
        style: {
          border: "1px solid gray",
          padding: "10px",
          marginBottom: "10px",
        },
      },

      [
        React.createElement(
          "h1",
          { key: 11 },
          "This is nested heading"
        ),

        React.createElement(
          "h2",
          {
            key: 12,
            id: "subheading1",
          },
          "This is another child using react nested form"
        ),
      ]
    ),

    React.createElement(
      "div",
      {
        key: 2,
        id: "child2",
        style: {
          border: "1px solid gray",
          padding: "10px",
        },
      },

      [
        React.createElement(
          "h1",
          { key: 21 },
          "This is nested heading"
        ),

        React.createElement(
          "h2",
          {
            key: 22,
            id: "subheading2",
          },
          "This is another child using react nested form"
        ),
      ]
    ),
  ]
);

const checkElement = document.getElementById("checkparent");

if (checkElement) {
  const checkRoot = ReactDOM.createRoot(checkElement);
  checkRoot.render(parent);
}