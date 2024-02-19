// React
import { useState } from 'react';

// React router
import { Link } from 'react-router-dom';

// React redux
import { useSelector, useDispatch } from 'react-redux';

// Component
import DateInput from '../components/DateInput';
import SelectOption from '../components/SelectOption';
import { CustomizedModal } from '@makabay/customizedmodal';

// Scripts
import { selectStateData, selectDepartmentData } from '../scripts/selectData';
import { update, create } from '../scripts/reduxToolkit/slice';

// Style
import './createEmployee.scss';

// For DateInput component
const dateInformations = {
    birthdayId: 'birthDate',
    startId: 'startDate',
    birthdayName: 'birthdatDate',
    startName: 'startDate'
}

// For CustomizedModal (props)
const closeButtonTextData = {
    closeButtonTextValue: 'Close',
    textNotificationValue: 'A user has been created!',
    confirmationTextValue: 'Understood'
};

export default function CreateEmployee () {
    const [modal, setModal] = useState<boolean>(false);
    const dispatch = useDispatch();
    const tableInfo = useSelector((state: {
        tableData: {
            id: number,
            firstName: string,
            lastName: string,
            startDate: string,
            department: string,
            birthDate: string,
            street: string,
            city: string,
            state: string,
            zipCode: number,
            firstAdd: boolean
        }[];
    }) => state.tableData);

    function handleSubmit (event: React.FormEvent<HTMLFormElement>) {
        // Cancel the submit form
        event.preventDefault();
    
        // Get form data
        const infoUser = new FormData(event.target as HTMLFormElement);
    
        // Define all user informations
        const firstName = infoUser.get("firstname");
        const lastName = infoUser.get("lastname");
        let dateOfBirth = String(infoUser.get("birthdatDate"));
        let startDate = String(infoUser.get("startDate"));
        const street = infoUser.get("street");
        const city = infoUser.get("city");
        const selectState = infoUser.get("select-state");
        const zipCode = infoUser.get("zip-code");
        const selectDepartment = infoUser.get("select-department");

        // Change format date
        if (startDate !== 'Invalid Date') {
            startDate = new Date(startDate).toLocaleDateString("fr");
        } else {
            startDate = '';
        }
        if (startDate !== 'Invalid Date') {
            dateOfBirth = new Date(dateOfBirth).toLocaleDateString("fr");
        } else {
            startDate = '';
        }
        
        const dataUser = {
            id: tableInfo.length+1,
            firstName: firstName,
            lastName : lastName,
            startDate: dateOfBirth && dateOfBirth,
            department: selectDepartment,
            birthDate: dateOfBirth && dateOfBirth,
            street: street,
            city: city,
            state: selectState,
            zipCode: zipCode,
            firstAdd: false
        }
    
        // Create a user
        if (tableInfo[0].firstAdd) {
            // Replace the initial data store
            dispatch(update(dataUser));
        } else {
            // Add data to the store
            dispatch(create(dataUser));
        }

        // Open modal
        change();
    }

    // Open modal
    function change () {
        setModal(!modal);
    }

    return (
        <>
            {/* He's in absolute position, better if it placed in top of the other components */}
            <CustomizedModal
                closeButtonText={closeButtonTextData.closeButtonTextValue} 
                textNotification={closeButtonTextData.textNotificationValue} 
                confirmationText={closeButtonTextData.confirmationTextValue} 
                modalState={modal}
                changeModalState={setModal}
            />

            <section className="create-employee">
                <h1 className="create-employee__primary-title">HRnet</h1>

                <Link to="list" className="create-employee__link">
                    View Current Employees
                </Link>

                <h2 className="create-employee__secondary-title">
                    Create Employee
                </h2>

                <form onSubmit={handleSubmit}className="create-employee__form">
                    <label htmlFor="firstname" className="create-employee-label">
                        First Name
                    </label>
                    <input type="text" name="firstname" id="firstname" placeholder="First Name" className="create-employee-input" />

                    <label htmlFor="lastname" className="create-employee-label">
                        Last Name
                    </label>
                    <input type="text" name="lastname" id="lastname" placeholder="Last Name" className="create-employee-input" />

                    <label htmlFor={dateInformations.birthdayId} className="create-employee-label">
                        Date of Birth
                    </label>
                    {/* DateInput component */}
                    <DateInput name={dateInformations.birthdayName} idInput={dateInformations.birthdayId} />

                    <label htmlFor={dateInformations.startId} className="create-employee-label">
                        Start Date
                    </label>
                    {/* DateInput component */}
                    <DateInput name={dateInformations.startName} idInput={dateInformations.startId} />

                    <h3 className="create-employee__form__tertiary-title">
                        Address :
                    </h3>

                    <label htmlFor="street" className="create-employee-label">
                        Street
                    </label>
                    <input type="text" name="street" id="street" placeholder="Street name" className="create-employee-input" />

                    <label htmlFor="city" className="create-employee-label">
                        City
                    </label>
                    <input type="text" name="city" id="city" placeholder="City" className="create-employee-input" />

                    <label htmlFor="state" className="create-employee-label">
                        State
                    </label>
                    {/* SelectOption component */}
                    <SelectOption selectName="select-state" selectId="state" optionData={selectStateData} />

                    <label htmlFor="zipCode" className="create-employee-label">
                        Zip Code
                    </label>
                    <input type="number" name="zip-code" id="zipCode" placeholder="Zip Code" className="create-employee-input" />

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
        </>
    );
}