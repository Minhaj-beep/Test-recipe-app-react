import { useEffect, useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import axios from "axios";

const arr = ['banana', 'mango', 'orange', 'berry', 'strawbeery']


const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
    const [data, setData] = useState(null)

    useEffect(()=>{
        axios.get('http://localhost:5000/recipe').then(data=>{
            console.log(data.data)
            setData(data.data)
        })
    },[])
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  DISHES
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px" ml="15px" mr='15px'>
                <Box mb="25px" display={'flex'} justifyContent="center" alignItems={'center'} >
                    <Link to={{
                        pathname: '/',
                        id: 'xyz'
                    }}>
                    <Button
                        sx={{
                        backgroundColor: colors.greenAccent[500],
                        color: 'white',
                        fontSize: "14px",
                        fontWeight: "bold",
                        padding: "10px 20px",
                        display:'flex',
                        alignSelf:"center"
                    }}
                    >
                        <AddCircleOutlinedIcon sx={{ mr: "10px" }} />
                        Create
                    </Button>
                    </Link>
                </Box>
              <Box textAlign="center">
                <Box
                    display="flex"
                    backgroundColor={colors.primary[300]}
                    borderRadius="3px"
                >
                    <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
                    <IconButton type="button" sx={{ p: 1 }}>
                    <SearchIcon />
                    </IconButton>
                </Box>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            

            {data != null ? 
                data.map((i)=>{
                    return(
                        <Item
                        title={`${i.recipeTitle}`}
                        to={`item/${i._id}`}
                        selected={selected}
                        setSelected={setSelected}
                        />
                    )
                })
                : <></>
            }

            
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
