const converted = {
  "@import url('https://fonts.googleapis.com/css2?family=Alegreya&display=swap')": true,
  "@import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans&display=swap')": true,
  "@import url('https://fonts.googleapis.com/css2?family=PT+Serif&display=swap')": true,
  "@import url('https://fonts.googleapis.com/css2?family=Bona+Nova&display=swap')": true,
  html: {
    maxWidth: "450px",
    margin: "auto",
    marginTop: "20px",
    lineHeight: 1.35
  },
  "h1,h2,h3": { fontFamily: "'Alegreya Sans', sans-serif" },
  img: { maxWidth: "100%" },
  pre: { outline: "1px solid black", padding: "2px", overflow: "auto" },
  body: {
    fontFamily: "'PT Serif', serif",
    justifyContent: "center",
    height: "100%"
  },
  a: { color: "#000", textDecoration: "none" },
  "a.ul": {
    color: "#000",
    textDecoration: "underline",
    textDecorationThickness: "3px",
    textDecorationColor: "powderblue",
    background:
      "linear-gradient(to top, powderblue 50%, transparent 50%) bottom",
    backgroundSize: "200%",
    transition: ".5s ease-out",
    backgroundPosition: "top"
  },
  "a:hover": { backgroundPosition: "bottom" },
  "h1.title:hover": { backgroundPosition: "0 4px" },
  "span:hover:before": { transform: "translateY(10px)" },
  "h1.title": {
    cursor: "pointer",
    position: "relative",
    display: "inline-block",
    background:
      "linear-gradient(to bottom, #000, #000 60%, #fff 60%, #fff 100%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
    backgroundRepeat: "no-repeat",
    transition: "background 0.2s ease-out",
    whiteSpace: "nowrap"
  },
  ul: { listStyle: "none", paddingLeft: "0" },
  li: { margin: "3px 0" },
  h2: { paddingTop: "12px" },
  ".divider": {
    whiteSpace: "nowrap",
    boxShadow: "rgb(230 230 230) 0px 1px 0px"
  },
  ".blog": {
    margin: "0",
    display: "block",
    fontSize: "1.125rem",
    lineHeight: 1.2,
    overflowWrap: "break-word",
    whiteSpace: "pre-wrap",
    fontWeight: 400,
    WebkitTextDecoration: "none",
    textDecoration: "none",
    color: "#1a1717"
  },
  ".social-icon": { paddingRight: "1rem", borderBottom: "0px none #000" },
  "a.social": {
    WebkitTransition: "border-color 200ms ease, color 200ms ease",
    transition: "border-color 200ms ease, color 200ms ease",
    color: "#000",
    textDecoration: "none",
    padding: "0.75rem",
    borderBottom: "0px none #000"
  },
  "a.social:hover": { borderBottomColor: "#000000", color: "#000000" },
  ".box": {
    borderBottom: "1px solid rgb(230, 230, 230)",
    boxSizing: "border-box",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    alignItems: "center",
    display: "flex"
  },
  ".date": {
    width: "8rem",
    fontFamily: "'Alegreya Sans', sans-serif",
    fontWeight: "normal",
    color: "#a1a1aa",
    lineHeight: "1rem"
  },
  ".title": { fontWeight: 600 }
}
