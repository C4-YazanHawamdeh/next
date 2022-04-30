import Link from "next/link";

export const getServerSideProps = async () => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon`);
  const data = await res.json();
  // console.log("thisis"+data.results[0].name);
  return {
    props: { pokemons: data.results}
  }
}
const Pokemons = ({ pokemons }) => {
  return (
    <div>
      <h1>All Pokemons</h1>
      {pokemons.map(pokemon => (
        <div key={pokemon.id}>
          <a href={'pokemon/'+[pokemon.name]}>
            <h3>{pokemon.name}</h3>

            {/* <Link href={"localhost:3000/pokemon/[name]"}></Link> */}
          </a>
        </div>
      ))}
    </div>
  );
}  

export default Pokemons;