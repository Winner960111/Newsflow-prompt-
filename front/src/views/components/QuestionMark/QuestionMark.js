import React, { useState } from 'react';
import './questionMark.css';

const QuestionMark = ({ caption }) => {
  const [showCaption, setShowCaption] = useState(false);

  return (
    <div className="question-mark-container"
         onMouseEnter={() => setShowCaption(true)}
         onMouseLeave={() => setShowCaption(false)}>
      <div className="question-mark">?</div>
      {showCaption && <div className="caption">{caption}</div>}
    </div>
  );
}

export default QuestionMark;
