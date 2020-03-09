import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'Dashboard',
    // icon: 'home-outline',
    link: '/pages/iot-dashboard',
    home: true,
  },

  {
    title: 'Home',
    // icon: 'activity-outline',
    link: '/pages/dashboard',
  },

  {
    title: 'Products',
    // icon: 'shopping-bag',
    link: '/pages/products',
  },

  {
    title: 'Category',
    // icon: 'alert-triangle-outline',
    link: '/pages/category',
  },
  {
    title: 'Stock',
    // icon: 'archive-outline',
    link: '/pages/stock',
  },
  {
    title: 'Commandes',
    // icon: 'arrow-circle-down-outline',
    link: '/pages/commandes',
  },
  {
    title: 'Calendrier',
    // icon: 'calendar',
    link: '/pages/ui-features/icons',
  },
  {
    title: 'Statistiques',
    // icon: 'browser-outline',
    link: '/pages/charts/echarts',
  },

  {
    title: 'Authentification',
    // icon: 'lock-outline',
    children: [
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
