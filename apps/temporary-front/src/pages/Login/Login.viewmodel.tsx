import { useCallback } from "react";

export type LoginVM = { testFunction: () => void };
const useLoginVM = (): LoginVM => {
    const test = "";
    const anything = () => {};
    const testFunction = useCallback(() => {
        console.log("I am in a callback");
        console.log(test);
    }, []);
    return { testFunction };
};
export default useLoginVM;
