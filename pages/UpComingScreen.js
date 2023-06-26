import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import axios from "axios";

const API_KEY = "5c78cc4c40cac2fb67a832c75f5c4248";

const UpcomingScreen = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getUpcomingMovies();
  }, []);

  const getUpcomingMovies = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
      setMovies(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const renderMovieItem = ({ item }) => (
    <View style={styles.movieItem}>
      <Image source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }} style={styles.posterImage} />
      <Text style={styles.movieTitle}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Upcoming Movies</Text>
      <FlatList data={movies} keyExtractor={(item) => item.id.toString()} renderItem={renderMovieItem} numColumns={2} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  movieItem: {
    flex: 1,
    margin: 8,
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
});

export default UpcomingScreen;
