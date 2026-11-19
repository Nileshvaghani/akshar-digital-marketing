import React from 'react';
import ServicePageLayout from '../../components/ServicePageLayout';
import { servicesList } from '../../data/servicesData';

const SeoServicesPage = () => {
  const service = servicesList.find((s) => s.id === 'seo-services');
  return <ServicePageLayout service={service} />;
};

export default SeoServicesPage;
