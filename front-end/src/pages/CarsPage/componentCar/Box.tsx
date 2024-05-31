import styles from "./styles.module.scss";
import { Car } from "../../../types/CarsPageTypes.type";




interface Props {
  index: number;
  data: Car;
}



export default function Box ({data,index}:Props) {

  const LargeBox = ()=> (
    <div className={styles.largeBox}>
      <p>{data.brand}+ {data.model} + {data.year} </p>
      <div className={styles.description}>{data.description}</div>
    </div>
  );

  const SmallBox = ()=> (
    <div className={styles.smallBox}>
    <p>
    {data.brand}+ {data.model} + {data.year}</p>
    <div className={styles.description}>{data.description}</div>
    </div>

  );


  if (index === 4) return <LargeBox />;
    else return <SmallBox/>;
  
}