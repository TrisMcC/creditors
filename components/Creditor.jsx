import { useState } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import BalanceInput from './BalanceInput';
import MinPayInput from './MinPayInput';

export default function Creditor({
  creditor: initialState,
  checked,
  setChecked,
  updateDebt,
}) {
  const [creditor, setCreditor] = useState(initialState);

  const {
    id,
    creditorName,
    firstName,
    lastName,
    minPaymentPercentage,
    balance,
  } = creditor;

  function onChange(e) {
    setCreditor((p) => ({
      ...p,
      [e.target.name]: e.target.value,
    }));
  }

  function onBlur() {
    updateDebt(creditor);
  }

  return (
    <tr>
      <td className="text-center">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(id, e.target.checked)}
        />
      </td>
      <td>
        <Input
          onChange={onChange}
          onBlur={onBlur}
          checked={checked}
          name="creditorName"
          value={creditorName}
        />
      </td>
      <td>
        <Input
          onChange={onChange}
          onBlur={onBlur}
          checked={checked}
          name="firstName"
          value={firstName}
        />
      </td>
      <td>
        <Input
          onChange={onChange}
          onBlur={onBlur}
          name="lastName"
          checked={checked}
          value={lastName}
        />
      </td>
      <td>
        <MinPayInput
          className="text-right"
          onBlur={onBlur}
          name="minPaymentPercentage"
          checked={checked}
          onChange={onChange}
          minPay={
            minPaymentPercentage === null ? '' : minPaymentPercentage.toString()
          }
        />
      </td>
      <td>
        <BalanceInput
          className="text-right"
          onBlur={onBlur}
          name="balance"
          onChange={onChange}
          checked={checked}
          balance={balance.toString()}
        />
      </td>
    </tr>
  );
}

Creditor.propTypes = {
  creditor: PropTypes.shape({
    id: PropTypes.number,
    creditorName: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    minPaymentPercentage: PropTypes.number,
    balance: PropTypes.number,
  }).isRequired,
  checked: PropTypes.bool.isRequired,
  setChecked: PropTypes.func.isRequired,
  updateDebt: PropTypes.func.isRequired,
};
