import PropTypes from 'prop-types';
import styles from './Tooltip.module.css';
function Tooltip(props) {
  console.log(top);
  return (
    <div
      style={{
        width: `${props.details.width}%`,
        padding: `${props.details.padding}rem`,
        color: `${props.details.color}`,
        backgroundColor: `${props.details.bgColor}`,
        fontSize: `${props.details.size}rem`,
        borderRadius: `${props.details.radius}rem`,
      }}
      className={
        props.details.position === 'top'
          ? styles.tooltipContainerTop
          : props.details.position === 'bottom'
          ? styles.tooltipContainerBottom
          : props.details.position === 'left'
          ? styles.tooltipContainerLeft
          : styles.tooltipContainerRight
      }
    >
      {props.details.text}
    </div>
  );
}
Tooltip.propTypes = {
  details: PropTypes.object,
};

export default Tooltip;
