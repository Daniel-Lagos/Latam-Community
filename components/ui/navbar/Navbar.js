import Link from "next/link";
import {mdiControllerClassic, mdiGamepad} from "@mdi/js";

import styles from './Navbar.module.css';
import Icon from "@mdi/react";

let Navbar = () => {
    let control = <Icon
        size={1}
        path={mdiGamepad}
        color={'#f0f3bd'}
    />;

    return (
        <div className={styles.navbar}>
            <div className={styles.elements}>
                <div className={styles.title}>
                    <Link href={'/'}>
                        <a className={styles.text}>
                            <span>🎮 Comunidad LATAM 🎮</span>
                        </a>
                    </Link>
                </div>
                <div className={styles.how}>
                    <Link href={'/'}>
                        <a className={styles.text}>
                            <span> ¿Como unirse? </span>
                        </a>
                    </Link>
                </div>
                <div className={styles.about}>
                    <Link href={'/'}>
                        <a className={styles.text}>
                            <span> Sobre nosotros </span>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Navbar;