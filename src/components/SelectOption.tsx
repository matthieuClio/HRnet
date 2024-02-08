// Components
import Option from "./Option";

// Style
import './selectOption.scss';

export default function SelectOption (props: { 
    selectName: string,
    selectId: string,
    optionData: { name: string, abbreviation: string }[]
}) {
    const { selectName, selectId, optionData} = props;

    // Generate options based on optionData
    function displayOptions () {
        return (
            optionData.map((element, index) => (
                <Option key={`option-${index}`} abbreviation={element.abbreviation} name={element.name} />
            ))
        );
    }

    return (
        <select name={selectName} id={selectId} className="select-option">
            {displayOptions()}
        </select>
    );
}