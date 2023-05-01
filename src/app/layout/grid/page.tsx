"use client";
import WithWrapper from "@/components/HOC/WithWrapper";

const GridPage = () => {
  return (
    <>
      <div className="grid w-full h-full grid-cols-2">GridPage</div>
    </>
  );
};

export default WithWrapper(GridPage);
