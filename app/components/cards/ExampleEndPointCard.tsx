import React from 'react';
import CodeComponent from './CodeComponent';
import Link from 'next/link';

interface CardProps {
  companyName: string;
  apiEndpoint: string;
  codeLines: string[];
}

const ExampleEndPointCard: React.FC<CardProps> = ({ companyName, apiEndpoint, codeLines }) => {
  return (
    <div className="m-4">
      <a target='_blank' href={apiEndpoint} className="block">
        <CodeComponent lines={codeLines} />
        <div className="mt-4 text-center">
          <strong className="font-medium">{companyName}</strong>
        </div>
      </a>
    </div>
  );
};

export default ExampleEndPointCard;
