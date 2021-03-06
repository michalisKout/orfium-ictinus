/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { buttonSpanStyle, buttonStyle } from './Button.style';
import { AcceptedColorComponentTypes } from 'utils/themeFunctions';
import useTheme from 'hooks/useTheme';
import { generateTestDataId } from 'utils/helpers';
import { EventProps } from 'utils/common';

export type Props = {
  /** Type indicating the type of the button */
  type?: AcceptedColorComponentTypes;
  /** This property define the size of the button. Defaults to 'md' */
  size?: 'lg' | 'md' | 'sm';
  /** Property indicating if the component is filled with a color based on the type */
  filled?: boolean;
  /** An optional icon to turn the button to icon button with text/children */
  icon?: React.Component | JSX.Element | null;
  /** Define if the button is in disabled state */
  disabled?: boolean;
};

export type TestProps = {
  dataTestId?: string;
};

const Button: React.FC<Props & TestProps & EventProps> = ({
  size = 'md',
  type = 'primary',
  filled = true,
  icon = null,
  disabled = false,
  children,
  dataTestId = '',
  onClick,
  onBlur,
}) => {
  const theme = useTheme();

  return (
    <button
      data-testid={generateTestDataId('button', dataTestId)}
      css={buttonStyle({
        type,
        filled,
        size,
        icon,
        disabled,
        childrenCount: React.Children.count(children),
      })(theme)}
      onClick={onClick}
      onBlur={onBlur}
      disabled={disabled}
    >
      <span
        css={buttonSpanStyle({
          type,
          filled,
          size,
          icon,
          disabled,
          hasChildren: Boolean(React.Children.count(children)),
        })(theme)}
      >
        {icon && icon}
        {children}
      </span>
    </button>
  );
};

export default Button;
