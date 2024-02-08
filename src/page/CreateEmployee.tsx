// React router
import { Link } from 'react-router-dom';

// Component
import DateInput from '../components/DateInput';

// Style
import './createEmployee.scss';

// For DateInput component
const dateInformations = {

    birthday: {
        id: 'birthDate',
        label: 'Date of Birth'
    },

    start: {
        id: 'startDate',
        label: 'Start Date'
    }
}

export default function CreateEmployee () {
    return (
        <section className="create-employee">
            <h1 className="create-employee__primary-title">HRnet</h1>

            <Link to="list" className="create-employee__link">
                View Current Employees
            </Link>

            <h2 className="create-employee__secondary-title">
                Create Employee
            </h2>

            <form className="create-employee__form">
                <label htmlFor="firstname" className="create-employee-label">
                    First Name
                </label>
                <input type="text" id="firstname" placeholder="First Name" className="create-employee-input" />

                <label htmlFor="lastname" className="create-employee-label">
                    Last Name
                </label>
                <input type="text" id="lastname" placeholder="Last Name" className="create-employee-input" />

                {/* Date component */}
                <DateInput textLabel={dateInformations.birthday.label} idInput={dateInformations.birthday.id} />
                <DateInput textLabel={dateInformations.start.label} idInput={dateInformations.start.id} />

                {/* <label htmlFor="startDate" className="create-employee-label">
                    Start Date
                </label>
                <input type="date" id="startDate" className="create-employee-input" /> */}

                <h3 className="create-employee__form__tertiary-title">
                    Address :
                </h3>

                <label htmlFor="street" className="create-employee-label">
                    Street
                </label>
                <input type="text" id="street" placeholder="Street name" className="create-employee-input" />

                <label htmlFor="city" className="create-employee-label">
                    City
                </label>
                <input type="text" id="city" placeholder="City" className="create-employee-input" />

                <label htmlFor="state" className="create-employee-label">
                    State
                </label>
                <select id="state" className="create-employee-input create-employee-width-100 create-employee-cursor-pointer">
                    <option>State 1</option>
                </select>
                
                <label htmlFor="zipCode" className="create-employee-label">
                    Zip Code
                </label>
                <input type="number" id="zipCode" placeholder="Zip Code" className="create-employee-input" />

                <label htmlFor="department" className="create-employee-label">
                    Department
                </label>
                <select id="department" className="create-employee-input create-employee-width-100 create-employee-cursor-pointer">
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>

                <button type="submit" className="create-employee__form__button-submit create-employee-width-100 create-employee-cursor-pointer">
                    Save
                </button>
            </form>
        </section>
    );
}