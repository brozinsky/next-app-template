import React, {ChangeEvent , useRef, ReactNode} from "react";
import {useToggleState} from "@react-stately/toggle";
import {useCheckbox} from "@react-aria/checkbox";
import {VisuallyHidden} from "@react-aria/visually-hidden";
import {useFocusRing} from "@react-aria/focus";
import {mergeProps} from "@react-aria/utils";
import classNames from "clsx";

interface Props {
  children?: ReactNode;
  animationDraw?: boolean;
  animationSwipe?: boolean;
  isDisabled?: boolean;
  disabled?: boolean;
  defaultSelected?: boolean;
  defaultChecked?: boolean;
  state?: boolean;
  onChange: (isSelected: boolean) => void;
}

const Checkbox = ({animationDraw = false, animationSwipe = true, isDisabled, ...props}: Props) => {
  const state = useToggleState(props);
  const ref = useRef(null);
  const {inputProps} = useCheckbox(props, state, ref);
  const {focusProps, isFocusVisible} = useFocusRing();

  const checkboxClassName = classNames(
    "checkbox",
    state.isSelected ?? "checkbox--selected",
    isDisabled ? "border-gray-300" : isFocusVisible || state.isSelected ? "checkbox--selected" : "checkbox--empty",
    isFocusVisible ? "shadow-outline" : "",
  );

  const svgClassName = classNames("stroke-current w-3 h-3", !state.isSelected ? "translate-y-5" : "translate-y-0", animationSwipe ? "transition ease-in-out duration-150" : "");

  const labelClassName = classNames(isDisabled ? "checkbox__label--disabled" : "checkbox__label");

  return (
    <label className="flex items-center group h-fit w-fit">
      <VisuallyHidden>
        <input {...mergeProps(inputProps, focusProps)} disabled={isDisabled} ref={ref} />
      </VisuallyHidden>
      <div className={checkboxClassName} aria-hidden="true">
        <svg className={svgClassName} viewBox="0 0 18 18">
          <polyline
            points="1 9 7 14 15 4"
            fill="none"
            strokeWidth={3}
            strokeDasharray={22}
            strokeDashoffset={animationDraw ? (state.isSelected ? 44 : 66) : 0}
            style={{
              transition: "all 400ms",
            }}
          />
        </svg>
      </div>
      <span className={labelClassName}>{props.children}</span>
    </label>
  );
};
export default Checkbox;
