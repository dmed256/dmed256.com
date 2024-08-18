import * as React from 'react';

export const usePopover = () => {
  const [popoverAnchorEl, setPopoverAnchorEl] = React.useState<any | null>(
    null
  );

  const onPopoverComponentClick = React.useCallback(
    (event: React.MouseEvent<any>) => {
      setPopoverAnchorEl(event.currentTarget);
    },
    [setPopoverAnchorEl]
  );

  const onPopoverClose = React.useCallback(() => {
    setPopoverAnchorEl(null);
  }, [setPopoverAnchorEl]);

  return {
    popoverAnchorEl,
    isPopoverOpen: !!popoverAnchorEl,
    onPopoverComponentClick,
    onPopoverClose,
  } as const;
};
