const heading = React.createElement("h1",{},"Hello World using React");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);



let text=React.createElement("p",{},"This text is under new root");
let nroot = ReactDOM.createRoot(document.getElementById("newroot"));

nroot.render(text);

let text2 = React.createElement("marquee",{},"This is a text inside this react");
let clsss = ReactDOM.createRoot(document.getElementsByClassName("cls")[0]);
clsss.render(text2);



let box = React.createElement(
    "div",
    {className :"box"},
    [
        React.createElement("h1",{style: {color: "red"}},"This is a heading using complex code"),
        React.createElement("p",{},"This is a simple text using react lorem ipsum dollem amet ki ki je likhbooo")

    ]
);

let cntr= ReactDOM.createRoot(document.getElementById("container"));
cntr.render(box);


// Parent and children 

let parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"This is nested heading"),
        React.createElement("h2",{id:"subheading"},"This is another child using react nested form")
    
        ]),

        React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"This is nested heading"),
        React.createElement("h2",{id:"subheading"},"This is another child using react nested form")
    
        ])
        
);

let check= ReactDOM.createRoot(document.getElementById("checkparent"));
check.render(parent);
console.log(check);