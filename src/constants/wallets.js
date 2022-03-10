import usa from '../assets/images/usa.png';
import eu from '../assets/images/eu.png';
import uk from '../assets/images/uk.png';

const wallets = [
  {
    id: 1,
    title: 'EUR Wallet',
    currency: 'EUR',
    balance: '2,000,000.50',
    default: true,
    img: eu,
  },
  {
    id: 2,
    title: 'Personal Account',
    currency: 'USD',
    balance: '2,000,000.50',
    default: false,
    img: usa,
  },
  {
    id: 3,
    title: 'School Savings',
    currency: 'GBP',
    balance: '2,000,000.50',
    default: false,
    img: uk,
  },
];

export default wallets;
