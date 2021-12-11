import React from 'react';
import { Link } from 'react-router-dom';

export default function Profile() {
    return (
      <div>
        <h2>Profile</h2>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem"
          }}
        >
          <Link to="/">Home</Link>
        </nav>
      </div>
    );
}
