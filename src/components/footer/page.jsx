import React from 'react'
import styles from "./footer.module.css"

function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Lamadev</div>
            <div className={styles.text}>Lama creative thoughts agency All rights Reserved </div>
        </div>
    )
}

export default Footer