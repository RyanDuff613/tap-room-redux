import React from "react";
import PropTypes from "prop-types";

function Keg(props){

  
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{ props.brand }</h3>
        <h3>{ props.name }</h3>
        <h3>{ props.price }</h3>
        <h3>{ props.alcoholContent }</h3>
        <h3>{ props.quantity }</h3>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  brand: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;