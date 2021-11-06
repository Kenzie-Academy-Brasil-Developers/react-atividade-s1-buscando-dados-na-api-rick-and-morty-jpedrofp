import "./styles.css";

function CharCard({ char: { name, image, status, species } }) {
  return (
    <>
      <div className="card">
        <img className="picture" src={image} alt={name}></img>
        <label>
          <h4>{name}</h4>
        </label>
        <span>{species}</span>
        {status === "Alive" ? (
          <div className="aliveChars"></div>
        ) : (
          <div className="deadChars"></div>
        )}
      </div>
    </>
  );
}

export default CharCard;
