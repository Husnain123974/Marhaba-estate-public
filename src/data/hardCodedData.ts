import companySVG from '../../public/icons/company-register.svg';
import mortageSVG from '../../public/icons/mortage.svg';
import bankSVG from '../../public/icons/bank-account.svg';
import taxSVG from '../../public/icons/tax.svg';
import visaSVG from '../../public/icons/visa.svg';
import goldenVisaSVG from '../../public/icons/golden-visa.svg';
import { Project, Service } from '@/types/propertyTypes';
import serviceImg1 from "../../public/images/service-1.png"
import serviceImg2 from "../../public/images/service-2.jpeg"
import serviceImg3 from "../../public/images/service-3.jpeg"
import serviceImg4 from "../../public/images/service-4.png"
import img1 from "../../public/images/client-1.png";
import img2 from "../../public/images/client-2.png";
import img3 from "../../public/images/client-3.png";

import property1 from "../../public/images/property-1.png";
import property2 from "../../public/images/property-2.png";
import property3 from "../../public/images/property-3.png";
import { PropertyType } from '@/types/enums';
 
export const services: Service[] = [
  {
    icon: companySVG,
    title: 'Company Registration',
    description:
      'Lorem ipsum dolor sit amet consectetur Tellus volutpat quis hendrerit erat.',
  },
  {
    icon: mortageSVG,
    title: 'Mortgage Assistance',
    description:
      'Lorem ipsum dolor sit amet consectetur Tellus volutpat quis hendrerit erat.',
  },
  {
    icon: bankSVG,
    title: 'Bank Account Opening',
    description:
      'Lorem ipsum dolor sit amet consectetur Tellus volutpat quis hendrerit erat.',
  },
  {
    icon: taxSVG,
    title: 'Tax Residency',
    description:
      'Lorem ipsum dolor sit amet consectetur Tellus volutpat quis hendrerit erat.',
  },
  {
    icon: visaSVG,
    title: 'Visa Acquisition',
    description:
      'Lorem ipsum dolor sit amet consectetur Tellus volutpat quis hendrerit erat.',
  },
  {
    icon: goldenVisaSVG,
    title: 'Golden Visa',
    description:
      'Lorem ipsum dolor sit amet consectetur Tellus volutpat quis hendrerit erat.',
  },
];

  
export const reasons = [
    {
      number: '1',
      title: 'Integrity',
      description:
        'We are committed to conducting our business with transparency and honesty, ensuring that our clients can trust us to act in their best interest.',
    },
    {
      number: '2',
      title: 'Excellence',
      description:
        'We aim for the highest standards in everything, from the quality of properties we represent to the professionalism of our team.',
    },
    {
      number: '3',
      title: 'Innovation',
      description:
        'We believe in building not just homes, but communities. Our work is driven by a desire to contribute positively to the neighborhoods we serve.',
    },
    {
      number: '4',
      title: 'Community Focus',
      description:
        'We believe in building not just homes, but communities. Our work is driven by a desire to contribute positively to the neighborhoods we serve.',
    },
  ];

export const ratings = [
  {
    stars: 5,
    review:
      'Lorem ipsum dolor sit amet consectetur. Tellus volutpat quis hendrerit erat ut. Porttitor lobortis.',
    reviewerName: 'Abdullah',
    reviewerLocation: 'Dubai',
    reviewerImage: img1, 
  },
  {
    stars: 4,
    review:
      'Lorem ipsum dolor sit amet consect hendrerit erat ut. Porttitor lobortis ellus volutpat quis hendrerit erat ut.',
    reviewerName: 'Ali',
    reviewerLocation: 'Abu Dhabi',
    reviewerImage: img2,  
  },
  {
    stars: 5,
    review:
      'Lorem ipsum dolor sit amet consect hendrerit erat ut. Porttitor lobortis ellus amet consect hendrerit erat ut. Porttitor lobortis ellu volutpat quis hendrerit erat ut.',
    reviewerName: 'Sara',
    reviewerLocation: 'Sharjah',
    reviewerImage: img3,  
  },
];

export const countries = [
  { code: 'ae', name: 'United Arab Emirates', flag: '🇦🇪', countryCode: '+971' },
  { code: 'us', name: 'United States', flag: '🇺🇸', countryCode: '+1' },
  { code: 'uk', name: 'United Kingdom', flag: '🇬🇧', countryCode: '+44' },
];

export const servicesPropertiesData = [
  {
    title: "Buying Off-Plan Properties",
    image: serviceImg1,  
    benefits: [
      "Early access",
      "Customization options",
      "Potential for appreciation",
      "Flexible payment plans",
    ],
    outcomes: [
      "Early investment advantage",
      "Personalized home features",
      "Potential for increased property value",
    ],
  },
  {
    title: "Buying Ready Properties",
    image: serviceImg2,  
    benefits: [
      "Immediate possession",
      "No unforeseen costs",
      "Clear understanding of the final product",
    ],
    outcomes: [
      "Quick transition",
      "Predictable costs",
      "Immediate usability",
    ],
  },
  {
    title: "Selling Off-Plan Properties",
    image: serviceImg3,  
    benefits: [
      "Attracts investors",
      "Higher market demand",
      "Flexible marketing",
    ],
    outcomes: [
      "Faster sales",
      "Potential for higher returns",
      "-",
    ],
  },
  {
    title: "Selling Ready Properties",
    image: serviceImg4,  
    benefits: [
      "Immediate sale opportunity",
      "Clear condition and value",
      "Faster transactions",
    ],
    outcomes: [
      "Quicker sales process",
      "Higher buyer interest",
      "-",
    ],
  },
];

