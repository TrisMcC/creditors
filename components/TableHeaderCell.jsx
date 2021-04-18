import PropTypes from 'prop-types';
import clsx from 'clsx';

export default function TableHeaderCell({ className, right, ...props }) {
  return (
    <th
      className={clsx(
        className,
        right ? 'text-right' : 'text-left',
        'border border-black font-bold'
      )}
      {...props}
    />
  );
}

TableHeaderCell.defaultProps = { className: '', right: false };
TableHeaderCell.propTypes = {
  className: PropTypes.string,
  right: PropTypes.bool,
};
