import styles from"./styles.module.scss";
import { Celebrity } from "../../../types/CelebritiesPageTypes.type";



 interface Props{
    index:number;
    data:Celebrity;
}
export default function Box ({data,index}:Props) {
    <main>
        <div className={styles.box}>
            <img src={"http://localhost:3001" + data.image}/>
            <p>{data.name} + {data.notableWorks}</p>
            <div className={styles.description}>{data.description}</div>
        </div>
 </main>

        return <main/>;
    }
    

  
