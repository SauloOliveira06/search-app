import styled from "styled-components";

const Card = styled.div`
    border-radius: 5px;
    box-shadow: 4px 4px 13px 0px rgba(50, 50, 50, 0.1);
    border: 1px solid #ccc;
    padding: 30px;
    margin: 20px;
    width: 250px;
    transition: all 0.3s ease-out;
`;

const Title = styled.h4`
    font-weight: 600;
`;

const Description = styled.p`
    font-size: 1rem;
    font-style: normal;
    color: #ccc;
`;

const BottomDate = styled.div`
    font-weight: 500;
    font-size: 0.75rem;
    left: 0;
    bottom: 0;
`;

export {
    Card,
    Title,
    Description,
    BottomDate
}