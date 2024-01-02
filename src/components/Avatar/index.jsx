import styles from './styles.module.css';

export default function Avatar(props){
    return(
        <div className={styles.imageContainer}>
            <img src={props.img} alt={props.name} />
        </div>
    )
}