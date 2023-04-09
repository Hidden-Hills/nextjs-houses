import * as React from "react"
import Link from "next/link"
import StarIcon from '@mui/icons-material/Star';
import { grey } from '@mui/material/colors';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from "react";
import Stack from '@mui/material/Stack';
import dayjs from 'dayjs';



const today = dayjs().get('date')
const tomorrow = today + 4
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const d = new Date();


function houses (){
    return(
        <div className="pt-5">
          <Grid container direction="row" justifyContent="center" alignItems="center" spacing={3}>
          </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs="auto">
                <HouseOne/>
            </Grid>
            <Grid item xs="auto">
                <HouseTwo/>
            </Grid> 
            <Grid item xs="auto">
                <HouseThree/>
            </Grid> 
            <Grid item xs="auto">
                <HouseFour/>
            </Grid> 
            <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs="auto">
                <HouseFive/>
            </Grid>
            <Grid item xs="auto">
                <HouseSix/>
            </Grid> 
            <Grid item xs="auto">
                <HouseSeven/>
            </Grid> 
            <Grid item xs="auto">
                <HouseEight/>
            </Grid> 
            </Grid>
            </Grid>
        </div>
    )
}

function HouseOne(){
  const [data, setData] = useState([])
  useEffect(() =>{fetch('https://planets.pythonanywhere.com/houses/1/').then((response) => response.json()).then((data) => setData(data))},[])
  return(
    <div className="p-4">
      <Link href='./homes/first'><button type="button" >
      <Card sx={{ maxWidth: 300, minWidth: 300, boxShadow: 'none' }}>
      <CardMedia className="rounded-lg" style={{ height: "250px", paddingTop: "2%" }} image="/houseOne/homeOne.webp" title="Picture" alt="pic"/>
      <CardContent>
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={8}>
      <p className="text-medium text-center ">{data.location}</p>
      <p className="text-small text-center"><StarIcon sx={{ color: grey[900], fontSize:'23px' }}/>{data.ratings}</p>
      </Stack>
      <Stack direction="column" justifyContent="center" alignItems="flex-start" >  
        <p className="text-small text-center px-0.5 opacity-75">100 miles away</p> 
        <p className="text-small text-center px-0.5 opacity-75 mb-1">{monthNames[d.getMonth()]} {today} - {tomorrow}</p>         
        <p className="text-small text-center px-0.5 font-medium">{data.price}</p>  
      </Stack>
      </CardContent>  
      </Card>
      </button>
      </Link>
      </div>
  )
}

function HouseTwo(){
  const [data, setData] = useState([])
  useEffect(() =>{fetch('https://planets.pythonanywhere.com/houses/2/').then((response) => response.json()).then((data) => setData(data))},[])
  return(
    <div className="p-4">
        <Link href='./homes/second'><button type="button" >
        <Card sx={{ maxWidth: 300, minWidth: 300, boxShadow: 'none' }}>
        <CardMedia className="rounded-lg" style={{ height: "250px", paddingTop: "2%" }} image="/houseTwo/homeTwo.webp" title="Picture" alt="pic"/>
        <CardContent>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={8}>
        <p className="text-medium text-center">{data.location}</p>
        <p className="text-small text-center"><StarIcon sx={{ color: grey[900], fontSize:'23px' }}/>{data.ratings}</p>
        </Stack>
        <Stack direction="column" justifyContent="center" alignItems="flex-start" >  
          <p className="text-small text-center px-0.5 opacity-75">100 miles away</p> 
          <p className="text-small text-center px-0.5 opacity-75 mb-1">{monthNames[d.getMonth()]} {today} - {tomorrow}</p>         
          <p className="text-small text-center px-0.5 font-medium">{data.price}</p>  
        </Stack>
        </CardContent>  
        </Card>
        </button>
        </Link>
        </div>
  )
}

