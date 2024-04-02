import React from 'react'
import styles from "./single.module.css"
import Image from 'next/image'

function Title() {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="https://images.unsplash.com/photo-1680775542464-c4140fb770e0?q=80&
                    w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx
                    8fGVufDB8fHx8fA%3D%3D" alt="hello" fill className={styles.img} />
            </div>
            <div className={styles.txtContainer}>
                <h1 className={styles.title}>The Girl</h1>
                <div className={styles.detail}>
                    <Image src="/noavatar.png" alt="" fill className={styles.avtar} />
                    <div className={styles.detailtxt}>
                        <span className={styles.detailtitle}>Author</span>
                        <span className={styles.detailvalue}>Maulik Parmar</span>
                    </div>
                    <div className={styles.detailtxt}>
                        <span className={styles.detailtitle}>Published</span>
                        <span className={styles.detailvalue}>15-03-2020</span>
                    </div>
                </div>
                <div className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, dignissimos laborum tenetur nostrum quis suscipit alias recusandae provident? Molestiae, soluta!
                </div>
            </div>
        </div>
    )
}

export default Title