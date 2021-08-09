import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'dark',
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: 'Corgi Token Game',
  pwa: false,
  logo: 'https://www.corgitoken.net/assets/images/CORGI.svg',
  iconfontUrl: '',
};

export default Settings;
