import type { AppType, AppProps } from '@/os/types';
import type { SvgIconProps } from '@mui/material/SvgIcon';

export interface AppConfig<TAppProps extends AppProps> {
  type: AppType;
  name: string;
  Component: React.FC<TAppProps>;
  Icon: React.FC<SvgIconProps>;
}
