import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import "./OTP_Stylr.css"
export default function OTP() {
    const [otp, setOtp] = useState(''); 
  return (
    <div>
  <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={4}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
    />
    </div>
  );
}