export const projects: Project[] = [
  {
    id: '550e8400-e29b-41d4-a716-446655440000',
    builders: 'Imtiaz Properties', // Mapped from `title` to `builders`
    price: 'AED 1.5 Million',
    name: 'Beach Walk Residence',
    location: 'Jumeirah Village Circle (JVC), Dubai',
    bedrooms: 2, // You might want to adjust this to a single number or a range logic
    area: '500 to 1500', // Mapping `size` to `area`
    paymentPlan: '30/70',
    projectCompletionDate: new Date(), // You should update this with the actual date
    images: [property1], // Wrapping `image` in an array
    propertyType: PropertyType.Apartment, // Example, you can adjust according to type
    isFeatured: false, // You can set based on your logic
    isGreyStructure: false, // You can set based on your logic
    amenities: [], // You can add amenities here
    description: 'Lorem ipsum dolor sit amet consectetur.', // Placeholder description
  },
  {
    id: '550e8400-e29b-41d4-a716-446655441000',
    builders: 'Binghatti Developer',
    price: 'AED 900K',
    name: 'Binghatti Royale',
    location: 'Jumeirah Village Circle (JVC), Dubai',
    bedrooms: 2,
    area: '500 to 1500',
    paymentPlan: '30/70',
    projectCompletionDate: new Date(),
    images: [property2],
    propertyType: PropertyType.Apartment,
    isFeatured: false,
    isGreyStructure: false,
    amenities: [],
    description: 'Lorem ipsum dolor sit amet consectetur.',
  },
  {
    id: '550e8400-e29b-41d4-a716-446655442000',
    builders: 'Iman Developer',
    price: 'AED 1.2 Million',
    name: 'One Sky Park',
    location: 'JVC, Dubai',
    bedrooms: 2,
    area: '500 to 1500',
    paymentPlan: '30/70',
    projectCompletionDate: new Date(),
    images: [property3],
    propertyType: PropertyType.Apartment,
    isFeatured: false,
    isGreyStructure: false,
    amenities: [],
    description: 'Lorem ipsum dolor sit amet consectetur.',
  },
  {
    id: '550e8400-e29b-41g4-a716-446655441000',
    builders: 'Goraya Developer',
    price: 'AED $900',
    name: 'Binghatti Royale',
    location: 'Jumeirah Village Circle (JVC), Dubai',
    bedrooms: 2,
    area: '500 to 1500',
    paymentPlan: '30/70',
    projectCompletionDate: new Date(),
    images: [property2],
    propertyType: PropertyType.Apartment,
    isFeatured: false,
    isGreyStructure: false,
    amenities: [],
    description: 'Lorem ipsum dolor sit amet consectetur.',
  },
  {
    id: '550e8400-e29b-41g4-a716-446655447000',
    builders: 'Ati Developer',
    price: 'AED $900',
    name: 'Binghatti Royale',
    location: 'Jumeirah Village Circle (JVC), Dubai',
    bedrooms: 2,
    area: '500 to 1500',
    paymentPlan: '30/70',
    projectCompletionDate: new Date(),
    images: [property2],
    propertyType: PropertyType.Apartment,
    isFeatured: false,
    isGreyStructure: false,
    amenities: [],
    description: 'Lorem ipsum dolor sit amet consectetur.',
  },
  {
    id: '550e8400-e29b-41g4-a716-446655448000',
    builders: 'Husiqa Developer',
    price: 'AED $900',
    name: 'Binghatti Royale',
    location: 'Jumeirah Village Circle (JVC), Dubai',
    bedrooms: 2,
    area: '500 to 1500',
    paymentPlan: '30/70',
    projectCompletionDate: new Date(),
    images: [property2],
    propertyType: PropertyType.Apartment,
    isFeatured: false,
    isGreyStructure: false,
    amenities: [],
    description: 'Lorem ipsum dolor sit amet consectetur.',
  },
  {
    id: '550e8400-e29b-41g4-a716-446655449000',
    builders: 'Sono Developer',
    price: 'AED $900',
    name: 'Binghatti Royale',
    location: 'Jumeirah Village Circle (JVC), Dubai',
    bedrooms: 2,
    area: '500 to 1500',
    paymentPlan: '30/70',
    projectCompletionDate: new Date(),
    images: [property1],
    propertyType: PropertyType.Apartment,
    isFeatured: false,
    isGreyStructure: false,
    amenities: [],
    description: 'Lorem ipsum dolor sit amet consectetur.',
  },
];

export const keysToConvert = [
  { oldKey: 'paymentplan', newKey: 'paymentPlan' },
  { oldKey: 'projectcompletiondate', newKey: 'projectCompletionDate' },
  { oldKey: 'propertytype', newKey: 'propertyType' },
  { oldKey: 'isfeatured', newKey: 'isFeatured' },
  { oldKey: 'isgreystructure', newKey: 'isGreyStructure' }
];