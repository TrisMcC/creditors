import { useState } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

export default function MinPayInput({ minPay, onBlur, ...props }) {
  const [focused, setFocused] = useState(false);
  let value;
  if (minPay === '') {
    value = '';
  } else if (focused) {
    value = minPay;
  } else {
    value = (minPay / 100).toLocaleString('en-US', {
      style: 'percent',
      minimumFractionDigits: 2,
    });
  }

  return (
    <Input
      onFocus={() => setFocused(true)}
      onBlur={() => {
        setFocused(false);
        onBlur();
      }}
      value={value}
      {...props}
    />
  );
}

MinPayInput.defaultProps = { minPay: '' };

MinPayInput.propTypes = {
  minPay: PropTypes.string,
  onBlur: PropTypes.func.isRequired,
};
