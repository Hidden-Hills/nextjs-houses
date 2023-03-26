import Link from "next/link"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import React from "react"




function Main(){
    return(
        <div>
            <Link href='./homes'><p className="font-sans text-lg">Link to another Page</p></Link>
            <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
            <Card sx={{ maxWidth: 345 }}>
            <CardContent>
            <div className="grid grid-cols-1 divide-y text-center">
            <div>Find the perfect vacation home</div>
            </div>
            </CardContent>
            </Card>
            </Stack>
        </div>
    )
}
export default Main