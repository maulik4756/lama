"use client";
import React, { useState } from 'react'
import styles from './links.module.css'
import NavLink from '../navlink/page'

function Links() {
    const links = [
        {
            path: "/",
            title: "Homepage"
        },
        {
            path: "/about",
            title: "About"
        },
        {
            path: "/contact",
            title: "Contact"
        },
        {
            path: "/blog",
            title: "blog"
        },
    ]

    const [open, setOpen] = useState(false);

    const session = true;
    const isAdmin = true;


    return (

        <div className={styles.container}>
            <div className={styles.linkss} >{links.map((link => (
                <NavLink item={link} key={link.title} />
            )))}{
                    session ? (
                        <>
                            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
                            <button className={styles.logout}>Logout</button>
                        </>
                    ) : (
                        <NavLink item={{ title: "Login", path: "/login" }} />
                    )
                }
            </div>
            <button onClick={() => setOpen((prev) => !prev)} className={styles.menubtn} >Menu</button>
            {
                open && (
                    <div className={styles.mobilelinks}>
                        {links.map((link) => (
                            <NavLink item={link} key={link.title} />
                        ))}
                    </div>
                )
            }

        </div>
    )
}

export default Links