import {NextPageWithLayout} from "@pages/_app";
import {AuthLayout} from "@components/layouts";
import {LoginForm} from "@components/pages";

const Index: NextPageWithLayout = () => {
    return (
        <>
            <LoginForm/>
        </>
    );
};

Index.getLayout = (page) => {
    return <AuthLayout title="Login">{page}</AuthLayout>;
};

export default Index;
