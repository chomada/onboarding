import React,{useState} from "react";
import { Box,Accordion,Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,Button,Kbd,CircularProgress,CircularProgressLabel,useDisclosure,Image
 } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

import "../index.css";
const Tareas = ({ position }) => {
  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure()

const [realizada1,setRealizada1]=useState('Todavia no')
const [realizada2,setRealizada2]=useState('Todavia no')
const [realizada3,setRealizada3]=useState('Todavia no')
const [realizada4,setRealizada4]=useState('Todavia no')
const [realizada5,setRealizada5]=useState('Todavia no')
const [valor,setValor]=useState(0)
const realizarTarea1=()=>{
    if(realizada1==='Todavia no'){
        setRealizada1('Realizada')
        setValor(valor+20)
    }else{
        setRealizada1('Todavia no')
        setValor(valor-20)
    }
  
}
const realizarTarea2=()=>{
    if(realizada2==='Todavia no'){
        setRealizada2('Realizada')
        setValor(valor+20)
    }else{
        setRealizada2('Todavia no')
        setValor(valor-20)
    }
  
}
const realizarTarea3=()=>{
    if(realizada3==='Todavia no'){
        setRealizada3('Realizada')
        setValor(valor+20)
    }else{
        setRealizada3('Todavia no')
        setValor(valor-20)
    }
  
}
const realizarTarea4=()=>{
    if(realizada4==='Todavia no'){
        setRealizada4('Realizada')
        setValor(valor+20)
    }else{
        setRealizada4('Todavia no')
        setValor(valor-20)
    }
  
}
const realizarTarea5=()=>{
    if(realizada5==='Todavia no'){
        setRealizada5('Realizada')
        setValor(valor+20)
    }else{
        setRealizada5('Todavia no')
        setValor(valor-20)
    }
  
}
  return (
 
<>
<div className="maximus ">
<h1 className="tareas"colorScheme='purple'> Tareas <CircularProgress value={valor} color='purple.400'>
  <CircularProgressLabel>{valor}%</CircularProgressLabel>
</CircularProgress></h1>
  <Accordion className="marginBot">
  <AccordionItem>
    <h2>
      <AccordionButton>
      <Box flex='1' textAlign='center' as='button' borderRadius='md' bg={realizada1==='Realizada'?'purple':'purple.200'} color='black' px={4} h={10}>
      <div className="homework">Tarea 1</div>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <div className="mypanel">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.<br/><Button onClick={realizarTarea1}variant='ghost' mr={8} >
              {realizada1}
            </Button>
            </div>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
      <Box flex='1' textAlign='center' as='button' borderRadius='md' bg={realizada2==='Realizada'?'purple':'purple.200'} color='black' px={4} h={10}>
      <div className="homework">Tarea 2</div>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <div className="mypanel">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.<br/><Button onClick={realizarTarea2}variant='ghost' mr={3} >
              {realizada2}
            </Button>
            </div>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
      <Box flex='1' textAlign='center' as='button' borderRadius='md' bg={realizada3==='Realizada'?'purple':'purple.200'} color='black' px={4} h={10}>
      <div className="homework">Tarea 3</div>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <div className="mypanel">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.<br/><Button onClick={realizarTarea3}variant='ghost' mr={3} >
              {realizada3}
            </Button>
            </div>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
      <Box flex='1' textAlign='center' as='button' borderRadius='md' bg={realizada4==='Realizada'?'purple':'purple.200'} color='black' px={4} h={10}>
      <div className="homework">Tarea 4</div>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <div className="mypanel">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.<br/><Button onClick={realizarTarea4}variant='ghost' mr={3} >
              {realizada4}
            </Button>
            </div>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
      <Box flex='1' textAlign='center' as='button' borderRadius='md' bg={realizada5==='Realizada'?'purple':'purple.200'} color='black' px={4} h={10}>
      <div className="homework">Tarea 5</div>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <div className="mypanel">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. <br/><Button onClick={realizarTarea5}variant='ghost' mr={3} >
              {realizada5}
            </Button>
            </div>
           
    </AccordionPanel>
  </AccordionItem>
</Accordion>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Tu Avatar</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          </ModalBody>
          <Image 
 margin='auto'
      textAlign='center'
        borderRadius='full'
        boxSize='90%'
        src='https://res.cloudinary.com/chomada/image/upload/v1660897939/avatar_zxsa4h.png'
        alt='Dan Abramov'
      />
          <ModalFooter>
            descargalo para poder compartirlo!
          </ModalFooter>
        </ModalContent>
      </Modal>
{valor===100?<div className="desbloquear">

<span>
  <Button onClick={onOpen}colorScheme='gray'><Kbd>Desbloquear Avatar</Kbd></Button>
</span>
</div>:null}
</div>
<div class="footer">
  <p>Onboarding 2022</p>
</div>
</>
  );
};

export default Tareas;
