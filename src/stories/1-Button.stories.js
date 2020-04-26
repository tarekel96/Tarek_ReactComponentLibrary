import React from "react";

export const Button = (props) => (
  <button
    style={{
      color: props.color,
      borderRadius: "4px",
      textShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
      backgroundColor: props.bg,
    }}
  >
    {props.children}
  </button>
);

export const Emoji = () => (
  <button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </button>
);

export const GreenButton = (props) => (
  <Button bg={"rgb(30, 185, 68)"} color={"white"}>
    Green Button
  </Button>
);

export const RedButton = (props) => (
  <Button bg={"rgb(205, 62, 62)"} color={"white"}>
    Red Button
  </Button>
);

export default {
  title: "Buttons",
  component: Button,
};
