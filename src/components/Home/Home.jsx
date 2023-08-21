import { useState } from 'react';
import Tooltip from '../Tooltip/Tooltip';
import styles from './Home.module.css';
function Home() {
  const [visible, setisVisible] = useState(false);
  const handleVisibilityOn = () => {
    setisVisible(true);
  };
  const handleVisibilityOff = () => {
    setisVisible(false);
  };
  const [details, setDetails] = useState({
    selectedElement: 1,
    text: 'hello',
    size: '1.3',
    padding: '0.4',
    color: 'white',
    bgColor: 'black',
    width: '30',
    radius: '0.5',
    position: 'bottom',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className={styles.tooltipWrapper}>
      <div className={styles.inputContainer}>
        <div className={styles.inputInnerContainer}>
          <label>Select target element</label>
          <select className={styles.elementsDropDown}>
            <option value="1">Element 1</option>
            <option value="2">Element 2</option>
            <option value="3">Element 3</option>
            <option value="4">Element 4</option>
          </select>
        </div>
        <div className={styles.inputInnerContainer}>
          <label>Tooltip text</label>
          <input name="text" value={details.text} onChange={handleChange} />
        </div>
        <div className={styles.inputInnerContainerSizePadding}>
          <div className={styles.inputInnerContainerSize}>
            <label>Text Size</label>
            <input
              type="number"
              name="size"
              value={details.size}
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputInnerContainerPadding}>
            <label>Padding</label>
            <input
              type="number"
              name="padding"
              value={details.padding}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.inputInnerContainer}>
          <label>Text color</label>
          <input name="color" value={details.color} onChange={handleChange} />
        </div>
        <div className={styles.inputInnerContainer}>
          <label>Background color</label>
          <input
            name="bgColor"
            value={details.bgColor}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputInnerContainer}>
          <label>Tooltip Width</label>
          <input
            type="number"
            name="width"
            value={details.width}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputInnerContainer}>
          <label>Corner radius</label>
          <input
            type="number"
            name="radius"
            value={details.radius}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputInnerContainer}>
          <label>Position</label>
          <select
            className={styles.dropDown}
            name="position"
            value={details.position}
            onChange={handleChange}
          >
            <option value="top">Top</option>
            <option value="bottom">Bottom</option>
            <option value="right">Left</option>
            <option value="left">Right</option>
          </select>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button
          onMouseEnter={handleVisibilityOn}
          onMouseLeave={handleVisibilityOff}
          className={styles.tooltipContainer}
        >
          Hover Over me for Tooltip
        </button>
        {visible && (
          <>
            <Tooltip details={details} />
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
