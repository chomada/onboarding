import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react'

import Item from "./Item";
const Select = () => {

  const position = [{ "position": "Developer", "id": "1", "img": "/dev.png" },
  { "position": "Tester", "id": "2", "img": "/qa.png" },
  { "position": "Designer", "id": "3", "img": "/ui.png" },
  { "position": "Scrum Master", "id": "4", "img": "/po.png" },
  { "position": "Product Owner", "id": "5", "img": "/sm.png" },]
  return (
    <>
      <h1 className="tareas" colorScheme='green'> Elige tu Avatar</h1>
      <Grid templateColumns='repeat(5, 1fr)' gap={6} className=" principal ">

        {position.map((pos) => {
          return <Item key={pos.id} position={pos} />;
        })}
      </Grid>
    </>
  )
}

export default Select