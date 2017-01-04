import React from 'react';
import { connect } from 'react-redux';
import { ScrollView, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { getAllRatingsData } from '../actions/ratings';
import { RatingsPoster } from './Poster';

const RatingCard = ({ rating, author }) => (
  <View>
    <RatingsPoster
      src={rating.image}
      happiness={rating.my.happiness}
      quality={rating.my.quality}
      quote={rating.my.review}
      author={author}
    />
  </View>
);

const RatingsList = ({ ratings, author }) => (
  <ScrollView style={{ paddingTop: 10 }}>
    {ratings.map((rating) => (
      <RatingCard key={rating.id} rating={rating} author={author} />
    ))}
  </ScrollView>
);

const pageStyle = {
  backgroundColor: '#181818',
};

class RatingsPage extends React.Component {
  componentWillMount() {
    const { id, dispatchGetAllRatingsData } = this.props;

    dispatchGetAllRatingsData(id);
  }

  render() {
    const { ratings, loading, name } = this.props;

    return (
      <View style={pageStyle}>
        <Spinner visible={loading} color="black" overlayColor="rgba(1,1,1,0.25)" />
        {!loading && <RatingsList ratings={ratings} author={name}/>}
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({

});


export default connect((state) => ({
  id: state.profile.id,
  name: state.profile.name,
  loading: !state.ratings.hasData,
  ratings: state.ratings.all,
}), mapDispatchToProps)(RatingsPage);
