import PropTypes from 'prop-types';
import styles from './Button.module.css';

export function Button({
  children,
  variant = 'primary',
  fullWidth = false,
  ...props
}) {
  return (
    <button
      className={[
        styles.button,
        styles[variant],
        fullWidth ? styles.fullWidth : ''
      ].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  fullWidth: PropTypes.bool,
};
