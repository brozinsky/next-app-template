"use client";
import WithWrapper from "@/components/HOC/WithWrapper";
import Typography from "@/elements/Typography";
import Checkbox from '@/components/elements/form/Checkbox';

function Page() {
  return (
    <div>
      <Typography variant="h1" size="h3" decoration="lineBot" className={"font-medium mb-8"}>
        Inputs
      </Typography>
      <div className="mt-10">
        <Typography variant="h2" size="h5" decoration="none" className={"mb-4"}>
          Variants
        </Typography>
        <div className="flex flex-col items-start gap-4">
          <Checkbox ></Checkbox>
          <Checkbox >Default</Checkbox>
          <Checkbox defaultSelected>Default selected</Checkbox>
          <Checkbox isDisabled>Disabled</Checkbox>
        </div>
      </div>
    </div>
  );
}

export default WithWrapper(Page);
