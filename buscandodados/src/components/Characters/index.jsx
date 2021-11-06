import "./styles.css";
import CharCard from "../CharCard";

const Characters = ({ chars }) => {
  return (
    <>
      <h1>Meus Personagens</h1>

      <div className="container">
        {chars.map((char) => (
          <CharCard key={char.id} char={char} />
        ))}
      </div>
    </>
  );
};

export default Characters;
