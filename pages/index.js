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
  const [data, setData] = useState([])
  useEffect(() =>{fetch('https://planets.pythonanywhere.com/houses/').then((response) => response.json()).then((data) => setData(data))},[data])
    return(
        <div className="pt-5">
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
                    <p className="text-small text-center px-0.5 opacity-75">100 miles away</p>
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

export default houses