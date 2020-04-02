import React from 'react';
import './style.scss';

const LinkPreview = ({img, title, description, site}) => {
    return <div className="link-preview">
    <div className="link-preview-image">
      <img src={img} />
    </div>
    <div className="link-preview-info">
      {site && <div className="link-preview-site-info">
        {site.ico && <div className="link-preview-site-ico">
          <img src={site.ico}/>
        </div>}
        {site.name && <div className="link-preview-site-name">{site.name}</div>}
      </div>}
      <div className="link-preview-title">{title}</div>
      <div className="link-preview-description">{description}</div>
    </div>
  </div>
}

export default LinkPreview;