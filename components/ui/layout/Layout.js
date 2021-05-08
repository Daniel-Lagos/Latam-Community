import Head from 'next/head';
import Navbar from "../navbar/Navbar";

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>{props.title}</title>
                <link rel="icon" href="icon"/>
            </Head>
            <Navbar/>
            <div>
                {props.children}
            </div>
        </div>
    )
}
export default Layout;