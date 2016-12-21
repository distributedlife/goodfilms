import React from 'react';
import { connect } from 'react-redux';
import { ScrollView, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { getLatestQueueData } from '../actions/queue';
import { Poster } from './Poster';

const MoviePosters = ({ movies }) => (
  <ScrollView style={{ paddingTop: 10 }}>
    {movies.map((movie) => (<Poster key={movie.id} src={movie.image} />))}
  </ScrollView>
);

const pageStyle = {
  backgroundColor: '#181818',
};

class QueuePage extends React.Component {
  componentWillMount() {
    const { id, dispatchGetInitialQueueData } = this.props;

    dispatchGetInitialQueueData(id);
  }

  render() {
    const { movies, loading } = this.props;

    return (
      <View style={pageStyle}>
        <Spinner visible={loading} color="black" overlayColor="rgba(1,1,1,0.25)" />
        {!loading && <MoviePosters movies={movies}/>}
      </View>
    );
  }
}

export default connect((state) => ({
  id: state.profile.id,
  loading: !state.queue.hasData,
  movies: state.queue.movies,
}), {
  dispatchGetInitialQueueData: getLatestQueueData,
})(QueuePage);
