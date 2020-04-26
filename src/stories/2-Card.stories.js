import React from "react";
import PropTypes from "prop-types";

const Card = (props) => (
  <div
    style={{
      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
      transition: "0.4s",
      borderRadius: "border-radius: 5px",
      height: "100%",
      width: "300px",
      display: "flex column",
      textAlign: "center",
    }}
  >
    <img
      src={props.src}
      alt={props.alt}
      style={{
        width: "100%",
        height: "100vh",
      }}
    />
    <div
      style={{
        padding: "1px 18px",
      }}
    >
      <h4>
        <b>{props.header}</b>
      </h4>
      <p>{props.content}</p>
    </div>
  </div>
);

Card.propTypes = {
  src: PropTypes.string,
  /**
   The url for the image source.
  */
  alt: PropTypes.string,
  /**
  The alternate text for the image when the image does not load. 
  */
  header: PropTypes.string,
  /**
  The header of a Card component. 
  */
  content: PropTypes.string,
  /**
  The content of a Card component. 
  */
};

export const AllCards = () => (
  <div style={{ display: "flex", justifyContent: "space-evenly" }}>
    <NormalCard />
    <FlipCard />
  </div>
);

export const NormalCard = (props) => (
  <Card
    header={"Normal Content"}
    content={"Normal Content"}
    src={
      "https://images.pexels.com/photos/3312569/pexels-photo-3312569.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    }
  />
);

export const FlipCard = (props) => (
  <Card
    header={"Flip Content"}
    content={"Flip Content"}
    src={
      "https://images.pexels.com/photos/3312569/pexels-photo-3312569.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    }
  />
);

export default {
  title: "Cards",
  component: AllCards,
};
