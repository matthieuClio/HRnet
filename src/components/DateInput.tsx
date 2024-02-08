// Style
import './dateInput.scss';

export default function DateInput (props: { idInput: string }) {
    const { idInput } = props;

    return (
        <>
            <input type="date" id={idInput} className="date-input" />
        </>
    );
}