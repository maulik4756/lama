import React from 'react'
import styles from "./postcard.module.css"
import Image from 'next/image'
import Link from 'next/link'


const Postcard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="https://images.unsplash.com/photo-1680775542464-c4140fb770e0?q=80&
                    w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx
                    8fGVufDB8fHx8fA%3D%3D" alt="hello" fill className={styles.img} />
                </div>
                <span className={styles.date}>01-05-2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>The Girl</h1>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sint explicabo non deserunt tempora itaque temporibus soluta velit minus quasi id voluptas, animi dolorem. Necessitatibus non veritatis cumque unde labore.</p>
                <Link className={styles.link} href={`/blog/post`}>READ MORE</Link>
            </div>
        </div>
    )
}

export default Postcard