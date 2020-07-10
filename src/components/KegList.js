import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props){

  return (
    <React.Fragment>
      {props.kegList.map((keg) =>
        <div>
          <Keg 
            whenKegClicked = {props.onKegSelection}
            brand={keg.brand}
            name={keg.name}
            price={keg.price}
            alcoholContent={keg.alcoholContent}
            id={keg.id}
            key={keg.id}/>
          <button onClick={() => props.onSellingPint(keg.id) }>Sell Pint</button>
          <hr />
        </div>
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func,
  onSellingPint: PropTypes.func
};

export default KegList;