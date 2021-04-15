import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import {
  handleItemWidthAndHeight,
  HORIZONTAL_MARGIN,
  ITEM_WIDTH,
  handleFeaturedWidth,
} from '../../utility/index';
import { CardImage, CardMeta } from './index';
import SkeletonCard from './SkeletonCard';

/**
 *
 * @param {{}} props
 */
const FeedCard = ({
  item,
  navigation,
  isLoadingPopularFeed,
  isLoadingMealFeed,
  isLoadingCuisineFeed,
  isLoadingHealthyFeed,
  isLoadingFeaturedFeed,
  type = '',
  screen = '',
}) => {
  if (type) {
    item = item.item;
  }
  let WIDTH = handleItemWidthAndHeight();
  let HEIGHT = WIDTH;
  const FEATURED_WIDTH = handleFeaturedWidth();

  if (screen === 'featuredFeed') {
    WIDTH = FEATURED_WIDTH - 30;
    HEIGHT = WIDTH;
  }
  /**
   *
   */
  const onNavigateToScreen = () => {
    if (type === 'multi') {
      return navigation.navigate('Search Results', {
        title: item.title,
        screen,
      });
    }
    return navigation.navigate('Details', { id: item.id, screen });
  };

  if (
    isLoadingPopularFeed ||
    isLoadingMealFeed ||
    isLoadingCuisineFeed ||
    isLoadingHealthyFeed ||
    isLoadingFeaturedFeed ||
    item === undefined
  ) {
    return (
      <SkeletonCard
        width={WIDTH}
        height={HEIGHT}
        itemWidth={ITEM_WIDTH}
        horizontalMargin={HORIZONTAL_MARGIN}
        screen={screen}
      />
    );
  }

  return (
    <View
      style={
        (styles.container,
        {
          width: screen === 'featuredFeed' ? WIDTH : ITEM_WIDTH,
          height: HEIGHT,
          paddingHorizontal: HORIZONTAL_MARGIN,
        })
      }>
      <View
        style={{
          width: WIDTH,
        }}>
        <Pressable
          onPress={() => onNavigateToScreen()}
          style={{ width: WIDTH, height: HEIGHT }}>
          <CardImage {...{ item, width: WIDTH, height: HEIGHT, type }} />
          <CardMeta {...{ item, width: WIDTH, height: HEIGHT, type, screen }} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    position: 'relative',
    borderRadius: 10,
  },
});

export default FeedCard;
