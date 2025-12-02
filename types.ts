import React from 'react';

export interface FeatureItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
}

export interface CodeSnippet {
  language: string;
  code: string;
  fileName: string;
}