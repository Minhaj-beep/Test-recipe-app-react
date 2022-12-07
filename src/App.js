import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./screens/global/TopBar";
import Sidebar from "./screens/global/Sidebar";
import Dashboard from "./screens/dashboard/Dashboard";
import Item from "./screens/item/Item";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { colorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            {/* <Topbar setIsSidebar={setIsSidebar} /> */}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/item/:id" element={<Item />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </colorModeContext.Provider>
  );
}

export default App;
