import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';

const Users = ({ data }) => {
    const [width, setWidth] = useState(typeof window !== "undefined" && window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        if (typeof window !== "undefined") {
            window && window.addEventListener('resize', handleWindowSizeChange);
            return () => {
                window && window.removeEventListener('resize', handleWindowSizeChange);
            }
        }

    }, []);

    const isMobile = width <= 768;

    return (
        <>
            <section className={styles.usersSection}>
                <h4>
                    our users
                </h4>
                <div>
                    {!isMobile && <div className={styles.titles}>
                        <div>photo</div>
                        <div>name</div>
                        <div>status</div>
                        <div>registration</div>
                        <div>age</div>
                        <div>action</div>
                    </div>
                    }
                    {data.map(user =>
                        <div className={styles.userInfo}>
                            <div><img src={user.photo} /></div>
                            <div>{user.name}</div>
                            <div>{user.online ? 'offline' : 'online'}</div>
                            <div>{user.registration}</div>
                            <div>{user.age}</div>
                            <div>
                                {!user.online ?
                                    <button className={styles.online}>Chat</button>
                                    :
                                    <button>Chat</button>}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}

export default Users;