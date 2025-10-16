//supliers
import InterlecAustraliaPTY from '../assets/interlec-australia-pty-ltd.jpg';
import ABBLogo from '../assets/ABB-logo-RGB.jpg';
import SierraSupport from '../assets/Sierra-support-service.png';
import CelticSolor from '../assets/Celtic-power-australia.png';
import HexeisSolution from '../assets/Hexeis-solution.png';

const imgUri = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687';

const supplierImg1 = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170';

const land_curiser_1 = 'https://images.unsplash.com/photo-1623659791251-b4d0881bb9d2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const land_curiser_2 = 'https://images.unsplash.com/photo-1623264025997-7f3e64bec444?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const toyota_hilux = 'https://images.unsplash.com/photo-1629807390858-2d19718c41d3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const toyota_mark_x = 'https://images.unsplash.com/photo-1716237923565-b5368f0cad10?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';


export const teams = [
  {
    name: "Douglas Ekya Siwi",
    position: "Director & Project Manager",
    qualification: "M.Eng. Electrical Engineering",
    imgUri: imgUri,
  },
  {
    name: "Joshua Yari",
    position: "Project Enginee",
    qualification: "Electrical Engineering",
    imgUri: imgUri,
  },
  {
    name: "Benjamin William",
    position: "Power Engineer",
    qualification: "Power Systems Engineering",
    imgUri: imgUri,
  },  
  {
    name: "Samson Kapia",
    position: "Transmission Line Engineer",
    qualification: "Transmission Engineering",
    imgUri: imgUri,
  },  
  {
    name: "Joliken Isafa",
    position: "Construction Manager",
    qualification: "Construction Management",
    imgUri: imgUri,
  },  
  {
    id: 1,
    name: "Robert Simon",
    position: "Accounts Manager",
    qualification: "Financial Management",
    imgUri: imgUri,
  }
];


export const Supplier = [
  {
    company: "Preformed Line Products",
    content: "Power line hardware and accessories",
    country: "Australia",
    imgUri: supplierImg1,
  },
  {
    company: "Interlec Australia",
    content: "Electrical infrastructure solutions",
    location: "Australia",
    imgUri:  InterlecAustraliaPTY,
  },
  {
    company: "ABB Australia",
    content: "Power and automation technologies",
    country: "Australia",
    imgUri:  ABBLogo,
  },
  {
    company: "Sierra Support Services",
    content: "Technical support and maintenance",
    country: "Australia",
    imgUri:  SierraSupport,
  },
  {
    company: "Celtic Power Australia",
    content: "Power transmission equipment",
    country: "Australia",
    imgUri:  CelticSolor,
  },
  {
    company: "Hexeis Australia",
    content: "Electrical components and systems",
    country: "Australia",
    imgUri:  HexeisSolution,
  },
  {
    company: "Transnet Australia",
    content: "Transmission network solutions",
    country: "Australia",
    imgUri:  supplierImg1,
  },
];


export const fleet = [
  {
    imgUri: land_curiser_1,
    name: "Toyota Land Cruiser",
    office: "Lae",
    description: "Heavy Duty 4WD",
    content: "Remote site access and equipment transport",
  },
  {
    imgUri: land_curiser_2,
    name: "Toyota Land Cruiser",
    office: "Mt. Hagen",
    description: "Heavy Duty 4WD",
    content: "Highland region project access",
  },
  {
    imgUri: toyota_hilux,
    name: "Toyota Hilux",
    office: "Port Moresby",
    description: "Utility Vehicle",
    content: "Urban operations and light equipment transport",
  },
  {
    imgUri: toyota_mark_x,
    name: "Toyota Mark X",
    office: "Port Moresby",
    description: "xecutive Vehicle",
    content: "Business meetings and client relations",
  },
]