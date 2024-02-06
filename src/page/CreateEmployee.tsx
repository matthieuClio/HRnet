import './createEmployee.scss';

export default function CreateEmployee () {
    return (
        <section className="create-employee">
            <h1 className="create-employee__primary-title">HRnet</h1>
            <a className="create-employee__link">
                View Current Employees
            </a>
            <h2 className="create-employee__secondary-title">
                Create Employee
            </h2>

            <form className="create-employee__form">
                <label className="create-employee-label">
                    First Name
                </label>
                <input type="text" placeholder="First Name" className="create-employee-input" />

                <label className="create-employee-label">
                    Last Name
                </label>
                <input type="text" placeholder="Last Name" className="create-employee-input" />

                <label className="create-employee-label">
                    Date of Birth
                </label>
                <input type="date" className="create-employee-input" />

                <label className="create-employee-label">
                    Start Date
                </label>
                <input type="date" className="create-employee-input" />

                <h3 className="create-employee__form__tertiary-title">
                    Address :
                </h3>

                <label className="create-employee-label">
                    Street
                </label>
                <input type="text" placeholder="Street name" className="create-employee-input" />

                <label className="create-employee-label">
                    City
                </label>
                <input type="text" placeholder="City" className="create-employee-input" />

                <label className="create-employee-label">
                    State
                </label>
                <select className="create-employee-input create-employee-width-100 create-employee-cursor-pointer">
                    <option>Numéro 1</option>
                </select>
                
                <label className="create-employee-label">
                    Zip Code
                </label>
                <input type="number" placeholder="Zip Code" className="create-employee-input" />

                <label className="create-employee-label">
                    Department
                </label>
                <select className="create-employee-input create-employee-width-100 create-employee-cursor-pointer">
                    <option>Numéro 1</option>
                </select>

                <button type="submit" className="create-employee__form__button-submit create-employee-width-100 create-employee-cursor-pointer">
                    Save
                </button>
            </form>
        </section>
    );
}