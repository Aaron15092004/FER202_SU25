import React from "react";
import Button from "react-bootstrap/Button";

const buttonComponent = (props) => {
  //dung destructuring de lay props

  const { colorText, buttonVersion } = props;
  return (
    <div>
      {buttonVersion ? (
        <Button variant="outline-warning" style={{ color: `${colorText}` }}>
          Warning
        </Button>
      ) : (
        <Button variant="primary">Button2</Button>
      )}
    </div>
  );
};

export default buttonComponent;

//rnfe
