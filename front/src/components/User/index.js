import styles from './styles.module.scss'
import { FaGithub } from 'react-icons/fa';
import { useEffect, useState } from "react";

export function User() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const getUser = () => {
            fetch("http://localhost:5000/auth/login/success", {
                method: "GET",
                credentials: "include",
                headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true,
                },
            }).then((response) => {
                if (response.status === 200) return response.json();
                throw new Error("authentication has been failed!");
            }).then((resObject) => {
                setUser(resObject.user);
            }).catch((err) => {
                console.log(err);
            });
        };
        getUser();
    }, []);

    const github = () => {
        window.open("http://localhost:5000/auth/github", "_self")
    };

    const logout = () => {
        window.open("http://localhost:5000/auth/logout", "_self");
    };

    return (
        <div className={styles.container}>
                {user ? (
                    <div className={styles.header}>
                        <button className={styles.signInButton} onClick={logout}>
                            <FaGithub />
                            Logout
                        </button>
                        <div>
                            <img src={user.photos[0].value} alt={user.displayName} />
                            <p>{user.displayName}</p>
                        </div>
                    </div>
                ) : (
                    <div className={styles.header}>
                        <button className={styles.signInButton} onClick={github}>
                            <FaGithub />
                            Login
                        </button>
                        <div>
                            <img src={'../../../images/duck.png'} alt="user"/>
                            <p>Usuário</p>
                        </div>
                    </div>
                )}
            <div className={styles.timePeriod}>
                <button>Diário</button>
                <button>Semanal</button>
                <button>Mensal</button>
            </div>
        </div>
    )
}