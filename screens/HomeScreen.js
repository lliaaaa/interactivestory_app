import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {

  // Logout function
  const handleLogout = () => {
    // Navigate back to Login screen
    navigation.replace('Login');
  };

  // Handle genre selection
  const handleGenre = (genre) => {
    // Navigate to StoryScreen and pass the selected genre
    navigation.navigate('Story', { genre });
  };

  return (
    <View style={styles.container}>
      {/* Logout button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Welcome to Your Story App!</Text>
      <Text style={styles.subtitle}>Choose a genre to start your adventure</Text>

      {/* Genre selection */}
      <View style={styles.genres}>
        <TouchableOpacity style={styles.genreButton} onPress={() => handleGenre('Romance')}>
          <Text style={styles.genreText}>Romance</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.genreButton} onPress={() => handleGenre('Thriller')}>
          <Text style={styles.genreText}>Thriller</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.genreButton} onPress={() => handleGenre('Horror')}>
          <Text style={styles.genreText}>Horror</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2e',
    padding: 20,
    justifyContent: 'flex-start',
  },
  logoutButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#ff4d4d',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 20,
    elevation: 3,
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitle: {
    color: '#aaa',
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
  },
  genres: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  genreButton: {
    backgroundColor: '#4f46e5',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 12,
    width: 100,
    elevation: 3,
  },
  genreText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
