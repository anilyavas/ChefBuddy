import { LinearGradient } from 'expo-linear-gradient';
import { useState, useEffect } from 'react';
import {
  View,
  Text,
  Pressable,
  Alert,
  ActivityIndicator,
  ScrollView,
  Dimensions,
} from 'react-native';

import { supabase } from '~/utils/supabase';

type Recipe = {
  recipe: string;
};
export default function Favorites() {
  const [favorites, setFavorites] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchFavorites = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setFavorites([]);
        setLoading(false);
      }

      const { data, error } = await supabase
        .from('favorites')
        .select('recipe')
        .eq('user_id', user?.id);

      if (error) {
        throw error;
      }

      setFavorites(data.map((item) => item.recipe));
    } catch (error) {
      console.log(error);
      Alert.alert('Failed to fetch favorites');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <LinearGradient
      colors={['#833ab4', '#fd1d1d', '#fcb045']}
      style={{ height: Dimensions.get('window').height, flex: 1 }}>
      <ScrollView className="mb-5 flex-1 p-4">
        {favorites.map((item, index) => (
          <Text className="pb-10 font-semibold text-white" key={index}>
            {item}
          </Text>
        ))}
      </ScrollView>
    </LinearGradient>
  );
}
