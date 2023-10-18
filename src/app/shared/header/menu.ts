import {MenuItem} from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: 'Home',
    link: '/',
  },
  {
    id: 2,
    label: 'Equipments',
    subItems: [
      {
        id: 3,
        label: 'Home v.1',
        link: '/home1',
        parentId: 2
      },
    ]
  },
  {
    id: 4,
    label: 'Vendors',
    subItems: []
  },
  {
    id: 5,
    label: 'Help',
    subItems: [
      {
        id: 6,
        label: 'Home v.1',
        link: '/home1',
        parentId: 5
      },
    ]
  },
  {
    id: 7,
    label: 'Blog',
      subItems: [
      ]
    },
];

