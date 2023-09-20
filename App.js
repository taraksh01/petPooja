// Creating a nested complex html structure
const element = React.createElement("div", { id: "element" }, [
  React.createElement("div", { id: "firstChild" }, "first child"),
  React.createElement("div", { id: "secondChild" }, "second child"),
]);

const heading = React.createElement("h1", {}, "petPooja using react");
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(element);