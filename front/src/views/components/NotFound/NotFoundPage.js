import React from 'react';
import './NotFoundPage.css'; // Import the CSS file
const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-heading">404 - Page Not Found</h1>
      <p className="not-found-text">Sorry, the page you are looking for does not exist.</p>
      {/* You can add additional content or styling here */}
    </div>
  );
};

export default NotFound;
