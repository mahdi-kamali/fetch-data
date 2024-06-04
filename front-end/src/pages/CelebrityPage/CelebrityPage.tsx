import styles from "./styles.module.scss";
import { Celebrity } from "../../types/CelebritiesPageTypes.type";
import { useState, useEffect } from 'react';
import axios from "axios";
import Box from "./components/Box";


export default function CelebrityPage() {

    const [celebrities, setCelebrities] = useState<Celebrity[]>([]);


    useEffect(() => {
        const celebrityUrl = "http://localhost:3001/celebrities";
        axios.get(celebrityUrl)
            .then((response) => {
                const data: Celebrity[] = response.data;
                setCelebrities(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <main className={styles.pageCelebrity}>
            {celebrities.map((celebrity, index) => {
                return <Box index={index} data={celebrity} />;
            })
            }

        </main>
    );
}