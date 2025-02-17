import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
      <p className="text-secondary text-[14px] leading-[27px] text-center">
        ©2025 Your Company. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;