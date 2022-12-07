import { Box, Button, IconButton, Typography, useTheme, TextField } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

const Dashboard = () => {
const theme = useTheme();
const colors = tokens(theme.palette.mode);

// console.log(props.location.id)

return (
    <Box m="20px">
        {/* HEADER */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="DISH" />
        </Box>
        {/* GRID & CHARTS */}
        <Box border={1} mb='25px' borderColor={colors.primary[300]} display={'flex'} ml='50px' mr='50px'>
            <TextField id="filled-basic" display='flex' fullWidth placeholder="Dish name" defaultValue={'Dish name'} />
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="Ingredients" />
        </Box>


        <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="60px"
        gap="10px"
        >
        {/* ROW 1 */}
            <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            >
                <TextField id="standard-basic" fullWidth defaultValue={'orange'}  placeholder="orange" />
            </Box>
            
            {/* <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            >
            <Typography variant="h2">Orange</Typography>
            </Box>
            <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            >
            <Typography variant="h2">Orange</Typography>
            </Box>
            <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            >
            <Typography variant="h2">Orange</Typography>
            </Box>
            <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            >
                <AddCircleOutlinedIcon sx={{ mr: "10px" }} />
            <Typography variant="h2">Add</Typography>
            </Box> */}
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
                Add New
            </Button>
        </Box>
    </Box>
);
};

export default Dashboard;