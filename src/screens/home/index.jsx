import React from 'react';
import Footer from '../../components/footer';
import Team from '../../components/Team';
import FAQ from '../../components/FAQ';
import Header from '../../components/header';
import DonateNow from '../../components/DonateNow';
import RefLink from '../../components/RefLink';
import RefSecond from '../../components/RefSecond';
const Home = () => {
  return (
    <div className=' tw-overflow-x-hidden'>
      
    
      <DonateNow/>
      <Team/>
      <RefLink/>
      <RefSecond/>
      <FAQ/>
      <Footer/>
    </div>
  );
};

export default Home;