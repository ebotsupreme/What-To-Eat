import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

import { feedGradientColors } from '../../styles/index';
import { handleDisplayFeedImageSrc } from '../../utility/index';

/**
 *
 * @param {{}} props
 */
const CardImage = ({ item, width, height, type = '' }) => {
  return (
    <>
      {item.image || item.imageType ? (
        <Image
          style={[styles.container, { width, height }]}
          source={handleDisplayFeedImageSrc(
            type,
            item,
            item.image || item.imageType,
          )}
        />
      ) : (
        <View style={{ width, height }}>
          <View style={styles.imageUnavailable}>
            <Icon size={100} name="image" color="grey" />
          </View>
        </View>
      )}
      <LinearGradient
        colors={feedGradientColors}
        style={[styles.linearGradient, { width, height }]}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
  },
  linearGradient: {
    position: 'absolute',
    borderRadius: 10,
  },
  imageUnavailable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CardImage;
