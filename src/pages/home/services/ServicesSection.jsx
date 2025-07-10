import React from 'react';
import ServiceCard from './ServiceCard';

// Import icons from react-icons
import { FaShippingFast, FaGlobeAsia, FaWarehouse, FaMoneyBillWave, FaHandshake, FaUndo } from 'react-icons/fa';

const services = [
  {
    icon: FaShippingFast,
    title: 'Express & Standard Delivery',
    description:
      'We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.',
  },
  {
    icon: FaGlobeAsia,
    title: 'Nationwide Delivery',
    description:
      'We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.',
  },
  {
    icon: FaWarehouse,
    title: 'Fulfillment Solution',
    description:
      'We also offer customized service with inventory management support, online order processing, packaging, and after sales support.',
  },
  {
    icon: FaMoneyBillWave,
    title: 'Cash on Home Delivery',
    description:
      '100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.',
  },
  {
    icon: FaHandshake,
    title: 'Corporate Service / Contract In Logistics',
    description:
      'Customized corporate services which includes warehouse and inventory management support.',
  },
  {
    icon: FaUndo,
    title: 'Parcel Return',
    description:
      'Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.',
  },
];

const ServicesSection = () => {
  return (
    <section className="py-12 px-4 md:px-10 lg:px-20 bg-base-200">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-primary mb-2">Our Services</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
