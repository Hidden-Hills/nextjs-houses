import Link from "next/link"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import React from "react"
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';


function Main(){
    return(
        <div>
            <div className="mx-auto pt-72">
            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={3}>
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={3}>
            <Grid item xs="auto">
            <Book/>
            </Grid>
            <Grid item xs="auto">
            <Calendar/>
            </Grid>
            <Grid item xs="auto">
            <Secure/>
            </Grid>
            </Grid>
            <LinkBtn/>
        </div>
        </div>

    )
}

function Book(){
    return(
        <div>
            <Card sx={{ maxWidth: 345, minWidth: 345, minHeight: 257 }}>
            <CardMedia style={{ height: "125px", maxWidth: '125px', margin: 'auto' }} image="/images/Home.png" title="Picture" alt="pic"/>
            <CardContent>
            <div className="grid grid-cols-1 space-y-4 text-center">
            <p className="text-xl font-semibold">Luxury Getaways</p>
            <p>Perfect homes for vacations, to have getaway parties, or just to relax.</p>
            </div>
            </CardContent>
            </Card>
        </div>
    )
}

function Calendar(){
    return(
        <div>
            <Card sx={{ maxWidth: 345 , minWidth: 345, minHeight: 257}}>
            <CardMedia style={{ height: "125px", maxWidth: '125px', margin: 'auto' }} image="/images/Calendar.png" title="Picture" alt="pic"/>
            <CardContent>
            <div className="grid grid-cols-1 space-y-4 text-center">
            <p className="text-xl font-semibold">Convenient Scheduling</p>
            <p>Schedule a stay on any day of the week! </p>
            </div>
            </CardContent>
            </Card>
        </div>
    )
}

function Secure(){
    return(
        <div>
            <Card sx={{maxWidth: 345, minWidth: 345, minHeight: 257}}>
            <CardMedia style={{height: "125px", maxWidth: '125px', margin: 'auto'}} image="/images/Secure.png" title="Picute" alt='pic'/>
            <CardContent>
            <div className="grid grid-cols-1 space-y-4 text-center">
            <p className="text-xl font-semibold">Security Guarantee</p>
            <p>Homes listed on our site have passed a rigorous screening procedure.</p>
            </div>
            </CardContent>
            </Card>
        </div>
    )
}

function LinkBtn(){
    return(
        <div className="text-center pt-8">
            <Link href="/homes"><button type="button" class="text-white bg-gradient-to-r from-slate-800 to-slate-700 font-medium rounded-full text-sm px-10 py-5 text-center mr-2 mb-2">Start Booking</button></Link>
        </div>
    )
}

export default Main