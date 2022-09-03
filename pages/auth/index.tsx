import {NextPageWithLayout} from "@pages/_app";
import {AuthLayout} from "@components/layouts";

const Index: NextPageWithLayout = () => {
    return <div>
        Auth Page
    </div>
}

Index.getLayout = (page) => {
    return <AuthLayout>
        {page}
    </AuthLayout>
}

export default Index