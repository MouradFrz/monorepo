import useLoginVM from "./Login.viewmodel";
import { useEffect } from "react";
type LoginPageProps = {
    realPath: string;
};

const Login: React.FC<React.PropsWithChildren<LoginPageProps>> = ({ realPath }) => {
    const { testFunction } = useLoginVM();
    useEffect(() => {
        testFunction();
    }, []);
    return <div data-test={"testdiv"}>{realPath}</div>;
};
export default Login;
