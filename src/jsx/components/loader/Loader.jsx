import React from 'react'
import styles from './loaderStyle.module.scss'

function Loader() {
    return (
        <div className={styles.loaderContainer}>
            <div className={styles.loader}></div>
        </div>
    )
}

export default Loader
