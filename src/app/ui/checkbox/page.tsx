"use client";
import WithWrapper from "@/components/HOC/WithWrapper";
import Typography from "@/elements/Typography";
import Checkbox from '@/components/elements/form/Checkbox';
import {useState} from 'react'

function Page() {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(true);
  const [checked4, setChecked4] = useState(false);
  return (
    <div>
      <Typography variant="h1" size="h3" decoration="lineBot" className={"font-medium mb-8"}>
        Inputs
      </Typography>
      <div className="mt-10">
        <Typography variant="h2" size="h5" decoration="none" className={"mb-4"}>
          Variants
        </Typography>
        <div className="grid items-start grid-cols-2 gap-x-10 gap-y-2">
            <Checkbox state={checked1} onChange={setChecked1}></Checkbox>
            <div>{`state is ${checked1}`}</div>
            <Checkbox state={checked2} onChange={setChecked2}>Default</Checkbox>
            <div>{`state is ${checked2}`}</div>
            <Checkbox state={checked3} onChange={setChecked3} defaultSelected>Default selected</Checkbox>
            <div>{`state is ${checked3}`}</div>
            <Checkbox state={checked4} onChange={setChecked4} isDisabled>Disabled</Checkbox>
            <div>{`state is ${checked4}`}</div>
        </div>
      </div>
    </div>
  );
}

export default WithWrapper(Page);
