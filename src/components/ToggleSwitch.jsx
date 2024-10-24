import React, { useState } from 'react';

function ToggleSwitch({
  isOn = false,
  onToggle = () => {},
  disabled = false,
  onColor = 'green',
  offColor = 'gray',
  size = 'medium', // small, medium, large
  ariaLabel = 'Toggle Switch',
}) {
  const [toggled, setToggled] = useState(isOn);

  const handleClick = () => {
    if (disabled) return;
    const newState = !toggled;
    setToggled(newState);
    onToggle(newState);
  };

  // Size styles
  const sizeClasses = {
    small: {
      switch: 'w-8 h-4',
      knob: 'w-4 h-4',
    },
    medium: {
      switch: 'w-12 h-6',
      knob: 'w-6 h-6',
    },
    large: {
      switch: 'w-16 h-8',
      knob: 'w-8 h-8',
    },
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-pressed={toggled}
      type="button"
      className={`relative inline-flex items-center ${sizeClasses[size].switch} rounded-full transition-colors duration-300 focus:outline-none ${
        toggled ? `bg-${onColor}-500` : `bg-${offColor}-500`
      } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      <span
        className={`transform transition-transform duration-300 bg-white rounded-full ${sizeClasses[size].knob} ${
          toggled ? `translate-x-${size === 'small' ? '4' : size === 'medium' ? '6' : '8'}` : 'translate-x-0'
        }`}
      />
    </button>
  );
}

export default ToggleSwitch;
