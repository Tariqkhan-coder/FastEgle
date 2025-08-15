import React from "react";

const Truck: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="450px"
    height="116px"
    viewBox="0 0 450 116"
    fill="yellow"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <use xlinkHref="https://resolute-logistics.com/img/svg/sprite.svg#what-we-do-svg" />
  </svg>
);

export default Truck;
