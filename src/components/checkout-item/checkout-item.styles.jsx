import styled, {css} from 'styled-components';

const headerElements = css`
    width: 23%;
`;

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`;

export const ImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;
`;

export const Image = styled.img`  
    width: 100%;
    height: 100%;
`;

export const Name = styled.span`
    ${headerElements}
`;

export const Quantity = styled.span`
    ${headerElements}
    display: flex;
`;

export const Price = styled.span`
    ${headerElements}
`;

export const Arrow = styled.div`
    cursor: pointer;
`;

export const Value = styled.span`
    margin: 0 10px;
`;

export const RemoveButton = styled.div`
    padding-left: 12px;
    cursor: pointer;
`;
