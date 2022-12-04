import React from 'react';
import Statistics from 'components/Stats/Stats';
import Section from '../Section/Section';
import Notification from 'components/Notification/Notification';
import s from '../Feedback/Feadback.css';
class Feeadback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    percent: 0,
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
    if (good === 0 && bad === 0) {
      return;
    }
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
      <div className={s.container}>
        <Section title="Please leave feedback">
          <button
            type="button"
            className={s.btn}
            onClick={() => {
              this.FeeadbackFormGood();
              this.countTotalFeedback();
            }}
          >
            Good 👍
          </button>
          <button
            type="button"
            className={s.btn}
            onClick={() => {
              this.FeeadbackFormNeuthral();
              this.countTotalFeedback();
            }}
          >
            Neutral 🤷
          </button>
          <button
            type="button"
            className={s.btn}
            onClick={() => {
              this.FeeadbackFormBad();
              this.countTotalFeedback();
              //   this.countPositiveFeedbackPercentage();
            }}
          >
            Bad 👎
          </button>
        </Section>
        {this.state.total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positivePercentage={this.state.percent}
            />
          </Section>
        )}
      </div>
    );
  }
}

export default Feeadback;
