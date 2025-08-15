// Assuming your build system can import raw SVG content
import calendarIcon from '../assets/calendar.svg?raw';
import truckIcon from '../assets/truck.svg?raw';
import usersIcon from '../assets/users.svg?raw';
import badgeIcon from '../assets/badge.svg?raw';

export const homeStats = [
  {
    id: 1,
    icon: calendarIcon,
    number: 12000,
    label: 'Loads',
    duration: 2000 
  },
  {
    id: 2,
    icon: truckIcon,
    number: 1041,
    label: 'New Trucks In 2024',
    duration: 2000
  },
  {
    id: 3,
    icon: usersIcon,
    number: 700,
    label: 'Owner Operators',
    duration: 2000
  },
  {
    id: 4,
    icon: badgeIcon,
    number: 4.9,
    label: 'Rate on Google',
    duration: 2000,
    isDecimal: true
  }
];