import React from 'react';
import Banner from './Banner';
import ServicesSection from './services/ServicesSection';
import ClientLogos from './ClientLogos';
import FeatureHighlight from '../FeatureHighlight';
import BeMerchant from '../BeMerchant';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <ServicesSection></ServicesSection>
            <ClientLogos></ClientLogos>
            <FeatureHighlight></FeatureHighlight>
            <BeMerchant></BeMerchant>
        </div>
    );
};

export default HomePage;