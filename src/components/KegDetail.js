import React from "react";
import PropTypes from "prop-types";


function KegDetail(props){
  const{ keg } = props;

  return (
    <React.Fragment>
      <h3>Keg Detail</h3>
      <h5>Beer: {keg.brand} - {keg.name}</h5>
      <h5>Price Per Pint: {keg.price}</h5>
      <h5>Alcohol Content: {keg.alcoholContent}</h5>
      <h5>Pints Remaining: { keg.quantity }</h5>
      <hr/>
      <h5>Description:</h5>
      <p>{ keg.description }</p>
      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  brand: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.string,
  quantity: PropTypes.number,
  description: PropTypes.string,
  id: PropTypes.string
};

export default KegDetail;