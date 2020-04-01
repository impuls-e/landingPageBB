import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Intro from '../components/Intro';
import Recomendations from '../components/Recomendations';
import WhatIs from '../components/WhatIs';
import Transformation from '../components/Transformation';
import RealClients from '../components/RealClients';
import HowToUse from '../components/HowToUse';
import StepByStep from '../components/StepByStep';
import StillDoubts from '../components/StillDoubts';
import Famous from '../components/Famous';
import Guarantee from '../components/Guarantee'
import FrequentQuestions from '../components/FrequentQuestions'
import Footer from '../components/Footer'

const IndexPage = () => (
  <Layout>
    <SEO title="Bela Belinda" />
    <Intro />
    <Recomendations />
    <WhatIs />
    <Transformation />
    <RealClients />
    <HowToUse />
    <StepByStep />
    <StillDoubts />
    <Famous />
  	<Guarantee />
		<FrequentQuestions />
		<Footer />
  </Layout>
);
export default IndexPage;
