"use client";

import { Toaster as Sonner, ToasterProps } from "sonner@2.0.3";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      position="top-center"
      toastOptions={{
        style: {
          background: 'white',
          color: '#001B3D',
          border: '1px solid #e5e7eb',
        },
        className: 'toast',
      }}
      {...props}
    />
  );
};

export { Toaster };