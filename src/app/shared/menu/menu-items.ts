export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    isCollapsed?: boolean;
    isCollapsing?: any;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    type?: string;
    collapse?: string;
    children?: ChildrenItems2[];
    isCollapsed?: boolean;
}
export interface ChildrenItems2 {
    path?: string;
    title?: string;
    type?: string;
}
//Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: '/admin/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-desktop text-warning'
  },
  {
    path: '/admin/cashbook',
    title: 'Cashbook',
    type: 'link',
    icontype: 'fas fa-money-bill-wave text-green'
  },
  {
    path: '/admin/payables',
    title: 'Account Payables',
    type: 'link',
    icontype: 'fas fa-money-check-alt text-indigo'
  },
  {
    path: '/admin/purchasing',
    title: 'Purchasing',
    type: 'link',
    icontype: 'fas fa-receipt text-blue'
  },
  {
    path: '/admin/accounting',
    title: 'Asset Accounting',
    type: 'link',
    icontype: 'fas fa-boxes text-pink'
  },
  {
    path: '/admin/payroll',
    title: 'Payroll',
    type: 'link',
    icontype: 'fas fa-wallet text-green'
  },
  {
    path: '/admin/investment',
    title: 'Investment',
    type: 'link',
    icontype: 'fas fa-cash-register text-pink'
  },
  {
    path: '/admin/stock',
    title: 'Stock Control',
    type: 'link',
    icontype: 'fas fa-box-open text-yellow'
  },
  {
    path: '/admin/claim',
    title: 'Advance & Claims',
    type: 'link',
    icontype: 'fas fa-money-check text-orange'
  },
  {
    path: '/admin/deposit',
    title: 'Deposit & Trust',
    type: 'link',
    icontype: 'fas fa-hand-holding-usd text-blue'
  },
  {
    path: '/admin/budget',
    title: 'Budget Online',
    type: 'link',
    icontype: 'fas fa-funnel-dollar text-red'
  },
  {
    path: '/admin/trading',
    title: 'Trading',
    type: 'link',
    icontype: 'fas fa-search-dollar text-pink'
  }
];

/*
{
  path: '',
  title: '',
  type: 'link',
  icontype: ''
}
*/