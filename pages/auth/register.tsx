import {NextPageWithLayout} from "@pages/_app";
import {RegisterForm} from "@components/pages";
import {AuthLayout} from "@components/layouts";

const Register: NextPageWithLayout = () => {
    return (
        <>
            <RegisterForm/>
        </>
    );
};

Register.getLayout = (page) => {
    return <AuthLayout title="Create Account">{page}</AuthLayout>;
};

export default Register;
