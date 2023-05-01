"use client";
import WithWrapper from "@/components/HOC/WithWrapper";
import Typography from "@/elements/Typography";

function Checkbox() {
  return (
    <div>
      <Typography variant="h1" size="h3" decoration="lineBot" className={"font-medium mb-8"}>
        Hello
      </Typography>
      <Typography variant="h3" center={true} decoration="none" size="sm" className="text-red-400">
        Checkbox
      </Typography>
    </div>
  );
}

export default WithWrapper(Checkbox);
