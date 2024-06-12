import styles from"./styles.module.scss";
import { Celebrity } from "../../../types/CelebritiesPageTypes.type";



 interface Props{
    index:number;
    data:Celebrity;
}
export default function Box ({data,index}:Props) {
    return(
   <main>
        <div className={styles.box}>
            <div className={styles.imgContainer}>
                <img src={"http://localhost:3001" + data.image}/>
            </div>
            <div className={styles.innerDes}>
            <h2>{data.name} </h2>
            <h4>{data.notableWorks}</h4>
            <h5>{data.occupation}</h5>
            <div className={styles.description}>{data.description}</div>
            </div>
           
        </div>

        
 </main>
    )

         
    }
    

  
