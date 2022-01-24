/* eslint-disable react/prop-types */
import React from 'react';
import {connect} from 'react-redux';

import {selectCollection} from '../../redux/shop/shop.selector';

import {CollectionPageContainer, Title, ItemsContainer,
  CollectionItemContainer} from './collection.styles';

const Collection = ({collection}) => {
  const {title, items} = collection;
  return (
    <CollectionPageContainer>
      <Title>{title}</Title>
      <ItemsContainer>
        {
          items.map((item) => <CollectionItemContainer
            key={item.id} item={item}/>)
        }
      </ItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
