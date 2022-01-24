/* eslint-disable react/prop-types */
import React from 'react';
import {connect} from 'react-redux';

import {addItem} from '../../redux/cart/cart.actions';

import {CollectionItemContainer, ImageContainer,
  ModifiedCustomButton, CollectionFooter} from './collection-item.styles';

const CollectionItem = ({item, addItem}) => {
  const {name, price, imageUrl} = item;
  return (
    <CollectionItemContainer>
      <ImageContainer imageUrl={imageUrl}/>
      <CollectionFooter>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </CollectionFooter>
      <ModifiedCustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </ModifiedCustomButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
