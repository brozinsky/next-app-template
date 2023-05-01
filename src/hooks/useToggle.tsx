import {useCallback, useState} from "react";

type UseToggleReturnType = [boolean, () => void];

const useToggle = (initialState: boolean = false): UseToggleReturnType => {
  // Initialize the state
  const [state, setState] = useState<boolean>(initialState);

  // Define and memorize toggler function in case we pass down the component,
  // This function change the boolean value to it's opposite value
  const toggle = useCallback(() => setState((state) => !state), []);

  return [state, toggle];
};

export default useToggle;
