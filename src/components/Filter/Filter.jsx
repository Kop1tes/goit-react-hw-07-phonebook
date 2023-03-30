import { useDispatch } from "react-redux"
import { getVisibleContact } from "redux/filterSlice"
import { FilterInput, FilterLabel } from "./Filter.styled";

const Filter = () => {
    const dispatch = useDispatch();
    return (
        <>
            <FilterLabel>
                Find contatcs by name
                <FilterInput
                    type="text"
                    onChange={e => dispatch(getVisibleContact(e.target.value))}
                />
            </FilterLabel>
        </>
    );
};

export default Filter;