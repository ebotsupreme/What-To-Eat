import React, { useRef } from 'react';
import Carousel from 'react-native-snap-carousel';

import {
  CarouselWidth,
  ItemWidthAndHeight,
} from '../../utility/CarouselDimensions';
import FeedCard from './FeedCard';

const FeedCarousel = (props) => {
  const { data, renderItemComponent } = props;
  const carouselRef = useRef(null);
  return (
    <Carousel
      data={data[0].recipes}
      sliderWidth={CarouselWidth()}
      itemWidth={ItemWidthAndHeight()}
      renderItem={renderItemComponent}
      ref={carouselRef}
    />
  );
};

export default FeedCarousel;
