# React

- created a new folder petPooja.
- Created index.html with a root.
- Added text to root using javascript.
- Added react and react-dom cdn links.

  ```javascript
  const heading = React.createElement(
    "h1",
    { id: heading },
    "petPooja using react"
  );

  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(heading);
  ```

- React.createElement returns a javascript object.
- Root.render converts javascript object to DOM structure.
- render method overrides the root in html.
- Nested Structure in React.

  ```javascript
  const element = React.createElement("div", { id: "element" }, [
    React.createElement("div", { id: "firstChild" }, "first child"),
    React.createElement("div", { id: "secondChild" }, "second child"),
  ]);

  const root = ReactDOM.createRoot(document.getElementById("root"));
  ```

- To create sibling elements we pass data in array format.

# To-do

- [ ] What is emmet ?
- [ ] Difference between a Library and Framework?
- [ ] What is CDN? Why do we use it?
- [ ] What is crossorigin in script tag ?
- [ ] What is difference between async and defer ?
- [ ] Why is React known as React?
- [ ] What is diference between React and ReactDOM
- [ ] What is difference between react.development.js and react.production.js files via CDN?
