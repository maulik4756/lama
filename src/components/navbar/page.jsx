import React from 'react'
import Links from './links/page'
import styles from './nav.module.css'
import Link from 'next/link'

function Navbar() {
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>Logo</Link>
            <Links />
        </div>
    )
}

export default Navbar