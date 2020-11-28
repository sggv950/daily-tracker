import React from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export const TrackingItem = () => {
  return (
    <div className='tracking-item'>
      <div>Tracking Item</div>
      <FontAwesomeIcon icon={faCheckCircle} size='lg' />
    </div>
  );
};
