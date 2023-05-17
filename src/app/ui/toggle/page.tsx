"use client";
import WithWrapper from "@/components/HOC/WithWrapper";
import Typography from "@/elements/Typography";
import Toggle from "@/elements/form/Toggle";

function Page() {
  return (
    <div>
      <Typography variant="h1" size="h3" decoration="lineBot" className={"font-medium mb-8"}>
        Toggle
      </Typography>
      <div className="flex flex-col items-start gap-4">
        <Toggle label="Toggle" />
      </div>
    </div>
  );
}

export default WithWrapper(Page);
