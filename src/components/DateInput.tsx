// Style
import './dateInput.scss';

export default function DateInput (props: { textLabel: string, idInput: string }) {
    const { textLabel, idInput } = props;

    return (
        <>
            <label htmlFor={idInput} className="date-input-label">
                {textLabel}
            </label>
            <input type="date" id={idInput} className="date-input" />
        </>
    );
}