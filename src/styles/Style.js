import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-Items: center;
`;

export const Text = styled.Text`
    font-size: 20px;
    color: ${props => `${props.color}`}
`;

export const Button = styled.View`
    background: #053480;
    margin-top: 10px;
    padding: 10px;
    align-Items: center;
`;