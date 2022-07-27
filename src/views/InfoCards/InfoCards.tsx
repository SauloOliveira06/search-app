import { BottomDate, Card, Description, Title } from "./styles";
import { Container } from "components";
import { useRecoilValue } from "recoil";
import searchQuery from "services/getQueryAPI";
import { IDataInfo } from "interfaces/IDataInfo";
import {
    ButtonClear,
    ButtonSubmit,
    Row,
    SearchText,
    SelectFilter,
    styleForm
} from "views/Search/styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const InfoCards = () => {
    const dataCards = useRecoilValue(searchQuery);
    const [searchInput, setSearchInput] = useState('');
    const [filter, setFilter] = useState([]);

    let navigate = useNavigate();

    const handleChange = (value: string) => {
        navigate(`/${value}`);
    }

    const searchItems = (searchInput: any) => {
        setSearchInput(searchInput);
        if (searchInput !== '') {
            const filterData = dataCards.map((items: string) => {
                return Object.values(items)
                    .join('')
                    .toLowerCase()
                    .includes(searchInput.toString())
            })
            setFilter(filterData);
        } else {
            setFilter(dataCards);
        }
    }

    const filterCards = dataCards.filter((items: string) => {
        return Object.values(items)
            .join('')
            .toLowerCase()
            .includes(searchInput.toString())
    });

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setSearchInput(searchInput)
        const filterData = dataCards.filter((items: string) => {
            return Object.values(items)
                .join('')
                .toLowerCase()
                .includes(searchInput.toString())
        })
        setFilter(filterData)
        alert(`valor buscado: ${searchInput}`)
    }

    const resetButton = () => {
        setFilter(dataCards);
    }

    return (
        <>
            <Container>
                <Row>
                    <form style={styleForm} onSubmit={handleSubmit}>
                        <SearchText>
                            <input
                                type="text"
                                placeholder="procurar texto..."
                                onChange={(e) => searchItems(e.target.value)}
                                required
                            />
                        </SearchText>
                        <SelectFilter onChange={(event) => handleChange(event.target.value)}>
                            <option>Formato</option>
                            <option value="list">Lista</option>
                            <option value="cards">Grid</option>
                        </SelectFilter>
                        <ButtonSubmit type="submit">
                            APLICAR
                        </ButtonSubmit>
                        <ButtonClear type="reset" onClick={resetButton}>
                            LIMPAR
                        </ButtonClear>
                    </form>
                </Row>
                {
                    searchInput.length > 1 ? (
                        filter.map((card: IDataInfo) => {
                            return (
                                <>
                                    <Card key={card.id}>
                                        <Title>{card.title}</Title>
                                        <Description>{card.body}</Description>
                                        <BottomDate>{`${new Date()}`}</BottomDate>
                                    </Card>
                                </>
                            )
                        })
                    ) : (
                        filterCards.map((card: IDataInfo) => {
                            return (
                                <>
                                    <Card key={card.id}>
                                        <Title>{card.title}</Title>
                                        <Description>{card.body}</Description>
                                        <BottomDate>{`${new Date()}`}</BottomDate>
                                    </Card>
                                </>
                            )
                        })
                    )
                }
            </Container>
        </>
    )
}

export default InfoCards;