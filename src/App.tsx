import './App.css'
import Navbar from './components/Global/Navbar'
import Carousel from './components/Slider'
import CarouselPro from './components/Product_slider'
import { Group, Title } from '@mantine/core'
function App() {

  return (
    <>
      <Navbar />
      <Carousel />
      <Group mt={15} ml="5%">

        <Title c='#FBC403' order={2}>Mas</Title> <Title order={2}>Vendidos</Title>
      </Group>
      <CarouselPro />
      <Group mt={15} ml="5%">

        <Title c='#FBC403' order={2}>Mas</Title> <Title order={2}>Vendidos</Title>
      </Group>
      <CarouselPro />

    </>
  )
}

export default App
