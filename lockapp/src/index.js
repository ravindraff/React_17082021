import React from "react";
import { render } from "react-dom";
import LockScreen from "react-lock-screen";

import './index.css';

function App() {
  const getLockScreenUi = setLock => {
    return (
      <div className="react-lock-screen__ui">
        <img
          width="32"
          src="https://cdn3.iconfinder.com/data/icons/wpzoom-developer-icon-set/500/102-256.png"
          alt="lock"
        />
        <p>Just to be safe, we locked the screen</p>
        <button onClick={() => setLock(false)}>unlock</button>
      </div>
    );
  };

  return (
    <div className="app">
      <LockScreen timeout={5000} ui={getLockScreenUi}>
        <h1>Screen (if idle) will be locked in 5seconds</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          dignissimos earum, magnam quasi placeat accusantium numquam deserunt
          repellat voluptatem ducimus ipsum corrupti vitae quos voluptatum
          officia. Iure similique sequi rerum! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Culpa dignissimos earum, magnam quasi
          placeat accusantium numquam deserunt repellat voluptatem ducimus ipsum
          corrupti vitae quos voluptatum officia. Iure similique sequi rerum!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          dignissimos earum, magnam quasi placeat accusantium numquam deserunt
          repellat voluptatem ducimus ipsum corrupti vitae quos voluptatum
          officia. Iure similique sequi rerum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          dignissimos earum, magnam quasi placeat accusantium numquam deserunt
          repellat voluptatem ducimus ipsum corrupti vitae quos voluptatum
          officia. Iure similique sequi rerum! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Culpa dignissimos earum, magnam quasi
          placeat accusantium numquam deserunt repellat voluptatem ducimus ipsum
          corrupti vitae quos voluptatum officia. Iure similique sequi rerum!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          dignissimos earum, magnam quasi placeat accusantium numquam deserunt
          repellat voluptatem ducimus ipsum corrupti vitae quos voluptatum
          officia. Iure similique sequi rerum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          dignissimos earum, magnam quasi placeat accusantium numquam deserunt
          repellat voluptatem ducimus ipsum corrupti vitae quos voluptatum
          officia. Iure similique sequi rerum! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Culpa dignissimos earum, magnam quasi
          placeat accusantium numquam deserunt repellat voluptatem ducimus ipsum
          corrupti vitae quos voluptatum officia. Iure similique sequi rerum!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          dignissimos earum, magnam quasi placeat accusantium numquam deserunt
          repellat voluptatem ducimus ipsum corrupti vitae quos voluptatum
          officia. Iure similique sequi rerum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          dignissimos earum, magnam quasi placeat accusantium numquam deserunt
          repellat voluptatem ducimus ipsum corrupti vitae quos voluptatum
          officia. Iure similique sequi rerum! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Culpa dignissimos earum, magnam quasi
          placeat accusantium numquam deserunt repellat voluptatem ducimus ipsum
          corrupti vitae quos voluptatum officia. Iure similique sequi rerum!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          dignissimos earum, magnam quasi placeat accusantium numquam deserunt
          repellat voluptatem ducimus ipsum corrupti vitae quos voluptatum
          officia. Iure similique sequi rerum!
        </p>
      </LockScreen>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
