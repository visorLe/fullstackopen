const Person = ({ person }) => <p>{person.name}</p>

const NumbersList = ({ persons }) =>
    persons.map(person =>
        <Person key={person.name} person={person} />
    )

export default NumbersList
