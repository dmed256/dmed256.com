import type { AppProps } from '@/os/types';
import { APP_REGISTRY } from '@/apps/constants';

export const App = (props: AppProps) => {
  const Component = APP_REGISTRY[props.type].Component;
  if (Component) {
    return <Component key={props.id} {...props} />;
  }
  return null;
};
