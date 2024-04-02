import React from 'react'
import styles from "./blog.module.css"
import Postcard from '../../components/postcard/page'



function Blog() {
    return (
        <div className={styles.container}>
            <div className={styles.post}>
                <Postcard />
            </div>
            <div className={styles.post}>
                <Postcard />
            </div>
            <div className={styles.post}>
                <Postcard />
            </div>
            <div className={styles.post}>
                <Postcard />
            </div>

        </div>
    )
}

export default Blog