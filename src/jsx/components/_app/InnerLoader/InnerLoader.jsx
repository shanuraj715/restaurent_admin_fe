import React from 'react'
import styles from '../../loader/loaderStyle.module.scss'

function InnerLoader() {
    return (
        <div className={styles.innerLoaderContainer}>
            <div className={styles.loader}></div>
        </div>
    )
}

export default InnerLoader
