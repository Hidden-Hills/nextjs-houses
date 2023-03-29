import React from "react"
import axios from "axios"
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/Button';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import StarIcon from '@mui/icons-material/Star';
import LaunchIcon from '@mui/icons-material/Launch';
import HelpIcon from '@mui/icons-material/Help';
import { createTheme } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'react-calendar/dist/Calendar.css';

function houseOne(){
    return(
        <div style={{padding: '20px'}}>
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
            <Paper elevation={2} sx={{width: '100%', maxWidth: '896px', height: 'auto', minHeight: '655px'}}>
            <HouseOneInfo/>
            </Paper>
            <Paper elevation={2} sx={{width: '100%', maxWidth: '250px', minHeight: '655px', height: 'auto'}}  className="text-center bg-gray-50 text-white py-2 px-4 space-y-4">
            <div className="space-y-4 ">
            <SetDate/>
            <div className="text-center bg-zinc-300 text-black py-2 px-4 space-y-4 rounded-full">Book</div>
            <div className="text-center text-stone-800">Fees<FeesModal/></div>
            </div>
            <div className="grid grid-cols-1 divide-y">
            <div className="text-center text-stone-800">$10,500<p class="text-center pb-5">$500</p></div>
            <div className="text-center bg-zinc-300 text-black py-2 px-4 space-y-4 rounded-full">Total<p class="text-center">$11,000</p></div></div>
            <HouseOneReviews/>
            <HousePhotosModal/>
            </Paper>
            </Stack>
            
        </div>
    )
}
const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#212121',
        darker: '#053e85',
      },
      neutral: {
        main: '#27272a',
        contrastText: '#fff',
      },
    },
});
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
};

function FeesModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <div>
        <IconButton onClick={handleOpen} theme={theme} color="neutral"><HelpIcon/></IconButton>
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" >
          <Box sx={style}>
            <div className="grid grid-cols-1 divide-y">
            <div className="text-center" sx={{ mt: 2 }}>Minimum Nights: $10,500<div className="text-center" sx={{ mt: 2 }}>Homes are able to declare a minimum stay on their homes. The minimum night fee is the base per night fee, multplied by the specified minimum number of nights.</div></div>
            <div className="text-center" sx={{ mt: 2 }}>Premium Housing: $500<div className="text-center" sx={{ mt: 2 }}>The Premium Housing fee is for homes that cost $1,000 or more per night.</div></div>
            </div>
          </Box>
        </Modal>
      </div>
    );
}  

function ReviewsModal(){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <div>
        <button onClick={handleOpen} theme={theme} color="primary" className="p-2 text-decoration-line: underline text-lg">1 Review</button>
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" >
          <Box sx={style}>
            <div className="grid grid-cols-1 divide-y">
            <div className="text-center" sx={{ mt: 2 }}>Donovan: Amazing stay, definetly enjoyed it here!</div>
            </div>
          </Box>
        </Modal>
      </div>
    );
}

function HousePhotosModal(){
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return(
    <div>
      <button className="p-2 text-decoration-line: underline text-lg text-black" onClick={handleOpen} theme={theme} color="primary">See all Photos</button>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title">
        <Box sx={style}>
          <div className="grid grid-cols-1 divide-y">
            <div className="text-center" sx={{mt: 2}}>Placeholder for Photos</div>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

function SetDate() {
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label="Start Date" id="start_date" />
        <DatePicker label="End Date"  id="end_date"/>
      </LocalizationProvider>
    );
}

class HouseOneInfo extends React.Component{

    constructor(props){
      super(props)
      
      this.state = {
        houses: []
      }
    } 
    
    componentDidMount(){
      var houses = {
        method: 'GET',
        url: 'http://127.0.0.1:8000/houses/',
        Allow: 'GET, POST, HEAD, OPTIONS',
        Vary: 'Accept',
        headers: {
            "Content-type": "application/json",
        }
      };
      axios.request(houses)
      .then(response=>{
        this.setState({
            houses: response.data
        })
        console.log(response.data)
      })
    }
    render(){
      if(!this.state.houses[0]){
        return(
            <p>Loading</p>
        )
      }
      if(this.state.houses[0]){
        return(
        <div className=""> 
        <div className="grid grid-cols-1 divide-y max-w-4xl">  
            <NextJsCarousel/>
            <p className="font-sans text-lg font-small text-center">{this.state.houses[0].description}</p>
            </div>   
        </div>
        )
    }
  }
}

class HouseOneReviews extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
          houses: []
        }
      } 
      
      componentDidMount(){
        var houses = {
          method: 'GET',
          url: 'http://127.0.0.1:8000/houses/',
          Allow: 'GET, POST, HEAD, OPTIONS',
          Vary: 'Accept',
          headers: {
              "Content-type": "application/json",
          }
        };
        axios.request(houses)
        .then(response=>{
          this.setState({
              houses: response.data
          })
          console.log(response.data)
        })
      }
      render(){
        if(!this.state.houses[0]){
          return(
              <p>Loading</p>
          )
        }
        if(this.state.houses[0]){
          return(
          <div className="p-4"> 
          <div className="">  
          <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
          <Paper elevation={2} sx={{width: '100%', maxWidth: '250px', maxHeight: '400px', height: 'auto'}}  className="text-center text-black py-2 px-2">
            <div className="space-y-4"></div>
            <div className=""/>
            <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}><StarIcon/><p className="px-2 text-xl">5.0</p> <Divider color="#121212" orientation="vertical" flexItem/><ReviewsModal/></div>  
            </Stack>
            </Paper>
          </Stack> 
            </div>   
          </div>
          )
      }
    }
}

class NextJsCarousel extends React.Component{
    render(){
        return(
            <div className="flex flex-row justify-center items-center ">
            <Paper className="max-w-4xl" elevation={0} sx={{width: '100%', height: 'auto'}}> 
       
                <div>
                  <img src="/images/homeOne1.png" alt="image1"/>
                </div>
    
            </Paper>
            </div>
        )
    }
}
export default houseOne