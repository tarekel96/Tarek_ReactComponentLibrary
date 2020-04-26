import React from "react";

export const Card = (props) => (
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

export const MountainCard = (props) => (
  <Card
    header={"Mountain Content"}
    content={"Mountain Content"}
    src={
      "https://images.pexels.com/photos/3312569/pexels-photo-3312569.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    }
  />
);

export default {
  title: "Cards",
  component: Card,
};
