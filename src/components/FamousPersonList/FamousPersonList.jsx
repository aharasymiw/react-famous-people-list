import FamousPerson from '../FamousPerson/FamousPerson';

function FamousPersonList(props) {

    return (
        <ul>
            {
                props.famousPeopleArray.map((famousPerson) => {
                    return (
                        <FamousPerson id={famousPerson.id} name={famousPerson.name} role={famousPerson.role} />
                    )
                })
            }
        </ul>

    )
}

export default FamousPersonList;
