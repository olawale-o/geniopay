const Card = ({strokecolor}) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="stroke" d="M2 8.50496H22" stroke={strokecolor} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path className="stroke" d="M6 16.505H8" stroke={strokecolor} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path className="stroke" d="M10.5 16.505H14.5" stroke={strokecolor} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path className="stroke" d="M6.44 3.50496H17.55C21.11 3.50496 22 4.38496 22 7.89496V16.105C22 19.615 21.11 20.495 17.56 20.495H6.44C2.89 20.505 2 19.625 2 16.115V7.89496C2 4.38496 2.89 3.50496 6.44 3.50496Z" stroke={strokecolor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

export default Card;
