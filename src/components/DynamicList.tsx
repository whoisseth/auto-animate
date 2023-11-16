/** @format */
"use client";
import React from "react";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type Props = {};

export default function DynamicList({}: Props) {
  const [items, setItems] = useState([0, 1, 2]);

  const [isEnabled, setIsEnabled] = useState(true);

  const [parent, setAnimationState] = useAutoAnimate();

  function toggleAnimation() {
    setAnimationState(!isEnabled);
    setIsEnabled(!isEnabled);
  }

  function add() {
    setItems([...items, items.length]);
  }

  return (
    <div>
      <ul ref={parent}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={add} className="button">
        Add nubmer
      </button>
      <button className="button ml-4" onClick={toggleAnimation}>
        {isEnabled ? "🚫 Disable" : "✅ Enable"} animations
      </button>
    </div>
  );
}
