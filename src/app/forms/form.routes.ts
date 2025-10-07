import { Address } from './address/address';
import { Autocomplete } from './autocomplete/autocomplete';
import { Reset } from './reset/reset';

export default [
  {
    path: 'address',
    component: Address,
  },
  {
    path: 'reset',
    component: Reset,
  },
  {
    path: 'autocomplete',
    component: Autocomplete,
  },
];
