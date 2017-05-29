import React, { Component } from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="mdl-mini-footer">
        <div className="mdl-mini-footer__bottom-section">
          <div className="mdl-logo">Title</div>
          <ul className="mdl-mini-footer__link-list">
            <li><a href="#">Help</a></li>
            <li><a href="#">About me</a></li>
            <li><a href="#">Privacy & Terms</a></li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;