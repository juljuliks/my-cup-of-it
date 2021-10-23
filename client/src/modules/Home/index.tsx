import React, { FC } from 'react';
import Info from './componenets/IntroPage';
import Feed from './componenets/Feed';
import About from './componenets/About';

const Home: React.FC = () => (
  (
    <>
      <Info />
      <Feed />
      <About />
    </>
  )

);

export default Home;
