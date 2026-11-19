import React from 'react';
import ServicePageLayout from '../../components/ServicePageLayout';
import { servicesList } from '../../data/servicesData';

const PpcAdvertisingPage = () => {
  const service = servicesList.find((s) => s.id === 'ppc-advertising');
  return <ServicePageLayout service={service} />;
};

export default PpcAdvertisingPage;
