import Image from "next/image";
import styles from "./backgroundImage.module.css";

interface BackgroundImage {
  path: string;
}

export default function BackgroundImage({ path }: BackgroundImage) {
  return (
    <div className={styles.pageBackground}>
      <Image
        src={path}
        alt="background image of a dark cinema"
        fill
        loading="eager"
        className={styles.pageBackgroundImage}
      />
      <div className={styles.pageBackgroundOverlay} />
    </div>
  );
}
