import React from 'react';
import './DownloadButton.css';

const DownloadButton = () => {
  const handleDownload = () => {
    const fileUrl ="https://drive.google.com/file/d/1i4loZjIlg_eXbPP1vnMRwZVf_nVtkNFB/view?usp=sharing/"; // Replace with the actual file name and extension
    window.open(fileUrl, '_blank');
  };

  return (
    <button className="download-button" onClick={handleDownload} >
      Download CV
    </button>
  );
};

export default DownloadButton;
