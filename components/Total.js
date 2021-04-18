import PropTypes from 'prop-types';

export default function Total({ checked, creditors }) {
  const total = creditors.reduce(
    (acc, creditor) =>
      checked.indexOf(creditor.id) > -1 ? acc + creditor.balance : acc,
    0
  );

  return total.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });
}

Total.propTypes = {
  checked: PropTypes.arrayOf(PropTypes.number).isRequired,
  creditors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      balance: PropTypes.number,
    })
  ).isRequired,
};
