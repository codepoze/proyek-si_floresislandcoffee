import bg from '../assets/bg-product.png'
import retail1 from '../assets/product1.png';
import retail2 from '../assets/product2.png';
import home1 from '../assets/product3.png';
import home2 from '../assets/product4.png';
import hospitality1 from '../assets/product5.png';
import hospitality2 from '../assets/product6.png';


export const productsData = [
  {
    id: 1,
    type: "category",
    title: "Retail",
    subtitle: "Package"
  },
  {
    id: 2,
    type: "image",
    backgroundImg : bg,
    image: retail1,
    alt: "Retail package 1"
  },
  {
    id: 3,
    type: "image",
    backgroundImg : bg,
    image: retail2,
    alt: "Retail package 2"
  },
  {
    id: 4,
    type: "image",
    backgroundImg : bg,
    image: home1,
    alt: "Hospitality package 1"
  },
  {
    id: 5,
    type: "image",
    backgroundImg : bg,
    image: home2,
    alt: "Hospitality package 2"
  },
  {
    id: 6,
    type: "category",
    title: "Home",
    subtitle: "Package"
  },
  {
    id: 7,
    type: "category",
    title: "Hospitality",
    subtitle: "Package"
  },
  {
    id: 8,
    type: "image",
    backgroundImg : bg,
    image: hospitality1,
    alt: "Hospitality package 3"
  },
  {
    id: 9,
    type: "image",
    backgroundImg : bg,
    image: hospitality2,
    alt: "Hospitality package 4"
  }
];