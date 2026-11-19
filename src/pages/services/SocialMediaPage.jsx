import React from 'react';
import ServicePageLayout from '../../components/ServicePageLayout';
import { servicesList } from '../../data/servicesData';

const SocialMediaPage = () => {
  const service = servicesList.find((s) => s.id === 'social-media-management');
  return <ServicePageLayout service={service} />;
};

export default SocialMediaPage;
