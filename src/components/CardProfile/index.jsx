import Title from "../Title";
import ProfileSection from "../ProfileSection";
import styles from "./styles.module.css";
import Avatar from "../Avatar";

export default function CardProfile(props){
    return(
        <div className={styles.card}>
            <div className={styles.upperContainer}>
                <Avatar img={props.img} name={props.name}/>
            </div>
            <div className={styles.lowerContainer}>
                <Title nome={props.name}/>
                <ProfileSection>{props.bio}</ProfileSection>
                <ProfileSection>{props.phone}</ProfileSection>
                <ProfileSection>{props.email}</ProfileSection>
                {props.children}
            </div>
        </div>
    )
}