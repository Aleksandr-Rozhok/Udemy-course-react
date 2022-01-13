import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import AddForm from '../add-form/add-form'


import './app.css';

const data = [
    { name: 'Aleksandr', salary: 430, increase: true, id: 1 },
    { name: 'Andrey', salary: 220, increase: false, id: 2 },
    { name: 'Viktoria', salary: 320, increase: false, id: 3 },
    { name: 'Tatiana', salary: 1200, increase: true, id: 4 },
]

const App = () => {
    return (
        <div className="App">
            <AppInfo />
            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            <EmployeesList data={data} />
            <AddForm />
        </div>
    )
}

export default App;