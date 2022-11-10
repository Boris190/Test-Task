import React, { useState } from 'react';
import styles from './styles.module.scss';

const MainContent = ({ data }) => {

    return (
        <>
            <div className={styles.mainContent}>
                <div className={styles.aboutVideo}>
                    <h3>
                        {data?.embed}
                    </h3>
                    <span>
                        {data?.text}
                    </span>
                    <a href={data?.link} target="_blank">
                        {data?.link}
                    </a>
                </div>
                <div class={styles.video}>
                    <iframe width="480px" height="270px"
                        //  API URL NEED TO BE EMBED LIKE THIS NOT WATCH
                        src="https://www.youtube.com/embed/RK1K2bCg4J8">
                    </iframe>
                </div>
            </div>
        </>
    )
}

export default MainContent;