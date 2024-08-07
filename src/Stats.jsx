export default function Stats({
  numberOfWords,
  numberOfCharacters,
  instaCharactersLeft,
  facebookCharactersLeft,
}) {
  return (
    <section className="stats">
      <Stat number={numberOfWords} label="Words" />
      <Stat number={numberOfCharacters} label="Characters" />
      <Stat number={instaCharactersLeft} label="Instagram" />
      <Stat number={facebookCharactersLeft} label="Facebook" />
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <section className="stat">
      <span className="stat__number">{number}</span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
