import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props){
  return (
    <React.Fragment>
      {Object.values(props.kegList).map((keg) => {
        return (
        <div key={keg.id}>
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
      )})}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onKegSelection: PropTypes.func,
  onSellingPint: PropTypes.func
};

export default KegList;