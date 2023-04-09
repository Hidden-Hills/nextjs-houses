import React from "react"
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Link from "next/link"
import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Divider from '@mui/material/Divider';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { createTheme } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useEffect, useState } from "react";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'react-calendar/dist/Calendar.css';
import Avatar from '@mui/material/Avatar';
import dayjs from 'dayjs';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Backdrop from '@mui/material/Backdrop';
import Image from "next/image"

function houseSix(){
    return(
        <div>
            <HouseSix/>
        </div>
    )
}


function HouseSix(){
  
  const [data, setData] = useState([])
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  useEffect(() =>{fetch('https://planets.pythonanywhere.com/houses/6/').then((response) => response.json()).then((data) => setData(data))},[])
    {
      return(
        <div>
        <div class="relative h-10 w-10 p-8"><div class="absolute left-0 top-0 h-2 w-2 pl-4 pt-5">
        <Link href="/homes"><input type="image" src="/icons/icons8-back-arrow-30.png" alt="star"></input></Link></div>
        </div>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
        <Paper elevation={0} sx={{width: '100%', maxWidth: '1000px', height: 'auto'}} className="bg-white">
        <div className="flex flex-row justify-center items-center relative">
        <Paper className="flex flex-row justify-center items-center relative" elevation={0} sx={{width: '100%', height: 'auto', maxWidth: '1000px'}}> 
        <div>
        <Image src="/houseSix/homeSix.webp" alt="image1" className="rounded-lg" width={1000} height={500} maxWidth={1000}/>
        <div class="absolute bottom-0 right-0 bg-white text-white p-2 rounded m-2"><HousePhotosModal/></div>
        </div>
        </Paper>
        </div>
        </Paper>
        </Stack>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{paddingTop: '10px', position: ''}} className="">
        <Grid container direction="row" justifyContent="center" alignItems="center">
        <div className="text-center" style={{marginRight: '90px'}}>  
        <div> 
        <Stack direction="column" justifyContent="center" alignItems="flex-start" spacing={2}>
        <Paper elevation={0}  sx={{maxWidth: '1000px'}}>
        <CardContent>
        <div className="text-2xl text-medium text-left" style={{marginBottom: '10px'}}>Entire home hosted by Homestead Modern</div>
        <Stack direction="row" alignItems="center" className="space-x-2">
        <div className="text-medium text-left">{data.maxGuests} guests</div>
        <FiberManualRecordIcon sx={{color: '#121212', backgroundColor: 'a9a9a9', fontSize: '5px'}}/>
        <div className="text-medium text-left">{data.bedRooms} bedrooms</div>
        <FiberManualRecordIcon sx={{color: '#121212', backgroundColor: 'a9a9a9', fontSize: '5px'}}/>
        <div className="text-medium text-left">{data.bedRooms} beds</div>
        <FiberManualRecordIcon sx={{color: '#121212', backgroundColor: 'a9a9a9', fontSize: '5px'}}/>
        <div className="text-medium text-left">{data.bathRooms} baths</div>
        </Stack>
        <Divider sx={{color: '#a9a9a9', backgroundColor: 'a9a9a9', marginTop: '20px', marginBottom: '20px'}} orientation="horizontal" flexItem/>
        <div className="space-y-6">
        <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
        <Image src='/icons/icons8-home-office-25.png' alt="home office" className="text-left max-w-full h-full" width={25} height={25} maxWidth={25}/><div>Dedicated workspace</div>
        </Stack>
        <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
        <Image src='/icons/icons8-open-door-25.png' alt="open door" className="text-center max-w-full h-full" width={25} height={25} maxWidth={25}/><div>Self check-in</div>
        </Stack>
        <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
        <Image src='/icons/icons8-gold-medal-25.png' alt="important month" className="text-center max-w-full h-full" width={25} height={25} maxWidth={25}/><div>Homestead Modern is a Superhost</div>
        </Stack>
        <Divider sx={{color: '#a9a9a9', backgroundColor: 'a9a9a9', marginTop: '20px', marginBottom: '20px'}} orientation="horizontal" flexItem/>
        <Paper elevation={0} sx={{width: '100%', maxWidth: '1000px', height: 'auto', margin: 'auto'}}>
        <div className="text-medium text-center max-w-lg	m-auto ">{data.description}...<div className="text-medium text-decoration-line: underline"><FullHomeDescription/></div></div>
        <Divider sx={{color: '#a9a9a9', backgroundColor: 'a9a9a9', marginTop: '20px', marginBottom: '20px'}} orientation="horizontal" flexItem/>
        </Paper>
        </div>
        <div className="pt-5"> 
        <Paper elevation={0}  sx={{maxWidth: '1000px'}}>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
        <Image src="/icons/icons8-star-filled-20.png" alt="star" width={20} height={20} maxWidth={20}/><div className="text-lg">{data.ratings}</div>
        <Stack direction="row" alignItems="center" spacing={0.5}><FiberManualRecordIcon sx={{color: '#121212', backgroundColor: 'a9a9a9', fontSize: '5px'}}/> <ReviewsModal/></Stack>
        </Stack>
        </Paper>
        </div>
        </CardContent>
        </Paper>
        </Stack>
        </div> 
        </div>
        <Paper elevation={2} sx={{width: '100%', maxWidth: '350px', height: 'auto'}}  className="text-center text-white py-2 px-4 space-y-4 ">
        <div className="space-y-4 ">
        <div>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label="Start Date" id="start_date" disablePast={true} className="pb-5" />
        <DatePicker label="End Date"  id="end_date" disablePast={true} minDate={tomorrow} className="pb-5" />
        </LocalizationProvider>
        </Stack>
        <button onClick={handleToggle} className="text-white bg-gradient-to-r from-red-500 to-pink-500 hover:bg-gradient-to-br rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-80">Reserve</button>
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open} onClick={handleClose}>
        <Box sx={style} >
        <div className="space-y-6">
        <div className="text-center text-black" sx={{ mt: 2 }}>{data.title} Booked!</div>
        </div>
        </Box>
        </Backdrop>
        </div>
        <div className="text-center font-small text-stone-800">Fees</div>
        </div>
        <div className="flex space-x-28">
        <div className="text-black font-light text-center text-decoration-line: underline"><NightFeesModal/></div>
        <div className="text-black text-medium">$6,415</div>
        </div>
        <div className="flex space-x-40">
        <div className="text-black text-center text-decoration-line: underline"><CleaningFeesModal/></div>
        <div className="text-black text-medium" style={{marginLeft: '155px'}}>$400</div>
        </div><div className="flex space-x-40">
        <div className="text-black font-light text-center text-decoration-line: underline"><ServiceFeeModal/></div>
        <div className="text-black text-medium" style={{marginLeft: '167px'}}>$419</div>
        </div>
        <Divider sx={{color: '#a9a9a9', backgroundColor: 'a9a9a9'}} orientation="horizontal" flexItem/>
        <div className="flex">
        <div className="text-black text-center font-semibold">Total before taxes</div>
        <div className="text-black font-semibold" style={{marginLeft: '105px'}}>$7,234</div>
        </div>
        </Paper>
        </Grid>
        </Stack>
        </div>  
      )
}
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
  maxWidth: 500,
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
  opacity: '88%'
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
      img: '/houseSix/homeSix.webp',
      title: 'View of the Mountains',
      featured: true,
  
  
    },
    {
      img: '/houseSix/1.webp',
      title: 'Interior',
  
    },
    {
      img: '/houseSix/2.webp',
      title: 'Kitchen',
  
    },
    {
      img: '/houseSix/3.webp',
      title: 'Bedroom',
      featured: true,
      
    }
]
const tomorrow = dayjs().add(1, 'day');

