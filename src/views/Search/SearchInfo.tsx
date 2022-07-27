import { useNavigate } from "react-router-dom";
import { Container } from 'components';
import InfoTable from 'views/InfoTable/InfoTable';
import {
    SearchText,
    SelectFilter,
    styleForm,
    ButtonSubmit,
    ButtonClear,
    Row
} from "./styles";

const SearchInfo = () => {
    
    let navigate = useNavigate();

    const handleChange = (value: string) => {
        navigate(`/${value}`);
    }

    return (
        <>
            <Container>
                <Row>
                    <form style={styleForm}>
                        <SearchText>
                            <input type="text" placeholder="procurar texto..." required />
                        </SearchText>
                        <SelectFilter onChange={(event) => handleChange(event.target.value)}>
                            <option>Formato</option>
                            <option value="list">Lista</option>
                            <option value="cards">Grid</option>
                        </SelectFilter>
                        <ButtonSubmit>
                            APLICAR
                        </ButtonSubmit>
                        <ButtonClear>
                            LIMPAR
                        </ButtonClear>
                    </form>
                    <InfoTable />
                </Row>
            </Container>
        </>
    )
}

export default SearchInfo;