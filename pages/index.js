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
import Divider from '@mui/material/Divider';



const today = dayjs().get('date')
const tomorrow = today + 4
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const d = new Date();


function Houses (){
  const [data, setData] = useState([])
  useEffect(() =>{fetch('https://planets.pythonanywhere.com/houses/').then((response) => response.json()).then((data) => setData(data))},[data])
    return(
        <div className="pt-1">
        <IconFilters/>
        <Divider sx={{color: '#a9a9a9', backgroundColor: 'a9a9a9', marginTop: '10px', marginBottom: '10px'}} orientation="horizontal" flexItem/>
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={0.5}>      
      {data.map((item) => <>
          <Grid item xs="auto" md="auto" lg="3" xl="2.5" sm="auto">  
          <div className="p-4">
            <Link href={"./homes/" + (item.id)}><button type="button" >
              <Card sx={{ maxWidth: 300, minWidth: 300, boxShadow: 'none' }}>
                <CardMedia className="rounded-lg" style={{ height: "250px", paddingTop: "2%" }} image={item.home_img} title="Picture" alt="pic" />
                <CardContent>
                  <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={8}>
                    <p className="text-medium text-center ">{item.location}</p>
                    <p className="text-small text-center"><StarIcon sx={{ color: grey[900], fontSize: '23px' }} />{item.ratings}</p>
                  </Stack>
                  <Stack direction="column" justifyContent="center" alignItems="flex-start" >
                    <div className="text-small text-center px-0.5 opacity-75">100 miles away</div>
                    <p className="text-small text-center px-0.5 opacity-75 mb-1">{monthNames[d.getMonth()]} {today} - {tomorrow}</p>
                    <p className="text-small text-center px-0.5 font-medium">{item.price}</p>
                  </Stack>
                </CardContent>
              </Card>
            </button>
            </Link>
          </div>
        </Grid>
      </>
      )}
        </Grid>
        </div>
    )
}

function IconFilters(){
  return(
    <div className="pt-5">
    <Stack direction="row" justifyContent="center" alignItems="center"spacing={2}>
    <div className="text-center">
    <img src="/icons/icons8-diamond-heart-30.png" alt="alt-text" className="block m-auto"/>
    <p>Luxury</p>
    </div>
    <div className="text-center">
    <img src="/icons/icons8-chef-hat-30.png" alt="alt-text" className="block m-auto"/>
    <p>Chef Kitchens</p>
    </div>
    <div className="text-center">
    <img src="/icons/icons8-water-element-30.png" alt="alt-text" className="block m-auto"/>
    <p>Pools</p>
    </div>
    <div className="text-center">
    <img src="/icons/icons8-mountain-30.png" alt="alt-text" className="block m-auto"/>
    <p>Mountains</p>
    </div>
    </Stack>
    </div>
  )
}

export default Houses