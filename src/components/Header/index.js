import React from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  return (
    <div className="header">
      <h1>Daily Tracker</h1>
      <div className='add-item-icon'>
      <FontAwesomeIcon icon={faPlusCircle} size='2x' />
      </div>
    </div>
  )
}