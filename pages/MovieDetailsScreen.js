import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const MovieDetailsScreen = ({ route }) => {
  const { movie } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }} style={styles.posterImage} />
      <Text style={styles.movieTitle}>{movie.title}</Text>
      <Text style={styles.movieOverview}>{movie.overview}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  posterImage: {
    width: "100%",
    aspectRatio: 0.7,
    borderRadius: 8,
  },
  movieTitle: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  movieOverview: {
    marginTop: 16,
    fontSize: 14,
    textAlign: "center",
  },
});

export default MovieDetailsScreen;