function HouseThree(){
  const [data, setData] = useState([])
  useEffect(() =>{fetch('https://planets.pythonanywhere.com/houses/3/').then((response) => response.json()).then((data) => setData(data))},[])
  return(
    <div className="p-4">
        <Link href='./homes/third'><button type="button" >
        <Card sx={{ maxWidth: 300, minWidth: 300, boxShadow: 'none' }}>
        <CardMedia className="rounded-lg" style={{ height: "250px", paddingTop: "2%" }} image="/houseThree/homeThree.webp" title="Picture" alt="pic"/>
        <CardContent>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={8}>
        <p style={{marginRight: '-3px'}}className="text-medium text-center">{data.location}</p>
        <p className="text-small text-center"><StarIcon sx={{ color: grey[900], fontSize:'23px' }}/>{data.ratings}</p>
        </Stack>
        <Stack direction="column" justifyContent="center" alignItems="flex-start" >  
          <p className="text-small text-center px-0.5 opacity-75">100 miles away</p> 
          <p className="text-small text-center px-0.5 opacity-75 mb-1">{monthNames[d.getMonth()]} {today} - {tomorrow}</p>         
          <p className="text-small text-center px-0.5 font-medium">{data.price}</p>  
        </Stack>
        </CardContent>  
        </Card>
        </button>
        </Link>
        </div>
      )
}

function HouseFour(){
  const [data, setData] = useState([])
  useEffect(() =>{fetch('https://planets.pythonanywhere.com/houses/4/').then((response) => response.json()).then((data) => setData(data))},[])
  return(
    <div className="p-4">
        <Link href='./homes/fourth'><button type="button" >
        <Card sx={{ maxWidth: 300, minWidth: 300, boxShadow: 'none' }}>
        <CardMedia className="rounded-lg" style={{ height: "250px", paddingTop: "2%" }} image="/houseFour/homeFour.webp" title="Picture" alt="pic"/>
        <CardContent>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={8}>
        <p style={{marginRight: '10px'}}className="text-medium text-center">{data.location}</p>
        <p className="text-small text-center"><StarIcon sx={{ color: grey[900], fontSize:'23px' }}/>{data.ratings}</p>
        </Stack>
        <Stack direction="column" justifyContent="center" alignItems="flex-start" >  
          <p className="text-small text-center px-0.5 opacity-75">100 miles away</p> 
          <p className="text-small text-center px-0.5 opacity-75 mb-1">{monthNames[d.getMonth()]} {today} - {tomorrow}</p>         
          <p className="text-small text-center px-0.5 font-medium">{data.price}</p>  
        </Stack>
        </CardContent>  
        </Card>
        </button>
        </Link>
        </div>
      )
}

function HouseFive(){
  const [data, setData] = useState([])
  useEffect(() =>{fetch('https://planets.pythonanywhere.com/houses/5/').then((response) => response.json()).then((data) => setData(data))},[])
  return(
    <div className="p-4">
        <Link href='./homes/fifth'><button type="button" >
        <Card sx={{ maxWidth: 300, minWidth: 300, boxShadow: 'none' }}>
        <CardMedia className="rounded-lg" style={{ height: "250px", paddingTop: "2%" }} image="/houseFive/homeFive.webp" title="Picture" alt="pic"/>
        <CardContent>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={8}>
        <p style={{marginRight: '22px'}}className="text-medium text-center">{data.location}</p>
        <p className="text-small text-center"><StarIcon sx={{ color: grey[900], fontSize:'23px' }}/>{data.ratings}</p>
        </Stack>
        <Stack direction="column" justifyContent="center" alignItems="flex-start" >  
          <p className="text-small text-center px-0.5 opacity-75">100 miles away</p> 
          <p className="text-small text-center px-0.5 opacity-75 mb-1">{monthNames[d.getMonth()]} {today} - {tomorrow}</p>         
          <p className="text-small text-center px-0.5 font-medium">{data.price}</p>  
        </Stack>
        </CardContent>  
        </Card>
        </button>
        </Link>
        </div>
      )
}

