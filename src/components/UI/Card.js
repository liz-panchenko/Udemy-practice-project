import styles from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={`${styles.Card} ${props.className}`}>{props.children}</div>
  );
}
