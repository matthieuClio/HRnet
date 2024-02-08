export default function Option (props: { abbreviation: string,  name: string}) {
    const { abbreviation, name } = props;

    return (
        <option value={abbreviation}>{name}</option>
    );
}