const srcset = (image, width, height, rows = 1, cols = 1) =>{
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const StandardImageList = () =>{
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

const NightFeesModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <div>
        <button className="text-decoration-line: underline" onClick={handleOpen} theme={theme} color="neutral">$1,283 x 5 nights</button>
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" >
          <Box sx={style} >
            <div className="space-y-6">
            <div className="text-center" sx={{ mt: 2 }}>Minimum Nights: $6,415
            <div className="text-center" sx={{ mt: 2 }}>Homes are able to declare a minimum stay on their homes. The minimum night fee is the base per night fee, multplied by the specified minimum number of nights.</div></div>
            </div>
          </Box>
        </Modal>
      </div>
    );
}  

const CleaningFeesModal = () =>{
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button className="text-decoration-line: underline" onClick={handleOpen} theme={theme} color="neutral">Cleaning Fee</button>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" >
        <Box sx={style} >
          <div className="space-y-6">
          <div className="text-center" sx={{ mt: 2 }}>Cleaning Fee: $400
          <div className="text-center" sx={{ mt: 2 }}>One-time fee charged by host to cover the cost of cleaning their space.</div></div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

const ServiceFeeModal = () =>{
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button className="text-decoration-line: underline" onClick={handleOpen} theme={theme} color="neutral">Service Fee</button>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" >
        <Box sx={style} >
          <div className="space-y-6">
          <div className="text-center" sx={{ mt: 2 }}>Cleaning Fee: $419
          <div className="text-center" sx={{ mt: 2 }}>This helps us run our platform and offer services like 24/7 support on your trip.</div></div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

const ReviewsModal = () =>{
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button onClick={handleOpen} theme={theme} color="primary" className="p-2 text-decoration-line: underline text-lg">1 Review</button>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" >
        <Box sx={style}>
          <div className="grid grid-cols-1">
          <Stack direction="row" spacing={2}>
          <Avatar>J</Avatar><div style={{justifyContent:"flex-start", alignItems:"center", fontSize: '14px'}}>Jacob<br></br><div className="opacity-75">April 2023</div></div>
          </Stack>
          <div className="pt-4">We had a very good experience, the area and natural surroundings are so peaceful and magical, you feel like you're in a different dimension. Homestead Modern was very responsive. The place was so intact, no assistance was needed during our stay. I highly recommend this place for anyone who wants to connect with the natural wonders of Gods creation.</div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

const HousePhotosModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return(
    <div className="overflow-hidden">
      <Button className=" font-normal flex" onClick={handleOpen} theme={theme} color="primary" sx={{textTransform: "none"}}><Image src="/icons/icons8-grid-view-22.png" className="" width={22} height={22} maxWidth={22}/>Show all photos</Button>
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

const FullHomeDescription = () =>{
  const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <div>
        <button onClick={handleOpen} theme={theme} color="primary" className="p-2 text-decoration-line: underline text-lg">See More<ArrowForwardIosIcon/></button>
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" >
          <Box sx={descriptionStyle}>
            <div className="grid grid-cols-1 space-y-4">
            <div className="text-left text-2xl font-semibold" sx={{ mt: 2 }}>About this space</div>
            <div className="text-left" sx={{ mt: 2 }}>One of the most iconic architectural gems in the High Desert is now available for guests. Placed among boulders as if it landed at night, Oller & Pejic Architecture’s Black Desert House sits on a secluded perch in one of the area’s most exclusive neighborhoods. Overlooking 440 private acres with landscape that rivals any location in the Joshua Tree National Park, the Black Desert House is a luxury oasis with hot tub and heated pool that remains connected to the elemental rawness of the desert.</div>
            <div className="text-left text-xl font-semibold" sx={{ mt: 2}}>The space</div>
            <div className="text-left text-medium" sx={{ mt: 2 }}>Brought to life by Oller & Pejic Architecture, this iconic home presents a contrast between clean, modern lines and the rugged desert landscape. Enter via the gated driveway to find the striking black facade welcoming you. Walk up the stairs to the courtyard featuring a mature olive tree, and let the magic reveal itself to you.</div>
            </div>
          </Box>
        </Modal>
      </div>
    );
}

export default houseSix