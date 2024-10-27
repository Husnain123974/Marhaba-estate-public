import { StaticImageData } from 'next/image';
import { PropertyType } from './enums';  

export interface Property {
  id: string;
  builders: string;
  price: number | string;
  name: string;
  location: string;
  bedrooms: number | string;
  area: string;
  paymentPlan: string;
  projectCompletionDate: Date;
  images: (string | StaticImageData)[];
  propertyType: PropertyType;  
  isFeatured: boolean;
  isGreyStructure: boolean;
  amenities: string[];
  description: string;
}

export interface Project {
  id: string;
  builders: string;
  price: number | string;
  name: string;
  location: string;
  bedrooms: number | string;
  area: string;
  paymentPlan: string;
  projectCompletionDate: Date;
  images: (string | StaticImageData)[];
  propertyType: PropertyType;  
  isFeatured: boolean;
  isGreyStructure: boolean;
  amenities: string[];
  description: string;
}


// src/types/properties.ts
export interface PropertiesProps {
  source: string;
  headerText: string;
  propertyType: string;
  searchText: string;
}

export interface PropertyCardProps {
  property: Property;
}

export interface Service {
  icon: StaticImageData | string;
  title: string;
  description: string;
}

export interface SearchSectionProps {
  setSelectedPropertyType: (type: PropertyType) => void;
  setSearchText: (text: string) => void;
}

export interface ContactFormProps {
  isShowMessage?: boolean;
  headingText?: string;
}

export interface ContactCardProps {
  icon: StaticImageData | string;
  title: string;
  content: string;
}

export interface ImageGalleryProps {
  largeImage: string | StaticImageData ;
  smallImages: StaticImageData[]|string[]  ;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface RatingProps {
  stars: number;
  review: string;
  reviewerName: string;
  reviewerLocation: string;
  reviewerImage: StaticImageData | string; 
}

export interface Reason {
  number: string;
  title: string;
  description: string;
}

export interface ServiceCardProps {
  icon: StaticImageData | string;
  title: string;
  description: string; 
}

export interface ServiceCardDetilsProps {
  title: string;
  image: StaticImageData | string;
  benefits: string[];
  outcomes: string[];
}