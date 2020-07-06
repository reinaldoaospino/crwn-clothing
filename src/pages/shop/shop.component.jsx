import React from "react";
import { Route } from "react-router-dom";

import { connect } from "react-redux";

import CollectionsOverview from "../../componets/collections-overview/collections-overview.component";
import CaterogryPage from "../collection/collection.component";

import {
  firestore,
  convertCollectionsSpanshotToMap,
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";

import WithSpinner from "../../componets/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectioPageWithSpinner = WithSpinner(CaterogryPage);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapShot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    fetch('https://firestore.googleapis.com/v1/projects/crwn-db-a5db4/databases/(default)/documents/collections')
      .then(response=>response.json())
      .then(collections=> console.log(collections));

      collectionRef.get().then(snapshot=>{
                const collectionMap = convertCollectionsSpanshotToMap(snapshot);
        updateCollections(collectionMap);
        this.setState({ loading: false });
      })


  }
  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectioPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionMap) =>
    dispatch(updateCollections(collectionMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
