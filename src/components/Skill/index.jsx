import styles from './styles.module.css'

export default function Skill(props){
    return(
    <div className={styles.wrapper}>
        <img src={props.image} alt={props.alt}/>
    </div>
    )
}