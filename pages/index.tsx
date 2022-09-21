import {NextPageWithLayout} from "@pages/_app";
import {GlobalLayout} from "@components/layouts/page";

const Home: NextPageWithLayout = () => {
    return (
        <main className="h-full">
        </main>
    );
};

Home.getLayout = (page) => {
    return <GlobalLayout title="Landing">
        {page}
    </GlobalLayout>
}

export default Home;
