/** @format */
"use client";
import React from "react";

import { RiLightbulbFlashFill, RiLightbulbFlashLine } from "react-icons/ri";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type Props = {};

export default function BulbSwitch({}: Props) {
  const [isBulbOn, setBulb] = useState(false);
  const [parent] = useAutoAnimate();

  function toggleBulb() {
    setBulb(!isBulbOn);
  }
  return (
    <div>
      <div ref={parent} className=" text-5xl border-2 w-fit rounded">
        {isBulbOn ? (
          <RiLightbulbFlashFill className="text-orange-400" />
        ) : (
          <RiLightbulbFlashLine />
        )}
      </div>

      <button onClick={toggleBulb} className="button mt-4">
        {isBulbOn ? "Off" : "On"}
      </button>
    </div>
  );
}
