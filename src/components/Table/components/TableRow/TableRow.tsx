/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import useTheme from 'hooks/useTheme';

type Props = {
  selected?: boolean;
  nested?: boolean;
};

const TableRow: React.FC<Props> = ({ nested, selected, children, ...rest }) => {
  const theme = useTheme();

  return (
    <tr
      css={[
        {
          backgroundColor: selected ? theme.palette.gray : undefined,
          paddingTop: theme.spacing.xsm,
          paddingBottom: theme.spacing.xsm,
          '> td': {
            paddingTop: nested ? 0 : undefined,
            paddingBottom: nested ? 0 : undefined,
          },
        },
      ]}
      {...rest}
    >
      {children}
    </tr>
  );
};

export default TableRow;
