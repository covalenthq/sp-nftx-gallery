import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { Kind, Size } from './constants';

export interface ButtonProps
  extends Partial<ButtonHTMLAttributes<any>>,
    Record<string, any> {
  kind?: Kind;
  href?: string;
  size?: Size;
  ref: string;
}

const baseStyles = `inline-flex outline-none font-medium rounded-md`;
const kindStyles = {
  [Kind.PRIMARY]: 'bg-gradient-to-b from-purple-500 to-purple-600 text-white',
  [Kind.SECONDARY]: 'bg-white text-gray-900',
  [Kind.ICON]:
    'bg-gradient-to-b from-purple-400 via-purple-500 to-purple-400 text-white',
};
const sizeStyles = {
  [Size.MEDIUM]: `py-3 px-4 min-h-100 h-12`,
  [Size.LARGE]: `py-6 px-12 min-h-100 h-18`,
};

const Button = forwardRef(
  (
    {
      href,
      children,
      className,
      size = Size.MEDIUM,
      kind = Kind.PRIMARY,
      ...rest
    }: ButtonProps,
    ref
  ) => {
    const Element = href ? 'a' : 'button';

    const styles = `${baseStyles} ${sizeStyles[size]} ${kindStyles[kind]} ${
      className ?? ''
    }`;

    return (
      <Element ref={ref} href={href} className={styles} {...rest}>
        {children}
      </Element>
    );
  }
);

Button.displayName = 'Button';

export default Button;