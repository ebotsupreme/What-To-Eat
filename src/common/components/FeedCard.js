import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';

import {
  handleItemWidthAndHeight,
  HORIZONTAL_MARGIN,
  ITEM_WIDTH,
} from '../../utility/index';
import { CardImage, CardMeta } from './index';

/**
 *
 * @param {{}} props
 */
const FeedCard = (props) => {
  const { item, navigation } = props;
  const WIDTH = handleItemWidthAndHeight();
  const HEIGHT = WIDTH;

  return (
    <View
      style={[
        styles.container,
        {
          width: ITEM_WIDTH,
          height: HEIGHT,
          paddingHorizontal: HORIZONTAL_MARGIN,
        },
      ]}>
      <View
        style={{
          width: WIDTH,
        }}>
        <Pressable
          onPress={() => navigation.navigate('Details', item.id)}
          style={{ width: WIDTH, height: HEIGHT }}>
          <CardImage {...{ ...props, width: WIDTH, height: HEIGHT }} />
          <CardMeta {...{ ...props, width: WIDTH, height: HEIGHT }} />
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
