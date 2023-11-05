function Card(props) {
  return /*#__PURE__*/(
    React.createElement("section", null, /*#__PURE__*/
    React.createElement("h1", null, props.name), /*#__PURE__*/
    React.createElement("img", { src: props.url }), /*#__PURE__*/
    React.createElement("p", null, props.contenu), /*#__PURE__*/
    React.createElement("a", { href: props.link }, "Read more")));


}

let main_data = /*#__PURE__*/
React.createElement("div", null, /*#__PURE__*/
React.createElement(Card, { name: "Title", url: "https://c.tenor.com/Fc08jEorTWkAAAAC/one-piece-luffy.gif", contenu: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.", link: "#" }), /*#__PURE__*/
React.createElement(Card, { name: "Title", url: "https://c.tenor.com/x5gScVWpfSgAAAAC/buggy-captain-buggy.gif", contenu: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.", link: "#" }), /*#__PURE__*/
React.createElement(Card, { name: "Title", url: "https://64.media.tumblr.com/c70f12db419a8d1e239349f23c614e1f/103f38a87ae4dd43-72/s540x810/05821945f333e10df767a1f286d9bb1ea4fca747.gifv", contenu: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.", link: "#" }), /*#__PURE__*/
React.createElement(Card, { name: "Title", url: "https://64.media.tumblr.com/81cea0204975791b827dfdff48cd47e3/e0bda1163694e3ca-20/s540x810/e36f57fb150561b4cc73dac7a022d9220fbeb17c.gifv", contenu: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.", link: "#" }), /*#__PURE__*/
React.createElement(Card, { name: "Title", url: "https://c.tenor.com/ed72JcFgt3kAAAAC/one-piece-doflamingo.gif", contenu: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.", link: "#" }));



ReactDOM.render(main_data, document.querySelector('#app'));