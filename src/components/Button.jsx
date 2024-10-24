import React from 'react';

function Button({
  content = "Button",
  variant = "primary", // primary, secondary, danger, etc.
  size = "medium",     // small, medium, large
  disabled = false,
  textColor = null,
  bgColor = null,
  hasBorder = false,
  borderWidth = "2px",
  borderColor = null,
  rounded = "md",      // none, sm, md, lg, full
  link = null,
  onClick = null,
  ariaLabel = "Button",
}) {
  // Base styles
  let baseClasses = [
    'flex',
    'items-center',
    'justify-center',
    'font-medium',
    'focus:outline-none',
    'transition',
    'duration-300',
    `rounded-${rounded}`,
  ];

  // Size styles
  const sizeClasses = {
    small: ['px-2', 'py-1', 'text-sm'],
    medium: ['px-4', 'py-2', 'text-base'],
    large: ['px-6', 'py-3', 'text-lg'],
  };
  baseClasses.push(...sizeClasses[size]);

  // Variant styles
  const variantStyles = {
    primary: ['bg-blue-600', 'hover:bg-blue-700', 'text-white'],
    secondary: ['bg-gray-600', 'hover:bg-gray-700', 'text-white'],
    danger: ['bg-red-600', 'hover:bg-red-700', 'text-white'],
  };
  if (variantStyles[variant]) {
    baseClasses.push(...variantStyles[variant]);
  }

  // Custom color overrides
  if (bgColor) baseClasses.push(`bg-${bgColor}-600`, `hover:bg-${bgColor}-700`);
  if (textColor) baseClasses.push(`text-${textColor}`);
  if (borderColor) {
    baseClasses.push(
      `border-${borderColor}-600`,
      `hover:border-${borderColor}-700`,
      `border-${borderWidth}`,
      'border-solid'
    );
  } else if (hasBorder) {
    baseClasses.push(
      `border-${borderWidth}`,
      'border-solid',
      'border-transparent'
    );
  }

  // Disabled state
  if (disabled) {
    baseClasses.push('opacity-50', 'cursor-not-allowed');
  }

  const classes = baseClasses.join(' ');

  const commonProps = {
    className: classes,
    'aria-label': ariaLabel,
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
  };

  if (link && !disabled) {
    return (
      <a href={link} {...commonProps}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" {...commonProps}>
      {content}
    </button>
  );
}

export default Button;
