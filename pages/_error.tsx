import {NextPageWithLayout} from "@pages/_app";
import {GlobalLayout} from "@components/layouts";


const ErrorPage: NextPageWithLayout = (props: any): JSX.Element => {
    return <div className="h-full flex flex-col justify-center">
        <p>
            {props.statusCode
                ? `An error ${props.statusCode} occurred on server`
                : 'An error occurred on client'}
        </p>
    </div>
};

ErrorPage.getLayout = (page) => {
    return <GlobalLayout title="Unable to load Page">{page}</GlobalLayout>;
};

ErrorPage.getInitialProps = ({res, err}) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return {statusCode}
}

export default ErrorPage