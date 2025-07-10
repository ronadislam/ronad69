import React from 'react';


const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="card hover:bg-primary  bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200">
      <div className="card-body text-center items-center">
        <div className="text-4xl text-primary mb-3">
          <Icon />
        </div>
        <h3 className="card-title text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
