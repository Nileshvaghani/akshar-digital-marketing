import React from 'react';
import ServicePageLayout from '../../components/ServicePageLayout';
import { servicesList } from '../../data/servicesData';

const GraphicDesignPage = () => {
  const service = servicesList.find((s) => s.id === 'graphic-design');
  return <ServicePageLayout service={service} />;
};

export default GraphicDesignPage;
