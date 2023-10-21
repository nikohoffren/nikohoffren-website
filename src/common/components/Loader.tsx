import { RefreshIcon } from "@heroicons/react/outline";
import React from "react";

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-full">
      <RefreshIcon className="animate-spin h-8 w-8 text-gray-500" />
    </div>
  );
}
