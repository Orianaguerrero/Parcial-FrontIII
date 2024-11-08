import styles from "./Card.module.css"

function Card({data}) {
  return (
    <div className={styles.card}>
      <h2>Hola {data.name}!</h2>
      <p>Sabemos que tu cantante favorito es {data.singer}.</p>
      <p>Y tú canción favorita es {data.song}.</p>
    </div>
  );
}

export default Card;
