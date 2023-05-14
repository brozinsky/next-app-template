"use client";
import WithWrapper from "@/components/HOC/WithWrapper";
import Typography from "@/elements/Typography";

function Toggle() {
  return (
    <div>
      <Typography variant="h1" size="h3" decoration="lineBot" className={"font-medium mb-8"}>
        Toggle
      </Typography>
      <div className="flex flex-col items-start gap-4">
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
        </label>
        <label className="toggle">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="h-6 bg-gray-200 rounded-full toggle__switch w-11 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="toggle__label">Toggle me</span>
        </label>
      </div>
    </div>
  );
}

export default WithWrapper(Toggle);
