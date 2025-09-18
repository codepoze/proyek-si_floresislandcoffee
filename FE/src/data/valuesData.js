import coffeeIcon from '../assets/coffeWhite.png';
import LeafIcon from '../assets/leafWhite.png';
import cupIcon from '../assets/cupWhite.png';
import sunIcon from '../assets/sunWhite.png';
import bg1 from '../assets/value1.png';
import bg2 from '../assets/value2.png';
import bg3 from '../assets/value3.png';
import bg4 from '../assets/value4.png';
// import farming3 from '../assets/farming3.jpg';
// import farming4 from '../assets/farming4.jpg';

export const valuesData = [
  {
    id: 1,
    type: "text",
    icon: coffeeIcon,
    alt: "",
    bgImage: bg1,
    title: "Ethical Labour & Gender Neutral Practices"
  },
  {
    id: 2,
    type: "text",
    icon: LeafIcon,
    title: "Deforestation Free",
    bgImage: bg2
  },
  // {
  //   id: 3,
  //   type: "image",
  //   image: farming3,
  //   alt: "Mountain view"
  // },
  // {
  //   id: 4,
  //   type: "image",
  //   image: farming4,
  //   alt: "Woman harvesting coffee"
  // },
  {
    id: 5,
    type: "text",
    icon: cupIcon,
    title: "Biodiversity & Ecosystem Services",
    bgImage: bg3
  },
  {
    id: 6,
    type: "text",
    icon: sunIcon,
    bgImage: bg4,
    title: "Emissions & Circular Economy"
  }
];