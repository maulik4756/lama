import Image from "next/image";
import styles from "./home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.txtContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, blanditiis.
          Illo et placeat molestias quidem laborum exercitationem quod nesciunt,
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brand}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg} />

        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" className={styles.heroImg} fill />
      </div>
    </div>
  );
}
