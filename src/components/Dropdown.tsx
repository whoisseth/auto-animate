/** @format */
"use client";

import React, { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

type Props = {};

export default function Dropdown({}: Props) {
  const [show, setShow] = useState(false);
  const [animationParent] = useAutoAnimate();

  function togglePara() {
    setShow(!show);
  }
  return (
    <div ref={animationParent} className="border-2 rounded max-w-6xl p-2">
      <button
        onClick={togglePara}
        className="  button flex  items-center gap-1 "
      >
        Click me to open! {show ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>
      {show && (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
          quia a eligendi, autem et debitis ea voluptates error magnam dolor
          quod est veniam eos ratione deleniti praesentium cupiditate culpa iste
          repellat. Numquam, accusantium. Officia obcaecati, perferendis ipsum
          labore voluptatibus, quia cum possimus id hic provident incidunt magni
          autem quos error.
        </p>
      )}
    </div>
  );
}
