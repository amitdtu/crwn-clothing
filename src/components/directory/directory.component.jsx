import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuItem from '../menu-item/menu-item.component';
import { selectDirectorySections } from '../../redux/directory/directory.selector';
import { createStructuredSelector } from 'reselect'

import './directory.component.scss'

const Directory = ({ sections }) =>  {
    return (
        <div className="directory-menu">
            {sections.map(({id, title, size, imageUrl, url }) => (
                <MenuItem key={id} title={title} size={size} imageUrl={imageUrl} url={url} />
            ))}
        </div>
    )
}

const mapState = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapState)(Directory)
