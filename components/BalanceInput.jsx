import { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Input from './Input';

export default function BalanceInput({ balance, onBlur, className, ...props }) {
  const [focused, setFocused] = useState(false);

  let value;
  if (focused) {
    value = balance === '0' ? '' : balance;
  } else {
    value = parseFloat(balance).toLocaleString('en-US', {
      minimumFractionDigits: 2,
    });
  }
  return (
    <Input
      className={clsx(className, 'w-full')}
      onFocus={() => setFocused(true)}
      onBlur={() => {
        onBlur();
        setFocused(false);
      }}
      value={value}
      {...props}
    />
  );
}

BalanceInput.defaultProps = { className: '' };
BalanceInput.propTypes = {
  balance: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  className: PropTypes.string,
};
