import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useState } from 'react';
import { storyData } from '../data/storyData';

export default function StoryScreen({ navigation, route }) {
  const { genre } = route.params; // "Romance" | "Thriller" | "Horror"
  const [currentStory, setCurrentStory] = useState('start');

  const story = storyData[genre][currentStory]; // Select story based on genre

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>

      <Text style={styles.genreText}>Genre: {genre}</Text>

      <ScrollView contentContainerStyle={styles.storyCard}>
        <Text style={styles.storyText}>{story.text}</Text>

        {story.choices.length === 0 ? (
          <Text style={styles.theEnd}>The End</Text>
        ) : (
          story.choices.map((choice, index) => (
            <TouchableOpacity
              key={index}
              style={styles.choiceButton}
              onPress={() => setCurrentStory(choice.next)}
            >
              <Text style={styles.choiceText}>{choice.text}</Text>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2e',
    padding: 20,
  },
  backButton: {
    marginBottom: 10,
  },
  backText: {
    color: '#fff',
    fontSize: 18,
  },
  genreText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  storyCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    minHeight: '60%',
    elevation: 5,
  },
  storyText: {
    fontSize: 18,
    marginBottom: 20,
    color: '#111',
  },
  choiceButton: {
    backgroundColor: '#4f46e5',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  choiceText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  theEnd: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#555',
    marginTop: 15,
  },
});
