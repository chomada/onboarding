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
      
      <Grid templateColumns={{lg:'repeat(5, 1fr)',md:'repeat(2, 1fr)',sm:'repeat(1, 1fr)'}} gap={6} className=" principal ">

        {position.map((pos) => {
          return <Item key={pos.id} position={pos} />;
        })}
      </Grid>
      <div class="footer">
  <p>Onboarding Interbanking 2022</p>
</div>
    </>
  )
}

export default Select