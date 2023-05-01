"use client";
import WithWrapper from "@/components/HOC/WithWrapper";
import CategoryTile from "@/components/elements/CategoryTile";

const CategoriesPage = () => {
  return (
    <>
      <div className="flex flex-row justify-between w-full h-full max-w-5xl space-x-4">
        <CategoryTile href="#" image={"https://picsum.photos/id/149/240/190?grayscale"} title={"Button"} info={"Lorem ipsum dolor sit amet"} />
        <CategoryTile href="#" image={"https://picsum.photos/id/149/240/190?grayscale"} title={"Input"} info={"Lorem ipsum dolor sit amet"} />
        <CategoryTile href="#" image={"https://picsum.photos/id/149/240/190?grayscale"} title={"Toggle"} info={"Lorem ipsum dolor sit amet"} />
        <CategoryTile href="#" image={"https://picsum.photos/id/149/240/190?grayscale"} title={"Checkbox"} info={"Lorem ipsum dolor sit amet"} />
      </div>
    </>
  );
};

export default WithWrapper(CategoriesPage);
