import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import KegDetail from "./KegDetail";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      selectedKeg: null,
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg !=null) {
      this.setState({
        formVisible: false,
        selectedKeg: null
      });
    } else {
      this.setState(prevState => ({
        formVisible: !prevState.formVisible
      }));
    }
  }

  handleAddingNewKeg = (newKeg) => {
    const {dispatch} = this.props;
    const { brand, name, price, alcoholContent, id } = newKeg;
    const action = {
      type: 'ADD_KEG',
      brand: brand,
      name: name,
      price: price,
      alcoholContent: alcoholContent,
      id: id,
    }
    dispatch(action);
    this.setState({formVisible: false});
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    this.setState({selectedKeg: selectedKeg});
  }

  handleSellingPint = (id) => {
    const currentState = [...this.state.masterKegList];
    const selectedKeg = currentState.filter(keg => keg.id === id)[0];
    if (selectedKeg.quantity === 0 ){
      selectedKeg.quantity = 0;
    } else {
      selectedKeg.quantity -= 1;
    }
    this.setState({masterKegList: currentState});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText =null;

    if (this.state.selectedKeg !=null) {
      currentlyVisibleState = <KegDetail keg={this.state.selectedKeg} />;
      buttonText = "Return to Keg List";
    } else if (this.state.formVisible) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKeg} />;
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={this.props.masterKegList} onKegSelection={this.handleChangingSelectedKeg} onSellingPint={this.handleSellingPint}/>;
      buttonText = "Add Keg to Inventory";
    }

    
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

KegControl.propTypes = {
  masterKegList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterKegList: state
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;