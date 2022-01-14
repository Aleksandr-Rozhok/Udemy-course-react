import './employees-list.css';
import EmployeesListItem from '../employees-list-item/employees-list-item';

const EmployeesList = ({ data, deleteItem }) => {
    const element = data.map(item => {
        const { id, ...itemProps } = item
        return <EmployeesListItem key={id} {...itemProps} deleteItem={() => deleteItem(id)} />
    })

    return (
        <ul className="app-list list-group">
            {element}
        </ul>
    )
}

export default EmployeesList;