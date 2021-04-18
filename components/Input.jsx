import PropTypes from 'prop-types';
import clsx from 'clsx';

export default function Input({ className, checked, ...props }) {
  return (
    <input
      type="text"
      className={clsx(
        className,
        'w-full',
        !checked && 'bg-red-200',
        'border',
        'transition-colors'
      )}
      {...props}
    />
  );
}

Input.defaultProps = { className: '' };
Input.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool.isRequired,
};
