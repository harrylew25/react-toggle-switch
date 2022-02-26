import React from 'react';
import PropTypes from 'prop-types';
import './ToggleSwitch.scss';

const toggleLabelHtml = (id, disabled, optionLabels, checked, onChange) => {
  const handleKeyPress = (event) => {
    if (event.keyCode !== 32) {
      return;
    }
    event.preventDefault();
    onChange(!checked);
  };
  return (
    <label
      className="toggle-switch-label"
      htmlFor={id}
      tabIndex={disabled ? -1 : 1}
      onKeyDown={(e) => handleKeyPress(e)}
    >
      <span
        className={
          disabled
            ? 'toggle-switch-inner toggle-switch-disabled'
            : 'toggle-switch-inner'
        }
        data-yes={optionLabels[0]}
        data-no={optionLabels[1]}
        tabIndex={-1}
      />
      <span
        className={
          disabled
            ? 'toggle-switch-switch toggle-switch-disabled'
            : 'toggle-switch-switch'
        }
        tabIndex={-1}
      />
    </label>
  );
};

const ToggleSwitch = ({
  id,
  name,
  checked,
  onChange,
  optionLabels,
  small,
  disabled,
  toggleLabel,
}) => {
  return (
    <>
      <div className={'toggle-switch' + (small ? ' small-switch' : '')}>
        <input
          type="checkbox"
          className="toggle-switch-checkbox"
          name={name}
          id={id}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
        />
        {id
          ? toggleLabelHtml(id, disabled, optionLabels, checked, onChange)
          : null}
      </div>
      <label htmlFor={id}>{toggleLabel}</label>
    </>
  );
};

ToggleSwitch.defaultProps = {
  optionLabels: ['Yes', 'No'],
};

ToggleSwitch.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  optionLabels: PropTypes.array,
  small: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default ToggleSwitch;
