import { Box, Button, IconButton, Typography, useTheme, TextField } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Item = () => {
    const [allData, setAllData] = useState(null)
    const [data, setData] = useState(null)
    const {id} = useParams()
const theme = useTheme();
const colors = tokens(theme.palette.mode);
    useEffect(()=>{
        axios.get('http://localhost:5000/recipe').then(data=>{
            console.log(data.data)
            setAllData(data.data)
        })
    },[id])
    useEffect(()=>{
        if(allData != null){
            allData.map((i)=>{
                if(i._id == id){
                    setData(i)
                    console.log('here it is: ' + i)
                }
            })
        }
    },[allData])
    

// alert(id)


return (
    <Box m="20px">
        {data != null ?
            <>
                {/* HEADER */}
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Header title="DISH" />
                </Box>
                {/* GRID & CHARTS */}
                <Box border={1} mb='25px' borderColor={colors.primary[300]} display={'flex'} ml='50px' mr='50px'>
                    <TextField id="filled-basic" display='flex' fullWidth placeholder={`${data.recipeTitle}`} />
                </Box>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Header title="Ingredients" />
                </Box>

                <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="60px"
                gap="10px"
                mb={"10px"}
                >
                {data.ingredient.map((i)=>{
                    return (
                            <Box
                            gridColumn="span 3"
                            backgroundColor={colors.primary[400]}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            >
                                <TextField id="standard-basic" fullWidth  placeholder={`${i}`} />
                            </Box>
                    )
                })}
                </Box>
                
                <Box display={'flex'} justifyContent='flex-end' marginRight={'20px'}>
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
                        Update
                    </Button>
                </Box>
            </>

        :
        <></>
        }
    </Box>
);
};

export default Item;