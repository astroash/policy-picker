import React from 'react';
import ReactModal from 'react-modal';
import ModalCarousel from './ModalCarousel';
import '../css/Modal.css';

class Modal extends React.Component {
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
      <div>
        <button onClick={this.handleOpenModal}>?</button>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
          className="Modal"
          overlayClassName="Overlay">
          <button onClick={this.handleCloseModal}>Close Modal</button>
          <ModalCarousel />
        </ReactModal>
      </div>
    );
  }
}

export default Modal;
