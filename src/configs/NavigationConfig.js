import {
  DashboardOutlined,
  AppstoreOutlined,
  FileTextOutlined,
  ShoppingOutlined,
  PictureOutlined,
  GiftOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  SettingOutlined,
  MobileOutlined,
  MailOutlined,
  PlusCircleOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import { APP_PREFIX_PATH, AUTH_PREFIX_PATH } from 'configs/AppConfig'

const mainNavTree = [{
  key: 'main',
  path: `${APP_PREFIX_PATH}/home`,
  title: 'sidenav.main',
  icon: AppstoreOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'dashboard',
      path: `${APP_PREFIX_PATH}/home`,
      title: 'sidenav.dashboard',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'ecommerce',
      path: `${APP_PREFIX_PATH}/apps/ecommerce`,
      title: 'sidenav.ecommerce',
      icon: ShoppingCartOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'ecommerce-productList',
          path: `${APP_PREFIX_PATH}/apps/ecommerce/product-list`,
          title: 'sidenav.ecommerce.productList',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'ecommerce-addProduct',
          path: `${APP_PREFIX_PATH}/apps/ecommerce/add-product`,
          title: 'sidenav.ecommerce.addProduct',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'ecommerce-editProduct',
          path: `${APP_PREFIX_PATH}/apps/ecommerce/edit-product/12`,
          title: 'sidenav.ecommerce.editProduct',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'ecommerce-orders',
          path: `${APP_PREFIX_PATH}/apps/ecommerce/orders`,
          title: 'sidenav.ecommerce.orders',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'orders',
      path: `${APP_PREFIX_PATH}/apps/mail/inbox`,
      title: 'sidenav.orders',
      icon: ShoppingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'users',
      path: `${APP_PREFIX_PATH}/pages/user-list`,
      title: 'sidenav.users',
      icon: FileTextOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'users-list',
          path: `${APP_PREFIX_PATH}/pages/user-list`,
          title: 'sidenav.users.userlist',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'users-groups',
          path: `${APP_PREFIX_PATH}/pages/profile`,
          title: 'sidenav.users.usergroups',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
      ]
    },
    {
      key: 'banner',
      path: `${APP_PREFIX_PATH}/apps/chat`,
      title: 'sidenav.banner',
      icon: PictureOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'promocodes',
      path: `${APP_PREFIX_PATH}/apps/calendar`,
      title: 'sidenav.promocodes',
      icon: GiftOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'maps',
      path: `${APP_PREFIX_PATH}/components/maps`,
      title: 'sidenav.maps',
      icon: ShopOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'maps-address',
          path: `${APP_PREFIX_PATH}/components/maps/google-map`,
          title: 'sidenav.maps.address',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'maps-geozones',
          path: `${APP_PREFIX_PATH}/components/maps/simple-map`,
          title: 'sidenav.maps.geozones',
          icon: '',
          breadcrumb: true,
          submenu: []
        }
      ]
    },
    {
      key: 'staff',
      path: `${APP_PREFIX_PATH}/apps/project`,
      title: 'sidenav.staff',
      icon: UsergroupAddOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'mail',
      path: `${APP_PREFIX_PATH}/apps/mail/inbox`,
      title: 'sidenav.mail',
      icon: MailOutlined,
      breadcrumb: false,
      submenu: []
    },
  ]
}]

const systemsNavTree = [
  {
    key: 'systems',
    path: `${APP_PREFIX_PATH}/home`,
    title: 'sidenav.systems',
    icon: PlusCircleOutlined,
    breadcrumb: true,
    submenu: [
      {
        key: 'settings',
        path: `${AUTH_PREFIX_PATH}`,
        title: 'sidenav.settings',
        icon: SettingOutlined,
        breadcrumb: true,
        submenu: []
      },
      {
        key: 'mobile-app',
        path: `${AUTH_PREFIX_PATH}/error-1`,
        title: 'sidenav.mobileapp',
        icon: MobileOutlined,
        breadcrumb: true,
        submenu: []
      },
      {
        key: 'logs',
        path: `${AUTH_PREFIX_PATH}/error-1`,
        title: 'sidenav.logs',
        icon: FileTextOutlined,
        breadcrumb: true,
        submenu: []
      }
    ]
  }
]

const navigationConfig = [
  ...mainNavTree,
  ...systemsNavTree,
]

export default navigationConfig;
