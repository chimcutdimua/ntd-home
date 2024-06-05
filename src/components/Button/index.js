import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({ to, href, children, leftIcon, rightIcon, className, onclick, ...passProps }) {
  let Comp = "button";
  const props = {
    onclick,
    ...passProps,
  };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    // eslint-disable-next-line no-unused-vars
    Comp = 'a';
  }

  const classes = cx("wrapper", {
    [className]: className,

  });

  return (
    <Comp className={classes} {...props}>
        {leftIcon && <span className={cx('icon')}>{ leftIcon }</span>}
        <span className={cx('title')}>{children}</span>
        {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
