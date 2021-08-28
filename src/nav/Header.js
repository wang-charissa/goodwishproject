import {
  Link
} from "react-router-dom";

import './Header.css';
import logo from '../logo.svg';

function headers () {
  return (
    <header class="siteheader">
      <div class="siteheader__section">
        <div class="siteheader__item siteheader-logo">
          <img src={logo} class='logo' />
        </div>
        <div class="siteheader__item siteheader-button is-site-header-item-selected">Inbox</div>
      </div>

      <div class="siteheader__section">
        <div class="siteheader__item siteheader-button">Sent</div>
        <div class="siteheader__item siteheader-button">Trash</div>
        <div class="siteheader__item siteheader-button">Settings</div>
        <div class="siteheader__item siteheader-button">Log out</div>
      </div>
    </header>
  );
}

export default headers;