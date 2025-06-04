"use client";

import { useState, useEffect } from 'react';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';

interface PDFViewerProps {
  filePath: string;
  className?: string;
  height?: string;  
  width?: string;   
}

export default function PDFViewer({ 
  filePath, 
  className = '',
  height = '800px',
  width = '100%'
}: PDFViewerProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className={`bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden mb-4 ${className}`}
      style={{ width, height: `calc(${height} + 40px)` }}>
      {isMounted ? (
        <div className="flex flex-col h-full">
          <div className="flex-grow">
            <iframe
              src={`${filePath}#toolbar=0&navpanes=0`}
              className="w-full h-full min-h-[600px]"
              frameBorder="0"
            />
          </div>
          <div className="mt-2 text-right p-2">
            <a
              href={filePath}
              download
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline text-sm"
            >
              <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-1" />
              Download PDF
            </a>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-full">
          <div className="animate-pulse text-gray-500">Loading document...</div>
        </div>
      )}
    </div>
  );
}