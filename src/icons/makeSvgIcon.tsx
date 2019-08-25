import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';


interface MakeSvgIconProps extends SvgIconProps {
  d: string,
};

const makeSvgIcon = ({
  d,
  ...defaultProps
}: MakeSvgIconProps): React.ReactType => (
  (props: SvgIconProps) => (
    <SvgIcon
      {...{
        ...defaultProps,
        ...props,
      }}
    >
      <path d={d} fill="currentColor" />
    </SvgIcon>
  )
);

export default makeSvgIcon;
