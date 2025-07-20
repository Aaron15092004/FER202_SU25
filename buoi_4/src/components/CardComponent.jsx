import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardComponent = ({ itemData }) => {
  const { images, title, description } = itemData;

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={images} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardComponent;

//rafce
