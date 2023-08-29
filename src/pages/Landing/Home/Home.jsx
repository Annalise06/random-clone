import React from 'react';
import Herox from './Hero2';
import Section from './SectionCard';
import Abt from './SectionAbt';
import Country from './Country';
import Excellence from './Excellence';
import Rating from './Ratiings/Rating';
import Coaching from './Coaching';
import Questions from './Questions';
import Footer from '../../../components/Common/Footer';

const Home = () => {
  return (
    <div>
      <Herox/>
      <Section/>
      <Abt/>
      {/* <Country/> */}
      <Excellence/>
      <Coaching/>
      <Rating/>
      <Questions/>
      <Footer/>
    </div>
  )
}

export default Home;