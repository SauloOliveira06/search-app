import styled from 'styled-components';

const Row = styled.div`
  display: grid;
  gap: 10px;
`;

const SearchText = styled.div`
  display: flex;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 10px 15px;
  transition: background-color 0.5 ease-in-out;
  min-width: 600px;
  margin: 3rem auto;

  input {
    border: 0;
    background-color: transparent;
    width: 100%;

    &:focus {
      outline: none;
    }
  }
`;

const SelectFilter = styled.select`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: middle;
  height: 3em;
  padding: 0.3em 0.6em;
  background: transparent;
  border: 1px solid #ccc;
  border-radius: 0.3em;
  font-size: 0.85em;
  font-weight: normal;
  overflow: hidden;
  white-space: nowrap;
  text-shadow: 0 1px 0 white;
  -webkit-transition: box-shadow 200ms, border-color 200ms;
  -moz-transition: box-shadow 200ms, border-color 200ms;
  transition: box-shadow 200ms, border-color 200ms;
  -webkit-appearance: button;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;

  option {
    text-shadow: none; 
  }
`;

const styleForm = {
  display: 'flex',
  alignItems: 'center',
  gap: '20px'
}

const ButtonSubmit = styled.button`
  display: inline-block;
  padding: 1em 2em;
  text-decoration: none;
  color: #fff;
  border: solid 1px #ccc;
  border-radius: 100px;
  transition: .4s;
  background-color: #3f1061;
  cursor: pointer;
  
  &:hover {
    opacity: 0.85;
  }
`;

const ButtonClear = styled.div`
  display: inline-block;
  padding: 0.65em 1.3em;
  font-size: 1rem;
  font-weight: 600;
  color: #3f1061;
  background: transparent;
  transition: .3s;
  cursor: pointer;

  &:hover {
    background-color: #3f1061;
    border-radius: 100px;
    color: #fff;
  }
`;

export {
  Row,
  SearchText,
  SelectFilter,
  styleForm,
  ButtonSubmit,
  ButtonClear
}

