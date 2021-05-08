import Link from "next/link";

import styles from './Navbar.module.css';

const Pages = (props) => {
    return (
        <Link href={props.urlName}>
            <a>
                {props.text}
            </a>
        </Link>
    );
}

const Navbar = () => {

    let title=<Pages urlName={'/'} text={'COMUNIDAD LATAM'}/>;

    let how=<Pages urlName={'/how'} text={'¿Como unirse?'}/>;

    let about=<Pages urlName={'/about'} text={'Sobre nosotros'}/>;

    return (
        <div className={styles.navbar}>
            <div className={styles.content}>
                <div className={styles.title}>
                    {title}
                </div>
                <div className={styles.two}>
                    {how}
                </div>
                <div className={styles.two}>
                    {about}
                </div>
                <div className={styles.two}>
                    {about}
                </div>
                <div className={styles.two}>
                    {about}
                </div>
                <div className={styles.two}>
                    {about}
                </div>
            </div>
        </div>
    );
}
export default Navbar;