import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  MenuItemContainer,
  ImageContainer,
  ContentContainer,
  TitleContainer,
  SubtitleContainer,
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  return (
    <MenuItemContainer
      size={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <ImageContainer imageUrl={imageUrl} />
      <ContentContainer>
        <TitleContainer>{title.toUpperCase()}</TitleContainer>
        <SubtitleContainer>SHOP NOW</SubtitleContainer>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
