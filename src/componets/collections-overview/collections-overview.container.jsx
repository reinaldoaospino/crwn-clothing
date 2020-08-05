import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selector";
import WithSpinner from "../with-spinner/with-spinner.component";

import CollectionsOverview from "./collections-overview.component";

const mapStatteToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = compose(
    connect(mapStatteToProps),
    WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
