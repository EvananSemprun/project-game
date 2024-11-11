import './Slider.css';
import { Image } from '@mantine/core';
import { Carousel} from '@mantine/carousel';

function index() {

  return (
    <>
      <Carousel slideSize="70%" height={200} slideGap="md" mt={25} loop dragFree mr='20%' ml='20%'>

      <div style={{ width: 240, marginLeft: 'auto', marginRight: 'auto' }}>

      <Image
        radius="md"
        src="https://images.unsplash.com/photo-1627552245715-77d79bbf6fe2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80"
        alt="Random unsplash image"
        caption="My dog begging for treats"
      />
      
    </div>
      </Carousel>
    </>
  );
}

export default index;
