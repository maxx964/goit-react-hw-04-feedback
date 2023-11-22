import React from 'react';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const renderFeedbackIcon = (feedbackType) => {
    let icon = '';

    switch (feedbackType) {
      case 'good':
        icon = '👍';
        break;
      case 'neutral':
        icon = '👌';
        break;
      case 'bad':
        icon = '👎';
        break;
      default:
        break;
    }

    return icon;
  };

  return (
    <div className={styles.wrap}>
      <p className={styles.p}>
        {renderFeedbackIcon('good')}
        Good: {good}
      </p>
      <p className={styles.p}>
        {renderFeedbackIcon('neutral')}
        Neutral: {neutral}
      </p>
      <p className={styles.p}>
        {renderFeedbackIcon('bad')}
        Bad: {bad}
      </p>
      <p className={styles.p}>Total: {total}</p>
      <p className={styles.p}>
        Positive Feedback Percentage: {positivePercentage.toFixed(0)}%
      </p>
    </div>
  );
};

export default Statistics;