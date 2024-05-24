import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import axios from "axios";
import { Animal } from "../../types/AnimalsPageTypes.type";
import Box from "./components/Box/Box";

export default function AnimalsPage() {
  const [animals, setAnimals] = useState<Animal[]>([]);

  useEffect(() => {
    const animalsUrl = "http://localhost:3001/animals/";
    axios
      .get(animalsUrl)
      .then((response) => {
        const data: Animal[] = response.data;
        setAnimals(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className={styles.page}>
      {animals.map((animal, index) => {
        return <Box index={index} data={animal} />;
      })}
    </main>
  );
}
