import styles from './styles.module.css'

export default function LinkButton(props){
    return(
        <a className={styles.wrapper} href={props.link} target='_blank'>{props.nameBtn}</a>
    )
}