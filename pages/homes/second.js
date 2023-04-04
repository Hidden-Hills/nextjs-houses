import React from "react"
import axios from "axios"
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/Button';
import CollectionsIcon from '@mui/icons-material/Collections';
import Divider from '@mui/material/Divider';
import StarIcon from '@mui/icons-material/Star';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { createTheme } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


function houseTwo(){
    return(
      
        <div style={{padding: '20px'}}>
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
            <Paper elevation={0} sx={{width: '100%', maxWidth: '1100', height: 'auto'}} className="bg-white">
            <HouseOneInfo/>
            </Paper>
            </Stack>
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{paddingTop: '10px', position: ''}} className="">
            <Grid container direction="row" justifyContent="center" alignItems="center">
            <HouseOneDesc/>
            <Paper elevation={2} sx={{width: '100%', maxWidth: '350px', height: 'auto'}}  className="text-center text-white py-2 px-4 space-y-4 ">
            <div className="space-y-4 ">
            <SetDate/>
            <button className="text-white bg-gradient-to-r from-red-500 to-pink-500 hover:bg-gradient-to-br rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-80">Reserve</button>
            <div className="text-center font-small text-stone-800 ">Fees</div>
            </div>
            <div className="flex space-x-28">
            <div className="text-black font-light	text-center text-decoration-line: underline"><NightFeesModal/></div>
            <div className="text-black text-medium">$7,013</div>
            </div>
            <div className="flex space-x-40">
            <div className="text-black	text-center text-decoration-line: underline"><CleaningFeesModal/></div>
            <div className="text-black text-medium">$375</div>
            </div><div className="flex space-x-40">
            <div className="text-black font-light	text-center text-decoration-line: underline"><ServiceFeeModal/></div>
            <div className="text-black text-medium">$1,043</div>
            </div>
            <Divider sx={{color: '#a9a9a9', backgroundColor: 'a9a9a9'}} orientation="horizontal" flexItem/>
            <div className="flex">
            <div className="text-black text-center font-semibold">Total before taxes</div>
            <div className="text-black font-semibold" style={{marginLeft: '105px'}}>$8,431</div>
            </div>
            </Paper>
            </Grid>
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
const descriptionStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 700,
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
}
const pictureBox = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
}
const tomorrow = dayjs().add(1, 'day');

function NightFeesModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <div>
        <button className="text-decoration-line: underline" onClick={handleOpen} theme={theme} color="neutral">$1,409 x 5 nights</button>
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" >
          <Box sx={style} >
            <div className="space-y-6">
            <div className="text-center" sx={{ mt: 2 }}>Minimum Nights: $7,013
            <div className="text-center" sx={{ mt: 2 }}>Homes are able to declare a minimum stay on their homes. The minimum night fee is the base per night fee, multplied by the specified minimum number of nights.</div></div>
            </div>
          </Box>
        </Modal>
      </div>
    );
}  

function CleaningFeesModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button className="text-decoration-line: underline" onClick={handleOpen} theme={theme} color="neutral">Cleaning Fee</button>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" >
        <Box sx={style} >
          <div className="space-y-6">
          <div className="text-center" sx={{ mt: 2 }}>Cleaning Fee: $375
          <div className="text-center" sx={{ mt: 2 }}>One-time fee charged by host to cover the cost of cleaning their space.</div></div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

function ServiceFeeModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button className="text-decoration-line: underline" onClick={handleOpen} theme={theme} color="neutral">Service Fee</button>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" >
        <Box sx={style} >
          <div className="space-y-6">
          <div className="text-center" sx={{ mt: 2 }}>Cleaning Fee: $1,043
          <div className="text-center" sx={{ mt: 2 }}>This helps us run our platform and offer services like 24/7 support on your trip.</div></div>
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
            <div className="text-center " sx={{ mt: 2 }}>Donovan: Amazing stay, definetly enjoyed it here!</div>
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
      <div className="h-8 ">
        <Button className=" font-normal flex" onClick={handleOpen} theme={theme} color="primary" sx={{textTransform: "none"}}><img src="/images/icons8-grid-view-22.png" className=""/>Show all photos</Button>
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title">
          <Box elevation={0} sx={pictureBox}>
            <div className="grid grid-cols-1 divide-y">
              <NextJsCarousel/>
            </div>
          </Box>
        </Modal>
      </div>
    )
  }

function FullHomeDescription(){
  const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <div>
        <button onClick={handleOpen} theme={theme} color="primary" className="p-2 text-decoration-line: underline text-lg">See More<ArrowForwardIosIcon/></button>
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" >
          <Box sx={descriptionStyle}>
            <div className="grid grid-cols-1 space-y-4">
            <div className="text-left text-2xl font-semibold" sx={{ mt: 2 }}>The space</div>
            <div className="text-left" sx={{ mt: 2 }}>The Black Sky House is a special resort-style vacation retreat and newly build in 2022. The house sits on a 2 acres land with big and beautiful Joshua Trees surrounding the property, the private pool and Jacuzzi are super beautiful and comfortable during all seasons. It perfectly satisfy families and friends gathering with high privacy.</div>
            <div className="text-left text-medium" sx={{ mt: 2 }}>The property is a modern architecture, situated in a peaceful and quiet neighborhood while maintaining the feeling of cool isolation whether indoor or outdoor. The decor is luxurious, yet very comfortable. Restaurants, shops, and the National Park are all a short 10-minute drive away.</div>
            <div className="text-left text-medium" sx={{ mt: 2 }}>The property features a spacious kitchen for gourmet cooking. Open layout living and dining area, it has one master bedroom with an ensuite bathroom and 2 guest bedrooms, a comfortable queen size sofa bed, plus one full bathroom. You and your family/friends can enjoy the pools and nature with high privacy. Our indoors has modern nest cooling system which always keeps the house comfortable in all seasons.</div>
            </div>
          </Box>
        </Modal>
      </div>
    );
}

