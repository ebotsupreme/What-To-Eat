import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';

/**
 *
 */
const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchPlaceholder, setSearchPlaceholder] = useState('Search Recipes');

  const navigation = useNavigation();
  const { fonts } = useTheme();

  /**
   *
   * @param {string} query
   */
  const onChangeSearch = (query) => setSearchQuery(query);

  /**
   *
   */
  const onFocusSearch = () => {
    navigation.navigate('Search Recipes');
  };

  return (
    <Searchbar
      placeholder={searchPlaceholder}
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={styles.container}
      inputStyle={[styles.searchInput, fonts.medium]}
      textAlign={'center'}
      onFocus={() => onFocusSearch()}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 35,
    justifyContent: 'center',
    alignSelf: 'center',
    shadowColor: 'transparent',
    elevation: 0,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    marginLeft: 10,
  },
  searchInput: {
    paddingVertical: 0,
    fontSize: 16,
  },
});

export default Search;
