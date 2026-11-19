import React from 'react';
import ServicePageLayout from '../../components/ServicePageLayout';
import { servicesList } from '../../data/servicesData';

const MetaAdsPage = () => {
  const service = servicesList.find((s) => s.id === 'meta-ads-management');
  return <ServicePageLayout service={service} />;
};

export default MetaAdsPage;
