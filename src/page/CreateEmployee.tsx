// React router
import { Link } from 'react-router-dom';

// Component
import DateInput from '../components/DateInput';
import SelectOption from '../components/SelectOption';

// Scripts
import { selectStateData, selectDepartmentData } from '../scripts/selectData';

// Style
import './createEmployee.scss';

// For DateInput component
const dateInformations = {
    birthdayId: 'birthDate',
    startId: 'startDate'
}

// function handleSubmit (event) {
//     event.preventDefault();
//     const infoUser = new FormData(event.target);
//     console.log(infoUser.get("select-state"));
// }

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

                <label htmlFor={dateInformations.birthdayId} className="create-employee-label">
                    Date of Birth
                </label>
                {/* DateInput component */}
                <DateInput idInput={dateInformations.birthdayId} />

                <label htmlFor={dateInformations.startId} className="create-employee-label">
                    Start Date
                </label>
                {/* DateInput component */}
                <DateInput idInput={dateInformations.startId} />

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
                {/* SelectOption component */}
                <SelectOption selectName="select-state" selectId="state" optionData={selectStateData} />

                <label htmlFor="zipCode" className="create-employee-label">
                    Zip Code
                </label>
                <input type="number" id="zipCode" placeholder="Zip Code" className="create-employee-input" />

                <label htmlFor="department" className="create-employee-label">
                    Department
                </label>
                {/* SelectOption component */}
                <SelectOption selectName="select-department" selectId="department" optionData={selectDepartmentData} />

                <button type="submit" className="create-employee__form__button-submit create-employee-width-100 create-employee-cursor-pointer">
                    Save
                </button>
            </form>
        </section>
    );
}