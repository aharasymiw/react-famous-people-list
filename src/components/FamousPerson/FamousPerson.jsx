function FamousPerson(props) {
    // props will be an obj with property "name"

    return (
        <li key={props.id}>{props.name} played {props.role}</li>
    )
}

export default FamousPerson;
