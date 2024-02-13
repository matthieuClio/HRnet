// Style
import './dateInput.scss';

export default function DateInput (props: { name: string, idInput: string }) {
    const { name, idInput } = props;

    return (
        <>
            <input type="date" name={name} id={idInput} className="date-input" />
        </>
    );
}