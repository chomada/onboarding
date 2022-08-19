import Login from "./pages/Login";
import Select from "./pages/Select";
import { ChakraProvider } from '@chakra-ui/react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tareas from "./pages/Tareas";

function App() {
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/select" element={<Select />} />
            <Route path="/" element={<Login />} />
            <Route path="/tareas" element={<Tareas />} />

          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;
