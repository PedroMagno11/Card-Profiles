import styles from './styles.module.css'

export default function Title(props){
    return <h2 className={styles.title}>{props.nome}</h2>
}