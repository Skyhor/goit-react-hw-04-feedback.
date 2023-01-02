import { useState } from 'react';
import Statistics from './Stats/Stats';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const name = { good, neutral, bad };
  const onLeaveFeedback = e => {
    const name = e.target.name;
    if (name === 'good') {
      setGood(state => state + 1);
    }
    if (name === 'neutral') {
      setNeutral(state => state + 1);
    }
    if (name === 'bad') {
      setBad(state => state + 1);
    }
  };

  function total() {
    return good + bad + neutral;
  }
  const positiv = () => {
    const res = good + bad;
    return Math.round((good * 100) / res);
  };
  const objKey = Object.keys(name);

  return (
    <div>
      <Section title="Please leave feedback"></Section>
      <FeedbackOptions options={objKey} onLeaveFeedback={onLeaveFeedback} />
      {total() === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total()}
            positivePercentage={positiv()}
          />
        </Section>
      )}
    </div>
  );
};
