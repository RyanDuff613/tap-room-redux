import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import KegDetail from "./KegDetail";

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      masterKegList: [],
      selectedKeg: null
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
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({masterKegList: newMasterKegList,
                    formVisible: false });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
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
      currentlyVisibleState = <KegList kegList={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg} onSellingPint={this.handleSellingPint}/>;
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



export default KegControl;