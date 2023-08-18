const heading = React.createElement("h1", {id: "title"}, "Namaste React By Akshay Sir");
const root_react = ReactDOM.createRoot(document.getElementById("root_react"));
root_react.render(heading);

/* Nested React Elements */
const heading1 = React.createElement("h1", {id: "title"}, "Namaste React By Akshay Sir");
const heading2 = React.createElement("h2", {id: "sub_title"}, "Nested React Elements Namaste JavaScript");
const root = ReactDOM.createRoot(document.getElementById("root"));
const container = React.createElement("div", {id: "content"}, [heading1, heading2]);
root.render(container);