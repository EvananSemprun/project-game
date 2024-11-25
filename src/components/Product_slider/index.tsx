import { Carousel, Embla } from '@mantine/carousel';
import { motion, AnimatePresence } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { Card, Image, ActionIcon, Text, Title } from '@mantine/core';

function Index() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [embla, setEmbla] = useState<Embla | null>(null);
  const [showControls, setShowControls] = useState(false);

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

  const handlePrev = () => embla && embla.scrollPrev();
  const handleNext = () => embla && embla.scrollNext();

  const cards = [
    {
      title: "Zinli Recarga de saldo",
      price: "Bs.66,63",
      image: "https://cdn.thegamesdb.net/images/thumb/boxart/front/130030-1.jpg",
    },
    {
      title: "Zinli Recarga de saldo",
      price: "Bs.66,63",
      image: "https://cdn.thegamesdb.net/images/thumb/boxart/front/130030-1.jpg",
    }, {
      title: "Zinli Recarga de saldo",
      price: "Bs.66,63",
      image: "https://cdn.thegamesdb.net/images/thumb/boxart/front/130030-1.jpg",
    }, {
      title: "Zinli Recarga de saldo",
      price: "Bs.66,63",
      image: "https://cdn.thegamesdb.net/images/thumb/boxart/front/130030-1.jpg",
    }, {
      title: "Zinli Recarga de saldo",
      price: "Bs.66,63",
      image: "https://cdn.thegamesdb.net/images/thumb/boxart/front/130030-1.jpg",
    }, {
      title: "Zinli Recarga de saldo",
      price: "Bs.66,63",
      image: "https://cdn.thegamesdb.net/images/thumb/boxart/front/130030-1.jpg",
    }, {
      title: "Zinli Recarga de saldo",
      price: "Bs.66,63",
      image: "https://cdn.thegamesdb.net/images/thumb/boxart/front/130030-1.jpg",
    },

  ];

  return (
    <div
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      style={{ position: 'relative' }}
    >
      <Carousel
        dragFree
        slideSize="20%"
        slideGap={10}
        mt={15}
        mr="5%"
        ml="5%"
        height={450}
        getEmblaApi={setEmbla}
        withControls={false}
        breakpoints={[
          { maxWidth: 'lg', slideSize: '25%', slideGap: 10 },
          { maxWidth: 'md', slideSize: '33.33%', slideGap: 10 },
          { maxWidth: 'sm', slideSize: '50%', slideGap: 10 },
          { maxWidth: 'xs', slideSize: '50%', slideGap: 10 },
        ]}
        loop
        align="start"
      >
        {cards.map((card, index) => (
          <Carousel.Slide key={index}>
            <Card shadow="sm" mr={10} p="lg" radius="lg">
              <Image
                src={card.image}
                alt={card.title}
                fit="cover"
                height="100%"
                radius='md'
                width="100%"
                style={{ objectFit: 'cover' }}
              />
              <Title ta="center" order={4}>{card.title}</Title>
              <Text ta="center" fz="md">Desde: <strong>{card.price}</strong></Text>
            </Card>
          </Carousel.Slide>
        ))}
      </Carousel>

      <AnimatePresence>
        {showControls && (
          <>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '10px',
                transform: 'translateY(-50%)',
                zIndex: 1
              }}
            >
              <ActionIcon
                color="dark"
                variant="filled"
                ml={15}
                onClick={handlePrev}
                size="xl"
                radius="xl"
              >
                <IconChevronLeft color='#FBC403' size={24} />
              </ActionIcon>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'absolute',
                top: '50%',
                right: '10px',
                transform: 'translateY(-50%)',
                zIndex: 1
              }}
            >
              <ActionIcon
                color="dark"
                variant="filled"
                onClick={handleNext}
                size="xl"
                mr={15}
                radius="xl"
              >
                <IconChevronRight color='#FBC403' size={24} />
              </ActionIcon>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Index;