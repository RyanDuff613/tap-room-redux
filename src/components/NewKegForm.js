import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewKegForm(props){

  function handleNewKegFormSubmission(event){
    event.preventDefault();
    props.onNewKegCreation({brand: event.target.brand.value,
                            name: event.target.name.value,
                            price: event.target.price.value,
                            alcoholContent: event.target.alcoholContent.value,
                            quantity: 124,
                            description: event.target.description.value,
                            id: v4() });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          name='brand'
          placeholder='Brand Name' />
        <br />
        <input
          type='text'
          name='name'
          placeholder='Beer Name' />
        <br />
        <input
          type='text'
          name='price'
          placeholder='Price Per Pint' />
        <br />
        <input
          type='text'
          name='alcoholContent'
          placeholder='Alcohol Content' />
        <br />
        <textarea 
          rows="5"
          columns="100"
          type="text"
          name="description"
          placeholder="Description" />
        <br />
        <button type='submit'>Add Keg to Inventory</button>
      </form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};


export default NewKegForm;