function HouseSix(){
  const [data, setData] = useState([])
  useEffect(() =>{fetch('https://planets.pythonanywhere.com/houses/6/').then((response) => response.json()).then((data) => setData(data))},[])
  return(
    <div className="p-4">
        <Link href='./homes/sixth'><button type="button" >
        <Card sx={{ maxWidth: 300, minWidth: 300, boxShadow: 'none' }}>
        <CardMedia className="rounded-lg" style={{ height: "250px", paddingTop: "2%" }} image="/houseSix/homeSix.webp" title="Picture" alt="pic"/>
        <CardContent>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={8}>
        <p style={{marginRight: '32px'}}className="text-medium text-center">{data.location}</p>
        <p className="text-small text-center"><StarIcon sx={{ color: grey[900], fontSize:'23px' }}/>{data.ratings}</p>
        </Stack>
        <Stack direction="column" justifyContent="center" alignItems="flex-start" >  
          <p className="text-small text-center px-0.5 opacity-75">100 miles away</p> 
          <p className="text-small text-center px-0.5 opacity-75 mb-1">{monthNames[d.getMonth()]} {today} - {tomorrow}</p>         
          <p className="text-small text-center px-0.5 font-medium">{data.price}</p>  
        </Stack>
        </CardContent>  
        </Card>
        </button>
        </Link>
        </div>
  )
}

function HouseSeven(){
  const [data, setData] = useState([])
  useEffect(() =>{fetch('https://planets.pythonanywhere.com/houses/7/').then((response) => response.json()).then((data) => setData(data))},[])
  return(
    <div className="p-4">
        <Link href='./homes/seventh'><button type="button" >
        <Card sx={{ maxWidth: 300, minWidth: 300, boxShadow: 'none' }}>
        <CardMedia className="rounded-lg" style={{ height: "250px", paddingTop: "2%" }} image="/houseSeven/homeSeven.webp" title="Picture" alt="pic"/>
        <CardContent>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={8}>
        <p style={{marginRight: '52px'}}className="text-medium text-center">{data.location}</p>
        <p className="text-small text-center"><StarIcon sx={{ color: grey[900], fontSize:'23px' }}/>{data.ratings}</p>
        </Stack>
        <Stack direction="column" justifyContent="center" alignItems="flex-start" >  
          <p className="text-small text-center px-0.5 opacity-75">100 miles away</p> 
          <p className="text-small text-center px-0.5 opacity-75 mb-1">{monthNames[d.getMonth()]} {today} - {tomorrow}</p>         
          <p className="text-small text-center px-0.5 font-medium">{data.price}</p>  
        </Stack>
        </CardContent>  
        </Card>
        </button>
        </Link>
        </div>
      )
}

function HouseEight(){
  const [data, setData] = useState([])
  useEffect(() =>{fetch('https://planets.pythonanywhere.com/houses/8/').then((response) => response.json()).then((data) => setData(data))},[])
  return(
    <div className="p-4">
        <Link href='./homes/eighth'><button type="button" >
        <Card sx={{ maxWidth: 300, minWidth: 300, boxShadow: 'none' }}>
        <CardMedia className="rounded-lg" style={{ height: "250px", paddingTop: "2%" }} image="/houseEight/homeEight.webp" title="Picture" alt="pic"/>
        <CardContent>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={8}>
        <p style={{marginRight: '20px'}}className="text-medium text-center">{data.location}</p>
        <p className="text-small text-center"><StarIcon sx={{ color: grey[900], fontSize:'23px' }}/>{data.ratings}</p>
        </Stack>
        <Stack direction="column" justifyContent="center" alignItems="flex-start" >  
          <p className="text-small text-center px-0.5 opacity-75">100 miles away</p> 
          <p className="text-small text-center px-0.5 opacity-75 mb-1">{monthNames[d.getMonth()]} {today} - {tomorrow}</p>         
          <p className="text-small text-center px-0.5 font-medium">{data.price}</p>  
        </Stack>
        </CardContent>  
        </Card>
        </button>
        </Link>
        </div>
      )
}
export default houses