import React from 'react';
import StarRating from 'react-native-star-rating';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  poster: {
    marginHorizontal: 40,
    borderRadius: 5,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#181818',
    shadowColor: '#D8D8D8',
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: 3,
  },
  clipRadius: {
    borderRadius: 4,
    overflow: 'hidden',
  },
  lowerSection: {
    paddingVertical: 10,
    marginBottom: 30,
    paddingHorizontal: 40,
  },
  title: {
    fontFamily: 'Georgia',
    color: '#999',
    fontStyle: 'italic',
    fontSize: 15,
    lineHeight: 20,
    marginTop: 10,
  },
  img: {
    height: 300,
    resizeMode: 'contain',
  },
});

const doNothing = () => undefined;
const outOfFive = (value) => Math.round(value / 10) / 2;

const Happiness = ({ value }) => (
    <StarRating
      disabled={true}
      rating={outOfFive(value)}
      selectedStar={doNothing}
      starColor="yellow"
      starSize={20}
    />
  );

export const RatingsPoster = ({ src, quality, quote, onPress, shadow, author }) => (
  <View style={styles.poster}>
    <View style={[styles.card, { shadowOpacity: shadow ? 0.6 : 0 }]}>
      <View style={styles.clipRadius}>
        <TouchableOpacity onPress={onPress}>
          <Image source={{ uri: src }} style={styles.img} />
          <View style={styles.lowerSection}>
            <Happiness value={quality} />
            {
              !!quote &&
              <Text style={[styles.title]}>&ldquo;{quote}&rdquo; &ndash;{author}</Text>
            }
          </View>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export const Poster = ({ src, onPress, shadow }) => (
  <View style={styles.poster}>
    <View style={[styles.card, { shadowOpacity: shadow ? 0.6 : 0 }]}>
      <View style={styles.clipRadius}>
        <TouchableOpacity onPress={onPress}>
          <Image source={{ uri: src }} style={styles.img} />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);
