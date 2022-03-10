import { Grid, Wallet, Card, Fx, Beneficiary, Perk } from "../components/Svg";

const links = [
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

export default links;
