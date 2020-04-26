import React from "react";
import PropTypes from "prop-types";

/**
 * Use a button for toggling various actions.
 *   The Button's content props should always be present when using Button
 **/
const Button = (props) => (
  <button
    style={{
      color: props.color,
      borderRadius: "4px",
      textShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
      backgroundColor: props.bg,
      padding: props.padding,
      margin: props.margin,
    }}
  >
    {props.children}
  </button>
);

export const AllButtons = () => (
  <div>
    <Button bg={"rgb(30, 185, 68)"} color={"white"} margin={"1rem"}>
      Green Button
    </Button>
    <Button bg={"rgb(205, 62, 62)"} color={"white"} margin={"1rem"}>
      Red Button
    </Button>
    <Button margin={"1rem"}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  </div>
);

/**
- Button has a custom "color" props passed to change the text to white.
- Button has a custom "bg" props passed to change the background color to a green color.
**/
export const GreenButton = (props) => (
  <Button bg={"rgb(30, 185, 68)"} color={"white"}>
    Green Button
  </Button>
);

/**
- Button has a custom "color" props passed to change the text to white.
- Button has a custom "bg" props passed to change the background color to a red color.
**/
export const RedButton = (props) => (
  <Button bg={"rgb(205, 62, 62)"} color={"white"}>
    Red Button
  </Button>
);

export const Emoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

export default {
  title: "Design System| Buttons",

  parameters: {
    component: Button,
    componentSubtitle:
      "A Button component that can have its color and content altered",
  },
};

Button.propTypes = {
  /**
    The text color for the button.
   */
  color: PropTypes.string,
  /**
    The background color for the button.
   */
  backgroundColor: PropTypes.string,
  /**
    The padding of the button.
   */
  padding: PropTypes.string,
  /**
    The margin of the button.
   */
  margin: PropTypes.string,
};

// Button.propTypes = {
//   status: PropTypes.oneOf(["red", "green", "emoji"]),
// };

Button.defaultProps = {
  color: null,
  bg: null,
  margin: null,
  padding: null,
};
