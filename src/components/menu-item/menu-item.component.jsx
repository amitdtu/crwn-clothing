import React from 'react'
import './menu-item.component.scss';
import { withRouter } from 'react-router-dom';

function MenuItem({ title, imageUrl, history, match, size, url }) {
    return (
        <div style={{background: `url(${imageUrl})`}} className={`${size ? size : ''} menu-item`} onClick={() => history.push(`${match.url}${url}`)}>
            <div className="content">
                <div className="title">{title}</div>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem)