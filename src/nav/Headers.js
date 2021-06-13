import {
    Link
  } from "react-router-dom";

function headers () {
    return (
        <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <hr />
        </header>
    );
}

export default headers;