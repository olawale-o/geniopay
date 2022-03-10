import { Grid, Wallet, Card, Fx, Beneficiary, Perk } from "../components/Svg";
import wallet_action from '../assets/images/wallet_action.png';
import voucher from '../assets/images/voucher.png';
import card_action from '../assets/images/card_action.png';
import balance from '../assets/images/balance.png';
import payment from '../assets/images/payment.png';
import transfer from '../assets/images/transfer.png';

export const links = [
  {
    id: 1,
    name: 'Dashboard',
    icon: <Grid fillcolor="#fff" />,
    url: 'screenone',
  },
  {
    id: 2,
    name: 'Wallet',
    icon: <Wallet strokecolor="#fff" />,
    url: 'screentwo',
  },
  {
    id: 3,
    name: 'Cards',
    icon: <Card strokecolor="#fff" />,
    url: '/#',
  },
  {
    id: 4,
    name: 'FX Center',
    icon: <Fx strokecolor="#fff" />,
    url: '/#',
  },
  {
    id: 5,
    name: 'Beneficiaries',
    icon: <Beneficiary strokecolor="#fff" />,
    url: '/#',
  },
  {
    id: 6,
    name: 'Perks',
    icon: <Perk strokecolor="#fff" />,
    url: '/#',
  },
];

export const quickLinks = [
  {
    id: 1,
    title: 'Add new wallet',
    img: wallet_action,
  },
  {
    id: 2,
    title: 'Add new card',
    img: card_action,
  },
  {
    id: 3,
    title: 'Balance exchange',
    img: balance,
  },
  {
    id: 4,
    title: 'Transfer to account',
    img: transfer,
  },
  {
    id: 5,
    title: 'Generate voucher',
    img: voucher,
  },
  {
    id: 6,
    title: 'Payment',
    img: payment,
  }
];
