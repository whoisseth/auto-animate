/** @format */

import BulbSwitch from "@/components/BulbSwitch";
import Dropdown from "@/components/Dropdown";
import DynamicList from "@/components/DynamicList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-8 flex flex-col gap-4 ">
      <Dropdown />
      <DynamicList />
      <BulbSwitch />
    </div>
  );
}
