import React from 'react';
import ReactModal from 'react-modal';
import ModalCarousel from './ModalCarousel';
import '../css/Modal.css';

class ModalSnippet extends React.Component {
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
          className="w-90 h-90 w-30-l w-60-m tc center mt5 bg-white"
          overlayClassName="overlay">
          <button className="center" onClick={this.handleCloseModal}>
            X
          </button>
          <ModalCarousel />
        </ReactModal>
      </div>
    );
  }
}

export default ModalSnippet;
