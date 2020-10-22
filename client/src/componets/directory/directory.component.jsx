import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { selectDirectorySections } from '../../redux/directory/directory.selector';

import MenuItem from '../menu-item/menu-item.component';

import './directory.sytles.scss';

const Directory = ({ sections }) => {

  return (
    <div className='directory-menu'>
      {
        sections.map(({ id, ...othersectionProps }) => (
          <MenuItem key={id} {...othersectionProps} />
        ))
      }
    </div>
  )

}


const mapStateToprops = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToprops)(Directory);