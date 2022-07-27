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
    return (
        <>
            <Container>
                <Row>
                    <form style={styleForm}>
                        <SearchText>
                            <input type="text" placeholder="procurar texto..." required />
                        </SearchText>
                        <SelectFilter>
                            <option>Formato</option>
                            <option value="list">Lista</option>
                            <option value="grid">Grid</option>
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