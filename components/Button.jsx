import clsx from 'clsx';

export default function Button(props) {
  return (
    <button
      type="button"
      className={clsx(
        'w-24',
        'bg-blue-500',
        'text-sm',
        'rounded',
        'shadow',
        'text-white',
        'disabled:opacity-40',
        'disabled:pointer-events-none',
        'transition-opacity'
      )}
      {...props}
    />
  );
}
