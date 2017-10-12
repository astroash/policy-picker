import React from 'react';
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
    let refreshInterval = setInterval(() => {
      this.setState({
        currentPercentageIndex: (this.state.currentPercentageIndex + 1)
      });
      if (this.props.currentPercentageIndex === 95) {
        clearInterval(refreshInterval);
      }
    }, this.props.interval);
  }

  render() {
    return <CircularProgressbar {...this.props} percentage={this.props.percentages[this.state.currentPercentageIndex]} />;
  }
}

ChangingProgressbar.defaultProps = {
  interval: 100,
  stroke: 3
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
