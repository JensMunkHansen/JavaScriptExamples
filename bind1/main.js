import { useEffect } from "react";
import useWasm from "./useWASM";
import Module from "./yourOutput";

interface YourOutputMethods {
  functionWithPointer: (
    firstArg: string,
  ) => number;
}

export const useYourOutput = () => {
  const module = useWasm<YourOutputMethods>(Module);

  useEffect(() => {
    if (module) {
      // do something, probably assign the output to some state and return it
      // or perform some operation and return the result
    }
  }, [module]);
  // return something
};
