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

function houseSeven(){
    return(
        <div>
            <HouseSeven/>
        </div>
    )
}


function HouseSeven(){
  
  const [data, setData] = useState([])
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  useEffect(() =>{fetch('https://planets.pythonanywhere.com/houses/8/').then((response) => response.json()).then((data) => setData(data))},[])
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
        <Image src="/houseEight/homeEight.webp" alt="image1" className="rounded-lg" width={1000} height={500} maxWidth={1000}/>
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
        <div className="text-2xl text-medium text-left" style={{marginBottom: '10px'}}>Luxury stay in Malibu, California</div>
        <Stack direction="row" alignItems="center" className="space-x-2">
        <div className="text-medium text-left">{data.maxGuests} guests</div>
        <FiberManualRecordIcon sx={{color: '#121212', backgroundColor: 'a9a9a9', fontSize: '5px'}}/>
        <div className="text-medium text-left">{data.bedRooms} bedrooms</div>
        <FiberManualRecordIcon sx={{color: '#121212', backgroundColor: 'a9a9a9', fontSize: '5px'}}/>
        <div className="text-medium text-left">{data.bedRooms} beds</div>
        <FiberManualRecordIcon sx={{color: '#121212', backgroundColor: 'a9a9a9', fontSize: '5px'}}/>
        <div className="text-medium text-left">{data.bathRooms} baths</div>
        </Stack>
        <div className="space-y-6">       
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
        <div className="text-black text-medium">$6,000</div>
        </div>
        <div className="flex">
        <div className="text-black	text-center text-decoration-line: underline"><HospitalityFeeModal/></div>
        <div className="text-black text-medium" style={{marginLeft: '120px'}}>$1,000</div>
        </div>
        <div className="flex space-x-28">
        <div className="text-white font-light text-center text-decoration-line: underline"><StealthModal/></div>
        <div className="text-white text-medium"></div>
        </div>
        <Divider sx={{color: '#a9a9a9', backgroundColor: 'a9a9a9'}} orientation="horizontal" flexItem/>
        <div className="flex">
        <div className="text-black text-center font-semibold">Total before taxes</div>
        <div className="text-black font-semibold" style={{marginLeft: '95px'}}>$15,780</div>
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
    img: '/houseEight/homeEight.webp',
    title: 'Living Room',
    featured: true,


  },
  {
    img: '/houseEight/1.webp',
    title: 'Exterior & Pool',

  },
  {
    img: '/houseEight/2.webp',
    title: 'Kitchen',

  },
  {
    img: '/houseEight/3.webp',
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
        <button className="text-decoration-line: underline" onClick={handleOpen} theme={theme} color="neutral">$3,156 x 5 nights</button>
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" >
          <Box sx={style} >
            <div className="space-y-6">
            <div className="text-center" sx={{ mt: 2 }}>Minimum Nights: $15,780
            <div className="text-center" sx={{ mt: 2 }}>Homes are able to declare a minimum stay on their homes. The minimum night fee is the base per night fee, multplied by the specified minimum number of nights.</div></div>
            </div>
          </Box>
        </Modal>
      </div>
    );
}  

const HospitalityFeeModal = () =>{
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button className="text-decoration-line: underline" onClick={handleOpen} theme={theme} color="neutral">Hospitality Fees</button>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" >
        <Box sx={style} >
          <div className="space-y-6">
          <div className="text-center" sx={{ mt: 2 }}>Hospitality Fee: $1,000
          <div className="text-center" sx={{ mt: 2 }}>This fee covers the cleaning costs and services that come with the property.</div></div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

const StealthModal = () =>{
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="text-decoration-line: underline " onClick={handleOpen} theme={theme} color="neutral"></div>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" >
        <Box sx={style} >
          <div className="space-y-6">
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
          <Avatar>S</Avatar><div style={{justifyContent:"flex-start", alignItems:"center", fontSize: '14px'}}>Scott<br></br><div className="opacity-75">April 2023</div></div>
          </Stack>
          <div className="pt-5 pb-5">Malibu Rocky Oaks is at a perfect location, a very beautiful house, secluded with amazing views. The place is great, very clean, and has everything you need for a fun-filled weekend in Malibu. The pool and hot tub were so relaxing and the music system was amazing. Walking the fabulous driveway made for a great workout in the morning. Stay a While Villas was also very helpful since the beginning, available at all times whenever I had any questions. Totally recommend MRO.</div>
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
            <div className="text-left" sx={{ mt: 2 }}>Warm days, cool nights, and volcanic soils create Malibu Rocky Oaks’ unique set of ripening conditions at this Tuscan-style estate. Spend your days exploring the vineyards and uncork a bottle a or two and watch the sunset from the rooftop pergola. On your downtime, stretch out by the pool or head south for an afternoon on Malibu Beach.</div>
            <div className="text-left" sx={{ mt: 2 }}>Copyright © Luxury Retreats. All rights reserved.</div>
            <div className="text-left text-xl font-semibold" sx={{ mt: 2}}>The space</div>
            <div className="text-left text-medium" sx={{ mt: 2 }}>BEDROOM & BATHROOM </div>
            </div>
            <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
            <div>Bedroom 1: King size bed, Ensuite bathroom with stand-alone rain shower & bathtub, Dual vanity, Terrace, Mountain view, Ocean view.</div>
            <div>Bedroom 2: King size bed, Ensuite bathroom with stand-alone rain shower, Television, Juliet balcony, Mountain view, Ocean view.</div>
            <div>Bedroom 3: King size bed, Ensuite bathroom with stand-alone rain shower, Television, Shared access to terrace with Bedroom 4, Mountain view.</div>
            <div>Bedroom 4: King size bed, Ensuite bathroom with stand-alone rain shower, Television, Shared terrace with Bedroom 3, Mountain view.
            <div className="grid grid-cols-1 pt-4">Bedroom 5: 2 Queen size bunk beds, Television.</div>
            </div>
            </Stack>
          </Box>
        </Modal>
      </div>
    );
}

export default houseSeven