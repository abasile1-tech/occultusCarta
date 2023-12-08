import React, { useEffect } from "react";
import * as PIXI from "pixi.js";

const PixiCanvas: React.FC = () => {
  useEffect(() => {
    const app = new PIXI.Application({
      background: 0x1099bb,
      resizeTo: window,
    });
    document.body.appendChild(app.view);

    // Create a new Sprite from an image path
    const bunny = PIXI.Sprite.from("https://pixijs.com/assets/bunny.png");

    // Center the sprite's anchor point
    bunny.anchor.set(0.5);

    // Move the sprite to the center of the screen
    bunny.x = app.screen.width / 2;
    bunny.y = app.screen.height / 2;

    app.stage.addChild(bunny);

    // Listen for animate update
    app.ticker.add((delta) => {
      // Just for fun, let's rotate Mr. Rabbit a little
      // Delta is 1 if running at 100% performance
      // Creates frame-independent transformation
      bunny.rotation += 0.1 * delta;
    });
  }, []);

  return <div id="pixi-container" />;
};

export default PixiCanvas;
