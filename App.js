/**
 * <div id = "parent">
 *    <div id= "child">
 *        <h1>i'm h1 tag</h1>
 *    </div>
 * </div>
 */

const parent = React.createElement("div",{id:"parent"},
  React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"i'm h1 tag"),React.createElement("h2",{},"i'm h2 tag")]
  )
)


const heading = React.createElement("h1",{id:"header"},"Hello from react");
console.log(parent); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


