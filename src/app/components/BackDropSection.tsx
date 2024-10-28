import React from 'react';

const defaultTitle = (
  <>
    We offer solutions that make <br />
    every client’s property journey <br />
    <span className="text-white">smooth & rewarding.</span>
  </>
);


interface BackDropSectionContentProps {
  title?: string;  
}

const BackDropSectionContent: React.FC<BackDropSectionContentProps> = ({ title }) => {
  return (
    <div className="pt-20 relative flex flex-col items-center justify-center h-[50vh] bg-black text-white overflow-hidden">
      {/* Yellow blurred circles */}
      <div className="absolute bg-yellow-500 rounded-full h-[25rem] w-[25rem] blur-3xl opacity-20 top-10 left-10"></div>
      <div className="absolute bg-yellow-500 rounded-full h-[18rem] w-[18rem] blur-2xl opacity-25 top-40 right-20"></div>
      <div className="absolute bg-yellow-500 rounded-full h-[20rem] w-[20rem] blur-3xl opacity-15 bottom-20 left-40"></div>

      {/* Main content */}
      <div className="absolute inset-0 bg-yellow-custom/90 backdrop-blur-3xl"></div>
      <div className="relative z-10 text-center px-4 md:px-10">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          {title || defaultTitle}
        </h1>
        <p className="mt-6 text-lg md:text-xl font-light">
          Marhaba Estates sets itself apart through its commitment to
          personalized client service,<br/> integrity, and a deep understanding of
          the local real estate market. By combining modern<br/> technology with
          expert knowledge.
        </p>
      </div>
    </div>
  );
};

export default BackDropSectionContent;
