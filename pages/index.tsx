import {NextPageWithLayout} from "@pages/_app";
import {GlobalLayout} from "@components/layouts/page";
import {Landing} from "@components/pages";

const Home: NextPageWithLayout = () => {
    return (
        <Landing/>
    );
};

Home.getLayout = (page) => {
    return <GlobalLayout title="Landing">
        {page}
    </GlobalLayout>
}

export default Home;
