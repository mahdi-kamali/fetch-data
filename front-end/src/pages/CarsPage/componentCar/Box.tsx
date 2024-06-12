import styles from "./styles.module.scss";
import { Car } from "../../../types/CarsPageTypes.type";




interface Props {
  index: number;
  data: Car;
}



export default function Box ({data,index}:Props) {
    return(
      <main>
      <div className={styles.box}>
        <div className={styles.innerBox}>
      <h3>{data.brand },{ data.model} </h3>
      <h4>{data.year}</h4>
      </div>
      <div className={styles.description}>{data.description}</div>
    </div>
    </main>
    );
  
   
  

  


  
  
}



//      <h4>{data.model}</h4>
