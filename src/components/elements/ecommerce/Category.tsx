import Button from "@/elements/buttons/Button";

interface Props {
  content: string;
  image: string;
  icon?: string;
}

const Category = ({content, image, icon}: Props) => {
  return (
    <div className="relative category">
      <div className="category__overflow"></div>
      <div className="absolute top-0 left-0 z-10 flex flex-col items-center justify-end w-full h-full px-24">
        <div className="flex flex-col items-center gap-2 category__button">
          {icon ? <img className="filter-white" width={50} height={50} src={icon} alt="" /> : null}
          <Button variant="primary" color="white" rounded="none" href="#">
            Show
          </Button>
        </div>
        <h3 className="mb-6 text-4xl text-center text-white uppercase">{content}</h3>
      </div>
      <div className="">
        <img width={732} height={482} src={image} alt={content} />
      </div>
    </div>
  );
};

export default Category;
