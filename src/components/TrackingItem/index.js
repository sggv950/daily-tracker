import React, { useState } from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faCircle,
  faTimesCircle,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';

export const TrackingItem = () => {
  const [isEdit, updateIsEdit] = useState(false);

  return (
    <div className='tracking-item-container'>
      <div className='tracking-item' onClick={() => updateIsEdit(!isEdit)}>
        <div>Tracking Item</div>
        <FontAwesomeIcon icon={faCheckCircle} size='lg' />
      </div>
      <div className={`tracking-item-menu ${!isEdit ? 'hidden-menu' : ''}`}>
        <div className={`tracking-item-menu-item ${!isEdit ? 'hidden-menu-item' : 'visible-menu-item'}`}>
          <FontAwesomeIcon icon={faTimesCircle} size='lg' />
        </div>
        <div className={`tracking-item-menu-item ${!isEdit ? 'hidden-menu-item' : 'visible-menu-item'}`}>
          <FontAwesomeIcon icon={faTrashAlt} size='lg' />
        </div>
      </div>
    </div>
  );
};
