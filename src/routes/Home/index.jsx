import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
      <div>
        <h2>Home</h2>
        <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/profile">Profile</Link>
      </nav>
      </div>
    );
}
