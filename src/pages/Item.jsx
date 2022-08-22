import React,{useState} from "react";
import {useDisclosure,
  Box, Grid,Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,Kbd,Badge,Tag,Image
} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

import "../index.css";
const Item = ({ position }) => {
  const navigate = useNavigate();
  
  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  )
  const [overlay, setOverlay] = React.useState(<OverlayOne />)

  const tareas = () => {
    navigate("/tareas");
  };
  const [imagen, setImagen] = useState(false);

const show=()=>{
  setImagen(!imagen)
  
}
const blur=()=>{
  setImagen(false)
}

const { isOpen, onOpen, onClose } = useDisclosure()
const [size, setSize] = useState('full')

  return (
<>


    <Grid  templateColumns='repeat(1, 1fr)' className="items">

      <Box flex='1'  onClick={show}textAlign='center' as='button' borderRadius='md' 
      
      bg={imagen?'purple':'purple.200'} variant='outline' px={4} h={50}>
      <Tag bg={imagen?'purple':'purple.200'} color={imagen?'white':'black'}  >{position.position}</Tag>
     
      </Box>
      {imagen?<Image 
onClick={() => {
  setOverlay(<OverlayOne />)
  onOpen()
}} margin='auto'
      textAlign='center'
        boxSize='100%'
        boxShadow='7px 10px 17px -5px rgba(161,161,161,0.75)'
        cursor='pointer'
      
        src={position.img}
        alt='avatar'
      />:null}
      {imagen?<Badge className="badge"as='button'onClick={() => {
  setOverlay(<OverlayOne />)
  onOpen()
}}>Seleccionar</Badge>:null}
    </Grid> 
    
<Modal isOpen={isOpen} size={size}onClose={onClose}>
{overlay}
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Importante</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}mb={6}mt={6}className="modalLargo">
        
          
          <h2 >Va a comenzar su avatar como <span className="negrita">{' '}{position.position}</span> </h2> 
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolorem magnam vero dolor repellat autem animi fuga quo voluptatibus, iusto, incidunt possimus. Aliquam ducimus voluptas veniam quisquam eius omnis exercitationem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolorem magnam vero dolor repellat autem animi fuga quo voluptatibus, iusto, incidunt possimus. Aliquam ducimus voluptas veniam quisquam eius omnis exercitationem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolorem magnam vero dolor repellat autem animi fuga quo voluptatibus, iusto, incidunt possimus. Aliquam ducimus voluptas veniam quisquam eius omnis exercitationem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolorem magnam vero dolor repellat autem animi fuga quo voluptatibus, iusto, incidunt possimus. Aliquam ducimus voluptas veniam quisquam eius omnis exercitationem.
          </p>
          <Image 
margin='auto'
      textAlign='center'
        borderRadius='full'
        boxSize='20%'
        src={position.img}
        alt='avatar'
      />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={tareas}>
              Si
            </Button>
            <Button variant='ghost' onClick={onClose}>No</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </>

  )
};

export default Item;
