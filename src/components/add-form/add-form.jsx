import { Component } from 'react';

import './add-form.css';

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {

        const { name, salary } = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        onChange={this.onInputChange}
                        name="name"
                        value={name}
                        placeholder="Как его зовут?" />
                    <input type="number"
                        className="form-control new-post-label"
                        onChange={this.onInputChange}
                        name="salary"
                        value={salary}
                        placeholder="З/П в $?" />

                    <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default AddForm;