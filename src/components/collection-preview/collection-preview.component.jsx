/* eslint-disable react/prop-types */
import React from 'react';

import {CollectionPreviewContainer, Title,
  PreviewContainer} from './collection-preview.styles';

import CollectionItem from '../collection-item/collection-item.componenet';

const CollectionPreview = ({title, items}) => {
  return (
    <CollectionPreviewContainer>
      <Title>{title.toUpperCase()}</Title>
      <PreviewContainer>
        {
          items.filter((item, idx) => idx < 4).map((item) =>
            (
              <CollectionItem key={item.id} item={item}/>
            ))
        }
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
