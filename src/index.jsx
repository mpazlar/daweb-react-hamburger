import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';

const MenuItem = ({ onSelect, text }) => {
  const handleClick = () => {
    onSelect(text);
  };

  return (
    <a href="#" onClick={handleClick} className="menu-item">
      {text}
    </a>
  );
};

const App = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [pageTitle, setPageTitle] = useState('Domů');

  const handleClick = () => {
    setMenuOpened(menuOpened === false ? true : false);
  };

  const handleSelectedItem = (text) => {
    setMenuOpened(false);
    setPageTitle(text);
  };

  return (
    <>
      <header>
        <div className={menuOpened ? 'menu' : 'menu menu--closed'}>
          <button className="menu__btn " onClick={handleClick}></button>
          <div className="menu__items">
            <MenuItem onSelect={handleSelectedItem} text="Domů" />
            <MenuItem onSelect={handleSelectedItem} text="Naše nabídka" />
            <MenuItem onSelect={handleSelectedItem} text="Náš tým" />
            <MenuItem onSelect={handleSelectedItem} text="Blog" />
            <MenuItem onSelect={handleSelectedItem} text="Kontakt" />
          </div>
        </div>
      </header>
      <main>
        <h1>{pageTitle}</h1>
      </main>
    </>
  );
};

render(<App />, document.querySelector('#app'));
