import React from 'react';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import './Home.scss';

const Home = (props) => {
  return (
    <div className="home__container">
      <ImgSlider />
      <Viewers />
    </div>
  );
};

export default Home;
