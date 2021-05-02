import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import { CollectionOverviewContainer } from './collections-overview.styles';

const CollectionsOverview = ({ collections }) => {
  return (
    <CollectionOverviewContainer>
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </CollectionOverviewContainer>
  );
};

const mapStateToPros = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToPros)(CollectionsOverview);
