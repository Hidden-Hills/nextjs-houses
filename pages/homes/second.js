import React from "react"
import axios from "axios"
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
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
import Avatar from '@mui/material/Avatar';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function houseTwo(){
    return(
        <div className="-space-y-6">
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
            <Paper elevation={0} sx={{width: '100%', maxWidth: '1100', height: 'auto'}} className="bg-white">
            <HouseInformation/>
            </Paper>
            </Stack>
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{paddingTop: '10px', position: ''}} className="">
            <Grid container direction="row" justifyContent="center" alignItems="center">
            <HouseDescription/>
            <Paper elevation={2} sx={{width: '100%', maxWidth: '350px', height: 'auto'}}  className="text-center text-white py-2 px-4 space-y-4 ">
            <div className="space-y-4 ">
            <SetDate/>
            <button className="text-white bg-gradient-to-r from-red-500 to-pink-500 hover:bg-gradient-to-br rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-80">Reserve</button>
            <div className="text-center font-small text-stone-800 ">Fees</div>
            </div>
            <div className="flex space-x-32">
            <div className="text-black font-light	text-center text-decoration-line: underline"><NightFeesModal/></div>
            <div className="text-black text-medium">$2,570</div>
            </div>
            <div className="flex space-x-40">
            <div className="text-black	text-center text-decoration-line: underline"><CleaningFeesModal/></div>
            <div className="text-black text-medium">$180</div>
            </div><div className="flex space-x-44">
            <div className="text-black font-light	text-center text-decoration-line: underline"><ServiceFeeModal/></div>
            <div className="text-black text-medium">$98</div>
            </div>
            <Divider sx={{color: '#a9a9a9', backgroundColor: 'a9a9a9'}} orientation="horizontal" flexItem/>
            <div className="flex">
            <div className="text-black text-center font-semibold">Total before taxes</div>
            <div className="text-black font-semibold" style={{marginLeft: '105px'}}>$2,848</div>
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
  maxWidth: '1200px',
  minWidth: 350,
  borderRadius: '10px',
  height: 'auto',
  p: 4, 
}
const itemData = [
  {
    img: '/houseTwo/homeTwo.webp',
    title: 'Exterior',
    featured: true,
  },
  {
    img: '/houseTwo/1.webp',
    title: 'Pool View',

  },
  {
    img: '/houseTwo/2.webp',
    title: 'Living Room',

  },
  {
    img: '/houseTwo/3.webp',
    title: 'Bedroom',
    featured: true,
    
  }
]
const tomorrow = dayjs().add(1, 'day');

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function StandardImageList() {
  return (
    <ImageList
      sx={{
        maxWidth: 900,
        maxHeight: 650,
        minWidth: 350,
        height: 'auto',
        transform: 'translateZ(0)',
        paddingTop: '5px',
        paddingBottom: '5px',
        borderRadius: '20px'
        
      }}
      rowHeight={350}
      gap={3}
    >
      {itemData.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows}>
            <img {...srcset(item.img, 250, 200, rows, cols)} alt={item.title} loading="lazy" />
            <ImageListItemBar sx={{background:'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' + 'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)', }} title={item.title} position="top"/></ImageListItem>
        );
      })}
    </ImageList>
  );
}

function MainPicture(){
  return(
    <div className="flex flex-row justify-center items-center relative pt-8 ">
    <Paper className="flex flex-row justify-center items-center relative" elevation={0} sx={{width: '100%', height: 'auto', maxWidth: '1000px'}}> 
        <div>
          <img src="/houseTwo/homeTwo.webp" alt="image1" className="rounded-lg"/>
          <button class="absolute bottom-0 right-0 bg-white text-white p-2 rounded m-2"><HousePhotosModal/></button>
        </div>
    </Paper>
    </div>
)
}

function NightFeesModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <div>
        <button className="text-decoration-line: underline" onClick={handleOpen} theme={theme} color="neutral">$514 x 5 nights</button>
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" >
          <Box sx={style} >
            <div className="space-y-6">
            <div className="text-center" sx={{ mt: 2 }}>Minimum Nights: $2,570
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
          <div className="text-center" sx={{ mt: 2 }}>Cleaning Fee: $180
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
          <div className="text-center" sx={{ mt: 2 }}>Service Fee: $98
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
        <button onClick={handleOpen} theme={theme} color="primary" className="p-2 text-decoration-line: underline text-lg">3 Reviews</button>
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" >
          <Box sx={style}>
            <div className="grid grid-cols-1">
            <Stack direction="row" spacing={2}>
            <Avatar>J</Avatar><p style={{justifyContent:"flex-start", alignItems:"center", fontSize: '14px'}}>James<br></br><p className="opacity-75">April 2023</p></p>
            </Stack>
            <p className="pt-4 pb-8">A quiet oasis perfect for relaxing.</p>
            <Stack direction="row" spacing={2}>
            <Avatar>K</Avatar><p style={{justifyContent:"flex-start", alignItems:"center", fontSize: '14px'}}>Kimberly<br></br><p className="opacity-75">April 2023</p></p>
            </Stack>
            <p className="pt-4 pb-8">Modern beautiful space.</p>
            <Stack direction="row" spacing={2}>
            <Avatar>T</Avatar><p style={{justifyContent:"flex-start", alignItems:"center", fontSize: '14px'}}>Thomas<br></br><p className="opacity-75">April 2023</p></p>
            </Stack>
            <p className="pt-4 pb-8">Beautiful and spacious property. Super clean space. Amazing backyard!</p>
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
      <div className="overflow-hidden ">
        <Button className=" font-normal flex" onClick={handleOpen} theme={theme} color="primary" sx={{textTransform: "none"}}><img src="/icons/icons8-grid-view-22.png" className=""/>Show all photos</Button>
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title">
          <Box elevation={0} sx={pictureBox}>
            <div className="grid grid-cols-1 divide-y overflow-hidden">
              <StandardImageList/>
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

class HouseInformation extends React.Component{

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
class HouseDescription extends React.Component{

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
      <MainElement/> 
      </div>
      )
  }
}
}

class MainElement extends React.Component{

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

      <HouseReviews/>
      
      </CardContent>
      </Paper>
      </Stack>
      </div>
      )
  }
}
}

class HouseReviews extends React.Component{
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
          <div className="pt-5"> 
          <Paper elevation={0}  sx={{maxWidth: '1000px'}}>
          <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
          <img src="/icons/icons8-star-filled-20.png" alt="star"/><p className="text-lg">{this.state.houses[0].ratings}.0</p>
          <Stack direction="row" alignItems="center" spacing={0.5}><FiberManualRecordIcon sx={{color: '#121212', backgroundColor: 'a9a9a9', fontSize: '5px'}}/> <ReviewsModal/></Stack>
          </Stack>
          </Paper>
          
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
        <img src='/icons/icons8-open-door-25.png' alt="home office" className="text-center max-w-full h-full"/><p>Self check-in</p>
        </Stack>
        <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
        <img src='/icons/icons8-gold-medal-25.png' alt="home office" className="text-left max-w-full h-full"/><p>Hideaway is a Superhost</p>
        </Stack>
        <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
        <img src='/icons/icons8-important-month-25.png' alt="home office" className="text-center max-w-full h-full"/><p>Free cancellation for 48 hours</p>
        </Stack>
        <Divider sx={{color: '#a9a9a9', backgroundColor: 'a9a9a9', marginTop: '20px', marginBottom: '20px'}} orientation="horizontal" flexItem/>
        <Paper elevation={0} sx={{width: '100%', maxWidth: '1000px', height: 'auto', margin: 'auto'}}>
        <p className="text-medium text-center max-w-lg	m-auto ">{this.state.houses[0].description}...<p className="text-medium text-decoration-line: underline"><FullHomeDescription/></p></p>
        </Paper>
        <Divider sx={{color: '#a9a9a9', backgroundColor: 'a9a9a9', marginTop: '20px', marginBottom: '20px'}} orientation="horizontal" flexItem/>
        
      </div>
      )
  }
}
}

export default houseTwo