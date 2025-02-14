import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <h1>My Fantasy GM</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/players">Players</a></li>
        <li><a href="/team-analyzer">Team Analyzer</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
