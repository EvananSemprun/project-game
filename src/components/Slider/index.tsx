import './Slider.css';
import { Image } from '@mantine/core';
import { Carousel, Embla } from '@mantine/carousel';
import { useCallback, useEffect, useState } from 'react';

function Index() {
  const images = [
    'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/steamworks_docs/english/Steam_Theme_Doc_Banner.jpg',
    'https://placeimg.com/800/200/nature',
    'https://placeimg.com/800/200/tech',
  ];

  const [scrollProgress, setScrollProgress] = useState(0);
  const [embla, setEmbla] = useState<Embla | null>(null);

  const handleScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla]);

  useEffect(() => {
    if (embla) {
      embla.on('scroll', handleScroll);
      handleScroll();
    }
  }, [embla, handleScroll]);

  return (
    <>
      <Carousel
        height={200}
        slideSize="100%"
        slideGap={0}
        mt={15}
        mr="5%"
        ml="5%"
        style={{ height: '45%' }}
        withControls={false}
        breakpoints={[
          { maxWidth: 'md', slideSize: '100%', slideGap: 0 },
          { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
        ]}
        loop
        align="center"
        getEmblaApi={setEmbla}
      >
        {images.map((src, index) => (
          <Carousel.Slide key={index}>
            <Image
              radius="md"
              src={src}
              alt={`Image ${index + 1}`}
              style={{ width: '100%', height: '100%' }}
            />
          </Carousel.Slide>
        ))}
      </Carousel>

    </>
  );
}

export default Index;