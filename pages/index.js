import Link from "next/link"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import React from "react"
import CardMedia from '@mui/material/CardMedia';

import Image from 'next/image'


function Main(){
    return(
        <div className="flex justify-center items-center h-screen">
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
            <Book/>
            <Calendar/>
            <Secure/>
            </Stack>
        </div>
    )
}

function Book(){
    return(
        <div>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia style={{ height: "125px", maxWidth: '125px', margin: 'auto' }} image="/images/Home.png" title="Picture" alt="pic"/>
            <CardContent>
            <div className="grid grid-cols-1 space-y-4 text-center">
            <p className="text-xl font-semibold">Luxury Getaways</p>
            <p>Test paragraph that has a big large growing amount of very very many words that dont have very much of any meaning other than filling up the space on the screen.</p>
            </div>
            </CardContent>
            </Card>
        </div>
    )
}

function Calendar(){
    return(
        <div>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia style={{ height: "125px", maxWidth: '125px', margin: 'auto' }} image="/images/Calendar.png" title="Picture" alt="pic"/>
            <CardContent>
            <div className="grid grid-cols-1 space-y-4 text-center">
            <p className="text-xl font-semibold">Convenient Scheduling</p>
            <p>Test paragraph that has a big large growing amount of very very many words that dont have very much of any meaning other than filling up the space on the screen.</p>
            </div>
            </CardContent>
            </Card>
        </div>
    )
}

function Secure(){
    return(
        <div>
            <Card sx={{maxWidth: 345}}>
            <CardMedia style={{height: "125px", maxWidth: '125px', margin: 'auto'}} image="/images/Secure.png" title="Picute" alt='pic'/>
            <CardContent>
            <div className="grid grid-cols-1 space-y-4 text-center">
            <p className="text-xl font-semibold">Security Guarantee</p>
            <p>Test paragraph that has a big large growing amount of very very many words that dont have very much of any meaning other than filling up the space on the screen.</p>
            </div>
            </CardContent>
            </Card>
        </div>
    )
}
export default Main