import React from 'react';
import './AdBlockDialog.css'; // Make sure to create a CSS file for styling

const AdBlockDialog = ({ onClose }) => {
  return (
    <div className="adblock-dialog-overlay">
      <div className="adblock-dialog">
        <div className="adblock-dialog-header">
          <button onClick={onClose}>&times;</button>
        </div>
        <div className="adblock-dialog-content">
          <h2>Please allow ads on our site</h2>
          <p>Looks like you're using an ad blocker. We rely on advertising to help fund our site.</p>
          <button className="adblock-dialog-button" onClick={onClose}>
            Allow ads
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdBlockDialog;
