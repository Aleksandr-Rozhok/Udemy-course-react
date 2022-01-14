import { Component } from 'react'

import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import AddForm from '../add-form/add-form'

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'Aleksandr', salary: 430, increase: true, id: 1 },
                { name: 'Andrey', salary: 220, increase: false, id: 2 },
                { name: 'Viktoria', salary: 320, increase: false, id: 3 },
                { name: 'Tatiana', salary: 1200, increase: true, id: 4 },
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    render() {
        return (
            <div className="App">
                <AppInfo />
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <EmployeesList data={this.state.data} deleteItem={this.deleteItem} />
                <AddForm />
            </div>
        )
    }
}

export default App;