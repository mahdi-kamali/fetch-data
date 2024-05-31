import styles from "./styles.module.scss";
import { useState, useEffect } from "react";
import { Car } from "../../types/CarsPageTypes.type";
import axios from 'axios';
import Box from "./componentCar/Box";



export default function CarsPage () {
    const [cars,setCars] = useState<Car[]>([]);

    useEffect(()=>{
        const carsUrl = "http://localhost:3001/cars/";
        axios.get(carsUrl)
        .then((response)=>{
            const data:Car[] = response.data
            setCars(data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[]);
  return (
    <main className={styles.carpage}>
        {cars.map((car,index)=>{
            return <Box  index={index} data={car}/>;
            
        })}       
    </main>
  );
}