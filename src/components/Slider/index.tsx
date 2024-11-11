import './Slider.css';
import { Image } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

function Index() {
  const images = [
    'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/steamworks_docs/english/Steam_Theme_Doc_Banner.jpg',
    'https://placeimg.com/800/200/nature',
    'https://placeimg.com/800/200/tech',
  ];

  return (
    <Carousel
      height={200}
      slideSize="100%"
      slideGap={0}
      mt={15}
      mr="10%"
      ml="10%"
      withControls={false}
      breakpoints={[
        { maxWidth: 'md', slideSize: '100%', slideGap: 0 },
        { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
      ]}
      loop
      align="center"
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
  );
}

export default Index;
