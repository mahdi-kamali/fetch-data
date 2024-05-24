import { Animal } from "../../../../types/AnimalsPageTypes.type";

import styles from "./styles.module.scss";

interface Props {
  index: number;
  data: Animal;
}

export default function Box({ data, index }: Props) {
  const LargeBox = () => (
    <div className={styles.largBox}>
      <img src={"http://localhost:3001" + data.image} />
      <p>{data.name}</p>
      <div className={styles.description}>{data.description}</div>
    </div>
  );

  const NormalBox = () => (
    <div className={styles.normalBox}>
      <img src={"http://localhost:3001" + data.image} />
      <p>{data.name}</p>
      <div className={styles.description}>{data.description}</div>
    </div>
  );

  if (index === 4) return <LargeBox />;
  else return <NormalBox />;
}
