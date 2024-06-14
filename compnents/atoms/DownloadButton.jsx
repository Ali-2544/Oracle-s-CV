// components/DownloadButton.js
import React from 'react';

const DownloadButton = () => {
  return (
    <a href="/assits/pdf/CV Ali mehtab.pdf" download="/assits/pdf/CV Ali mehtab.pdf">
        <button className='new-button w-[45%] ' >Download CV</button>
    </a>
  );
};

export default DownloadButton;
