import React from 'react';
import ReactModal from 'react-modal';
import Infograph from './Infograph';
import '../css/Modal.css';

class ModalInfograph extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div className="infograph-container">
        <button className="modal-button pointer ba b--white bg-white b h2 pink" onClick={this.handleOpenModal}>i</button>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
          className="w-90 h-90 w-30-l w-60-m tc center mt5 ph2 bg-white"
          overlayClassName="overlay">
          <button className="center pointer br2 ba b--black bg-white b mt1" onClick={this.handleCloseModal}>
            X
          </button>
          <Infograph />
        </ReactModal>
      </div>
    );
  }
}

export default ModalInfograph;
