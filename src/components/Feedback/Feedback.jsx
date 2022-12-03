import React from 'react';
// import Stats from 'components/Stats/Stats';
// import feedbackOptions from '../feedback/feedbackOptions';
class Feeadback extends React.Component {
  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
    total: this.props.initialValue,
    percent: this.props.initialValue,
  };

  FeeadbackFormGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  FeeadbackFormNeuthral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  FeeadbackFormBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };
  countTotalFeedback = () => {
    this.setState(prevState => {
      return {
        total: prevState.bad + prevState.good + prevState.neutral,
      };
    });
    setTimeout(() => {
      this.countPositiveFeedbackPercentage();
    }, 100);
  };
  countPositiveFeedbackPercentage = () => {
    const { good, bad } = this.state;
    // const percent = this.state.percent;
    const SumPercent = (good / (good + bad)) * 100;
    const percent = Math.round(SumPercent);
    this.setState(() => {
      return {
        percent: percent,
      };
    });
  };

  render() {
    return (
      <ul>
        <p>Please Leave Feedback</p>
        <div>
          <button
            type="button"
            onClick={() => {
              this.FeeadbackFormGood();
              this.countTotalFeedback();
              //   this.countPositiveFeedbackPercentage();
            }}
          >
            Good 👍
          </button>
          <button
            type="button"
            onClick={() => {
              this.FeeadbackFormNeuthral();
              this.countTotalFeedback();
            }}
          >
            Neutral 🤷
          </button>
          <button
            type="button"
            onClick={() => {
              this.FeeadbackFormBad();
              this.countTotalFeedback();
              //   this.countPositiveFeedbackPercentage();
            }}
          >
            Bad 👎
          </button>
        </div>
        {/* <Stats /> */}
        <p>Statistics</p>
        <li>Good:{this.state.good}</li>
        <li>Neutral:{this.state.neutral}</li>
        <li>Bad:{this.state.bad}</li>
        <li>Total:{this.state.total}</li>
        <li>Percent: {this.state.percent}%</li>
      </ul>
    );
  }
}

export default Feeadback;
