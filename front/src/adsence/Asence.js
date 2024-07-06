

import React, { useEffect } from 'react';

const AdSense = ({ client, slot, format = 'auto', responsive = 'true' }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <ins className="adsbygoogle"
    style={{ display: 'block' }}
    data-ad-client={client}
    data-ad-slot={slot}
    data-ad-format={format}
    data-full-width-responsive={responsive}></ins>
    );
  
};

export default AdSense;
