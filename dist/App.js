import React, {useState} from "../_snowpack/pkg/react.js";
import "./App.css.proxy.js";
function App() {
  const [cat, setCat] = useState("https://cataas.com/cat");
  const [loading, setLoading] = useState("Obtain Cat");
  async function handleClick() {
    console.log("clicked");
    setLoading("Loading...");
    let response = await fetch("https://cataas.com/cat", {
      cache: "no-store"
    });
    var urlCreator = window.URL || window.webkitURL;
    let imgUrl = urlCreator.createObjectURL(await response.blob());
    console.log(imgUrl);
    setCat(imgUrl);
    setLoading("Obtain Cat");
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: "h-screen bg-zinc-800"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col h-screen justify-center space-y-5"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    className: "text-white rounded-xl border-white border-2",
    src: cat,
    alt: "kitten"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "mt-4 text-white bg-gradient-to-br from-orange-600 to-pink-600 rounded-2xl p-2 text-xl hover:text-2xl transition-all active:text-lg border-2 border-white justify-self-center",
    onClick: handleClick
  }, loading)))));
}
export default App;
