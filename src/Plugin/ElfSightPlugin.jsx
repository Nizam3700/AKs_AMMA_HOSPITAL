import React, { useEffect } from 'react';

const ElfSightPlugin = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.defer = true;
    script.setAttribute('data-use-service-core', '');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="elfsight-app-27b81d3c-45e1-4e14-91b2-276709b1b548" data-elfsight-app-lazy></div>
  );
};

export default ElfSightPlugin;
