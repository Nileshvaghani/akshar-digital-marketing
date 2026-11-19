import React from 'react';
import ServicePageLayout from '../../components/ServicePageLayout';
import { servicesList } from '../../data/servicesData';

const VideoEditingPage = () => {
  const service = servicesList.find((s) => s.id === 'video-editing');
  return <ServicePageLayout service={service} />;
};

export default VideoEditingPage;
