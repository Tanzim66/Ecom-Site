/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React from 'react';

import {DirectoryMenuContainer} from './directory.styles';

import {connect} from 'react-redux';
import {selectDirectorySections}
  from '../../redux/directory/directory.selectors';
import {createStructuredSelector} from 'reselect';

import MenuItem from '../menu-item/menu-item.component';

const Directory = ({sections}) => {
  return (
    <DirectoryMenuContainer>
      {
        sections.map(
            ({id, ...otherSectionProps}) =>
              (
                <MenuItem key={id} {...otherSectionProps}/>
              ),
        )
      }
    </DirectoryMenuContainer>
  );
};


const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
