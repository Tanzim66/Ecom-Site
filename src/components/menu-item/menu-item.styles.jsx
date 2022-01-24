import styled, {css} from 'styled-components';

const MenuItemStyles = css`
    height: 300px;
`;

const LargeMenuItemStyles = css`
    height: 400px;
`;

const getMenuItemStyles = (props) => {
  if (props.size === 'large') {
    return LargeMenuItemStyles;
  } else {
    return MenuItemStyles;
  }
};

export const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-image: ${({imageUrl}) => `url(${imageUrl})`}
`;

export const Content = styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute;
`;

export const Title = styled.h1`
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;
`;

export const Subtitle = styled.span`
    font-weight: lighter;
    font-size: 16px;
`;

export const MenuItemContainer = styled.div`
    min-width: 30%;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden;
    ${getMenuItemStyles}
    &:hover{
        cursor: pointer;
        & ${BackgroundImage}{
            transform: scale(1.1);
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }
        & ${Content}{
            opacity: 0.9;
        }
    }
`;
