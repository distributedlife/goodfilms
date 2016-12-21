import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { ProfileHeader } from 'react-native-uikit';

const summaryItemStyles = StyleSheet.create({
  container: {
    flex: -1,
    paddingLeft: 8,
    paddingRight: 8,
  },
  name: {
    fontSize: 10,
    fontStyle: 'italic',
    paddingTop: 4,
    color: '#999',
    textAlign: 'center',
  },
  value: {
    fontSize: 13,
    fontWeight: 'bold',
    paddingTop: 2,
    color: '#111',
    textAlign: 'center',
  },
});

const SummaryItem = ({ name, value }) => (
  <View style={summaryItemStyles.container}>
    <Text style={summaryItemStyles.value}>{value}</Text>
    <Text style={summaryItemStyles.name}>{name}</Text>
  </View>
);

const DisplayName = ({ name, id }) => (<SummaryItem name={`@${id}`} value={name} />);
const Reviews = ({ count }) => (<SummaryItem name="reviews" value={count} />);
const Ratings = ({ count }) => (<SummaryItem name="ratings" value={count} />);
const Queued = ({ count }) => (<SummaryItem name="queued" value={count} />);
const Lists = ({ count }) => (<SummaryItem name="lists" value={count} />);
const Followers = ({ count }) => (<SummaryItem name="followers" value={count} />);
const Following = ({ count }) => (<SummaryItem name="following" value={count} />);

const Profile = ({ profile }) => (
  <View>
    <ProfileHeader profileImg={profile.avatar} backgroundImg={profile.cover} />
    <View style={{ flexDirection: 'row' }}>
      <DisplayName name={profile.name} id={profile.id} />
      <Reviews count={profile.counts.reviews} />
      <Ratings count={profile.counts.ratings} />
      <Queued count={profile.counts.queued} />
      <Lists count={profile.counts.lists} />
      <Followers count={profile.counts.followers} />
      <Following count={profile.counts.following} />
    </View>
  </View>
);

export default connect((state) => ({
  profile: state.profile,
}))(Profile);
