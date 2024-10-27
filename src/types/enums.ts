import  { StaticImageData } from 'next/image';
import { Service } from './propertyTypes';
export enum PropertyType {
    Featured = "featuredProperties",
    GreyStructure = "greyStructuresProperties",
  }
  
  export enum PropertyType {
    Home = 'Home',
    Office = 'Office',
    Villa = 'Villa',
    Apartment = 'Apartment',
    Commercial = 'Commercial',
    Plot = 'Plot',
    Industrial = 'Industrial',
    Warehouse = 'Warehouse',
    Farmhouse = 'Farmhouse',
    Shop = 'Shop',
    Penthouse = 'Penthouse'
  }







  export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