function SetDate() {
    return (
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label="Start Date" id="start_date" disablePast="true"/>
        <DatePicker label="End Date"  id="end_date" disablePast="true" minDate={tomorrow} />
      </LocalizationProvider>
      </Stack>
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
        url: 'https://planets.pythonanywhere.com/houses/',
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
          <MainPicture/>
          <Paper elevation={0} sx={{width: '100%', maxWidth: '400px', height: 'auto', minHeight: '400', margin: 'auto'}}>
          <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{paddingTop: '10px'}}></Stack>
          </Paper>
        </div>
        )
    }
  }
}
class HouseOneDesc extends React.Component{

  constructor(props){
    super(props)
    
    this.state = {
      houses: []
    }
  } 
  
  componentDidMount(){
    var houses = {
      method: 'GET',
      url: 'https://planets.pythonanywhere.com/houses/',
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
      <div className="text-center" style={{marginRight: '90px'}}>  
      <MainTxt/> 
      </div>
      )
  }
}
}

class MainTxt extends React.Component{

  constructor(props){
    super(props)
    
    this.state = {
      houses: []
    }
  } 
  
  componentDidMount(){
    var houses = {
      method: 'GET',
      url: 'https://planets.pythonanywhere.com/houses/',
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
      <div> 
      <Stack direction="column" justifyContent="center" alignItems="flex-start" spacing={2}>
      <Paper elevation={0}  sx={{maxWidth: '1000px'}}>
      <CardContent>
      <p className="text-2xl text-medium text-left" style={{marginBottom: '10px'}}>Entire home hosted by Hideaway</p>
      <Stack direction="row" alignItems="center" className="space-x-2">
      <p className="text-medium text-left">{this.state.houses[0].maxGuests} guests</p>
      <FiberManualRecordIcon sx={{color: '#121212', backgroundColor: 'a9a9a9', fontSize: '5px'}}/>
      <p className="text-medium text-left">{this.state.houses[0].bedRooms} bedrooms</p>
      <FiberManualRecordIcon sx={{color: '#121212', backgroundColor: 'a9a9a9', fontSize: '5px'}}/>
      <p className="text-medium text-left">{this.state.houses[0].bedRooms} beds</p>
      <FiberManualRecordIcon sx={{color: '#121212', backgroundColor: 'a9a9a9', fontSize: '5px'}}/>
      <p className="text-medium text-left">{this.state.houses[0].bathRooms} baths</p>
      </Stack>

      <Divider sx={{color: '#a9a9a9', backgroundColor: 'a9a9a9', marginTop: '20px', marginBottom: '20px'}} orientation="horizontal" flexItem/>

      <IconDescriptors/>
      
      </CardContent>
      </Paper>
      </Stack>
      </div>
      )
  }
}
}

class HouseTwoReviews extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
          houses: []
        }
      } 
      
      componentDidMount(){
        var houses = {
          method: 'GET',
          url: 'https://planets.pythonanywhere.com/houses/',
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

class IconDescriptors extends React.Component{
  constructor(props){
    super(props)
    
    this.state = {
      houses: []
    }
  } 
  
  componentDidMount(){
    var houses = {
      method: 'GET',
      url: 'https://planets.pythonanywhere.com/houses/',
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
        <div className="space-y-6">
        <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
        <img src='/images/icons8-open-door-25.png' alt="home office" className="text-center max-w-full h-full"/><p>Self check-in</p>
        </Stack>
        <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
        <img src='/images/icons8-gold-medal-25.png' alt="home office" className="text-left max-w-full h-full"/><p>Hideaway is a Superhost</p>
        </Stack>
        <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
        <img src='/images/icons8-important-month-25.png' alt="home office" className="text-center max-w-full h-full"/><p>Free cancellation for 48 hours</p>
        </Stack>
        <Divider sx={{color: '#a9a9a9', backgroundColor: 'a9a9a9', marginTop: '20px', marginBottom: '20px'}} orientation="horizontal" flexItem/>
        <Paper elevation={0} sx={{width: '100%', maxWidth: '1000px', height: 'auto', margin: 'auto'}}>
        <p className="text-medium text-center max-w-lg	m-auto ">{this.state.houses[0].description}...<p className="text-medium text-decoration-line: underline"><FullHomeDescription/></p></p>
        </Paper>
      </div>
      )
  }
}
}

function MainPicture(){
  return(
    <div className="flex flex-row justify-center items-center relative ">
    <Paper className="flex flex-row justify-center items-center relative" elevation={0} sx={{width: '100%', height: 'auto', maxWidth: '1000px'}}> 
        <div>
          <img src="/images/homeTwo.webp" alt="image1" className="rounded-lg"/>
          <button class="absolute bottom-0 right-0 bg-white text-white p-2 rounded m-2"><HousePhotosModal/></button>

        </div>
    </Paper>
    </div>
)
}
class NextJsCarousel extends React.Component{
    render(){
        return(
            <div className="flex flex-row justify-center items-center ">
            <Paper className="flex flex-row justify-center items-center  max-w-4xl" elevation={0} sx={{width: '100%', height: 'auto'}}> 
            <Carousel>
                <div>
                  <img src="/images/homeOne1.webp" alt="image1"/>
                </div>
                <div>
                  <img src="/images/homeOne1.webp" alt="image1"/>
                </div>
                <div>
                  <img src="/images/homeOne1.webp" alt="image1"/>
                </div>
                <div>
                  <img src="/images/homeOne1.webp" alt="image1"/>
                </div>
                </Carousel>
            </Paper>
            </div>
        )
    }
}
export default houseTwo