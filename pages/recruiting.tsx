import React from 'react';
import HeroSection from '@/components/HerroSection/HeroSection';
import Animating_nums from '@/components/Animating_nums/Animating_nums';
import AnimatingWords from '@/components/AnimatingWords/AnimatingWords/AnimatingWords';
import Footer from '@/components/footer/footer';
import JobList from '@/components/JobList/JobList';
import News from '@/components/NEWS/news/news';
import JoinOurTeam from '@/components/JOIN_OUR_TEAM/Join_our_team';
import Message from '@/components/Words_with_pic/words_with_pic';
import Header from '@/components/header/header';
import MembersVoice from '@/components/Members_Voice/Members_voice';

const Recruitingpage=()=>{
  return(
    <div>
    <Header />
    <HeroSection />
    <AnimatingWords/>
    <Message/>
    <MembersVoice/>
    <Animating_nums/>
    <JobList />
    <News />
    <JoinOurTeam />
    <Footer />


    </div>
  );
};

export default Recruitingpage;
