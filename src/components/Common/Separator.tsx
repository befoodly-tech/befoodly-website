import styles from './Common.module.css';
import cx from 'classnames';

interface SeparatorProps {
  updatedClass?: any;
}

const Separator = (props: SeparatorProps) => {
  const { updatedClass } = props;

  return <hr className={cx(styles.separator, updatedClass)} role="separator" />;
};

export default Separator;
