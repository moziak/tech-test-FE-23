import { InputContainer, InputField} from "./styles/form.styled";

interface SearchInputProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>)=> void
}
  
const SearchInputComponent: React.FC<SearchInputProps> = ({handleChange}) => {
    
    return (
        <InputContainer>
            <InputField type="text" placeholder="Search username ..." onChange={handleChange}/>
        </InputContainer>
    );
};

export default SearchInputComponent;