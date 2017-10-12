import React from 'react';
<<<<<<< HEAD
import { Redirect } from 'react-router';
// import router from 'react-router';

import CircularProgressbar from 'react-circular-progressbar';
=======
>>>>>>> c8b49eff20f4bb31b56e342479627329b8e7834d
import '../css/Loading.css';
import CircularProgressbar from 'react-circular-progressbar';

class ChangingProgressbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPercentageIndex: 0,
    };
  }

  componentDidMount() {
<<<<<<< HEAD
    setInterval(() => {
      if (this.state.currentPercentageIndex <99) {
        this.setState({
          currentPercentageIndex: (this.state.currentPercentageIndex + 1) % this.props.percentages.length
        });
      } else {
        setTimeout ( ()=> {window.location='/home'}, 400);
=======
    let refreshInterval = setInterval(() => {
      this.setState({
        currentPercentageIndex: (this.state.currentPercentageIndex + 1)
      });
      if (this.props.currentPercentageIndex === 95) {
        clearInterval(refreshInterval);
>>>>>>> c8b49eff20f4bb31b56e342479627329b8e7834d
      }
    }, this.props.interval);

  }


  render() {
    return <CircularProgressbar {...this.props} percentage={this.props.percentages[this.state.currentPercentageIndex]}
    />;
  }
}

ChangingProgressbar.defaultProps = {
<<<<<<< HEAD
  interval: 92,
  strokeWidth: 4
=======
  interval: 100,
  stroke: 3
>>>>>>> c8b49eff20f4bb31b56e342479627329b8e7834d
}

class Loading extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-3">
          <ChangingProgressbar
            percentages={[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 99]}
            classForPercentage={(percentage) => {
              return percentage === 99 ? 'complete' : 'incomplete';
            }}
          />
        </div>
      </div>
    );
  }
}

export default Loading;
