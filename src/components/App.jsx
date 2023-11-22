import React, { useState } from 'react';

import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const getTotal = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const getPositivePercentage = () => {
    const { good } = feedback;
    const total = getTotal();
    return total === 0 ? 0 : (good / total) * 100;
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={handleFeedback} />
      </Section>

      <Section title="Statistics">
        {getTotal() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={getTotal()}
            positivePercentage={getPositivePercentage()}
          />
        )}
      </Section>
    </div>
  );
};

export default App;