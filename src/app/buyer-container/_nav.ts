import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
    {
      name: 'Dashboard',
      url: 'dashboard',
      icon: 'icon-speedometer',
      
    },
    {
      title: true,
      name: 'My Orders',
      url: 'order/view'
    },
    {
      name: 'Order History',
      url: 'order/view',
      icon: 'icon-drop'
    }
    /*{
      name: 'Register Products',
      url: '/products/add',
      icon: 'icon-drop'
    },
    {
      title: true,
      name: 'E-Stock',
      url: '/stock'
    },
    {
      name: 'Your Stock',
      url: '/stock/view',
      icon: 'icon-drop'
    },
    {
      title: true,
      name: 'E-Employee',
      url: '/employee'
    },
    {
      name: 'Employee Details',
      url: '/employee/view',
      icon: 'icon-drop'
    },
    {
      name: 'New Employees',
      url: '/employee/add',
      icon: 'icon-drop'
    },
    {
      name: 'Employee Transcations',
      url: '/employee/transaction/view',
      icon: 'icon-drop'
    },
    {
      name: 'Add Transaction',
      url: '/employee/transaction/add',
      icon: 'icon-drop'
    },
    {
      title: true,
      name: 'E-Order',
      url: '/order'
    },*/
];
