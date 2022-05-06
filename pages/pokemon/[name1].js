

export async function getServerSideProps(po) {

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${po.params.name1}`)
  const data = await res.json()


  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { po: data.abilities, po1: data.base_experience, po2: data.height, po3: data.weight, p4: data.forms[0].name }, // will be passed to the page component as props
  }
}


const Pokemons1 = ({ po, po1, po2, po3, p4 }) => {

  return (
    <div>
      <div>
        <h3>Name : {p4}</h3>
        <h3>Abilities :</h3>
        {po.map(pokemon => (
          <div key={pokemon.id}>

            <h3> {pokemon.ability.name}</h3>


          </div>
        ))}
      </div>
      <h3> Base_experience : {po1}</h3>
      <h3> Height : {po2}</h3>
      <h3>Weight : {po3}</h3>
    </div>
  );
}

export default Pokemons1;