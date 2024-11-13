// Import necessary Font Awesome utilities and icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPiggyBank,
    faHeart,
    faShoppingCart,
    faBook,
    faTicketAlt,
    faLandmark,
    faUtensils,
    faAppleAlt,
    faGamepad,
    faHeartbeat,
    faMapMarkedAlt,
    faRing,
    faBullhorn,
    faHandsHelping,
    faFilm,
    faBuilding,
    faUsers,
    faTaxi,
    faTruck,
    faVideo,
    faShieldAlt,
    faPlane,
    faBriefcase,
    faLink,
    faWater,
    faUniversity
  } from '@fortawesome/free-solid-svg-icons';
import iconMapping from "../../data/icon/iconMapping.json";

// Create an icon map to link JSON values to actual FontAwesome icons
const iconMap = {
    "faPiggyBank": faPiggyBank,
    "faHeart": faHeart,
    "faShoppingCart": faShoppingCart,
    "faBook": faBook,
    "faTicketAlt": faTicketAlt,
    "faLandmark": faLandmark,
    "faUtensils": faUtensils,
    "faAppleAlt": faAppleAlt,
    "faGamepad": faGamepad,
    "faHeartbeat": faHeartbeat,
    "faMapMarkedAlt": faMapMarkedAlt,
    "faRing": faRing,
    "faBullhorn": faBullhorn,
    "faHandsHelping": faHandsHelping,
    "faFilm": faFilm,
    "faBuilding": faBuilding,
    "faUsers": faUsers,
    "faTaxi": faTaxi,
    "faTruck": faTruck,
    "faVideo": faVideo,
    "faShieldAlt": faShieldAlt,
    "faPlane": faPlane,
    "faBriefcase": faBriefcase,
    "faLink": faLink,
    "faWater": faWater,
    "faUniversity": faUniversity
  };
  

function IconDisplay({ title }) {
  // Get the icon name from the JSON file based on title
  const iconName = iconMapping[title];

  // Dynamically assign the icon based on title
  const icon = iconMap[iconName];

  if (!icon) {
    return <p>Icon not found</p>; // Handle cases where icon isn't available
  }

  return <FontAwesomeIcon icon={icon} style={{ fontFamily: 'FontAwesomeLight' , fontWeight : "300" }} />;
}

export default IconDisplay;
