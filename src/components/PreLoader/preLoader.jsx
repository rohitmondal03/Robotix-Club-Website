import React from 'react';
import './Preloader.css';
import preloaderGif from './robot_arm.gif';
import preloader2Gif from './Loading.gif';

const PreLoader = () => {
  return (
    <div className="preloader-container">
      <img src={preloaderGif} className="preloader-image" alt="BE PATIENT" />
      <img src={preloader2Gif} className="preloader-image2" alt="Loading..." />
    </div>
  );
};

export default PreLoader;