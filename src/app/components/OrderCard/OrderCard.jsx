import React from 'react';
import { Dots } from '../../../assets/svgs/dots';

const styles = {
  container: {
    display: 'flex',
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    flex: 1,
    height: '10rem',
    marginTop: '1rem',
  },
  dotContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '1.5rem',
    padding: '0 1rem',
  },
  dot: {
    width: '1rem',
    height: 'auto',
    cursor: 'pointer',
  },
  statusContainer: {
    display: 'flex',
  },
};

export const OrderCard = ({ props, clicked, toggle }) => {
  return (
    <div style={styles.container} onClick={toggle}>
      <div>
        <div style={styles.dotContainer}>
          <Dots style={styles.dot} />
        </div>
        <div style={styles.statusContainer}>
          <div>
            <img src={props.image} alt="product" />
          </div>
          <div>
            <div>{props.status}</div>
            <div>{`${props.days} days left`}</div>
            <div>
              <div>{`${props.hours} hrs`}</div>|<div>{`$${props.amount}`}</div>
            </div>
          </div>
        </div>
        {clicked && (
          <div style={styles.category}>
            <div style={styles.sectionHeader}>
              <input type="checkbox" />
              <div style={styles.sectionHeader}>CANCELLED</div>
            </div>
            <div>
              <input type="checkbox" />
              <div style={styles.sectionHeader}>COMPLETED</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
