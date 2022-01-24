/* eslint-disable react/prop-types */
import React from 'react';
import {withRouter} from 'react-router-dom';

import {BackgroundImage, Content, Title,
  Subtitle, MenuItemContainer} from './menu-item.styles';

const MenuItem = ({title, imageUrl, size, history, match, linkUrl})=>{
  return (
    <MenuItemContainer size={size}
      onClick={() =>
        history.push(`${match.url}${linkUrl}`)
      }
    >
      <BackgroundImage imageUrl={imageUrl}/>
      <Content>
        <Title>
          {title.toUpperCase()}
        </Title>
        <Subtitle>
                SHOP NOW
        </Subtitle>
      </Content>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
