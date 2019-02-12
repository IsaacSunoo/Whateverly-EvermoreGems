import React from 'react'

function Header() {
  return (
    <header style={headerDesign}>
        <h1>Evermore Gems</h1>
    </header>
  )
}

const headerDesign = {
    backgroundColor: '#c2c3ef',
    color: '#fff',
    textAlign: 'center',
};

export default Header;