import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';
import './App.css';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countFeedbacks = e => {
    const name = e.currentTarget.name;
    switch (name) {
      case good:
        setGood(good + 1);

        break;
      case neutral:
        setNeutral(neutral + 1);

        break;
      case bad:
        setBad(bad + 1);

        break;

      default:
        alert('Don`t work - try again');
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return (good / countTotalFeedback()) * 100;
  };

  return (
    <>
      <Section title="Please leave Feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={countFeedbacks}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            feedbackPercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification msg="No Feedbacks - Sorry" />
        )}
      </Section>
    </>
  );
}
