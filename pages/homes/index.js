import React from "react"
import Link from "next/link"
import axios from "axios"
import StarIcon from '@mui/icons-material/Star';
import { grey } from '@mui/material/colors';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';




function houses (){
    return(
        <div>
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
            </Grid>
        </div>
    )
}


class HouseOne extends React.Component{

    constructor(props){
      super(props)
      
      this.state = {
        houses: []
      }
    } 
    
    componentDidMount(){
      var houses = {
        method: 'GET',
        url: 'http://127.0.0.1:8000/houses/',
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
            <Card sx={{ maxWidth: 345 }}>
        <CardMedia style={{ height: "250px", paddingTop: "2%" }} image="/images/homeOne.png" title="Picture" alt="pic"/>
        <CardContent>
          <Typography gutterBottom className="font-sans text-lg font-medium text-center">
          <p className="font-sans text-lg font-medium text-center">{this.state.houses[0].title}</p>
          </Typography>
          <Typography className="font-sans text-lg font-medium text-center">
            <p className="font-sans text-lg font-small text-center">{this.state.houses[0].ratings}<StarIcon sx={{ color: grey[900] }}/></p>
            <p className="font-sans text-lg font-small text-center">{this.state.houses[0].price}</p>
            
          </Typography>
          <Typography className="font-sans text-lg font-medium text-center">
            <p>‎</p>
            <Link href='./homes/first'><button type="button" className="font-sans text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  focus:ring-blue-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-full">Book Home</button></Link>
            </Typography>
        </CardContent>  
      </Card>
        </div>
        )
    }
  }
}

class HouseTwo extends React.Component{

    constructor(props){
      super(props)
      
      this.state = {
        houses: []
      }
    } 
    
    componentDidMount(){
      var houses = {
        method: 'GET',
        url: 'http://127.0.0.1:8000/houses/',
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
            <Card sx={{ maxWidth: 345 }}>
        <CardMedia style={{ height: "250px", paddingTop: "2%" }} image="/images/homeTwo.png" title="Picture" alt="pic"/>
        <CardContent>
          <Typography gutterBottom className="font-sans text-lg font-medium text-center">
          <p className="font-sans text-lg font-medium text-center">{this.state.houses[1].title}</p>
          </Typography>
          <Typography className="font-sans text-lg font-medium text-center">
            <p className="font-sans text-lg font-small text-center">{this.state.houses[1].ratings}<StarIcon sx={{ color: grey[900] }}/></p>
            <p className="font-sans text-lg font-small text-center">{this.state.houses[1].price}</p>
            
          </Typography>
          <Typography className="font-sans text-lg font-medium text-center">
            <p>‎</p>
            <Link href='./homes/second'><button type="button" className="font-sans text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  focus:ring-blue-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-full">Book Home</button></Link>            </Typography>
        </CardContent>  
      </Card>
        </div>
        )
    }
  }
}

class HouseThree extends React.Component{

    constructor(props){
      super(props)
      
      this.state = {
        houses: []
      }
    } 
    
    componentDidMount(){
      var houses = {
        method: 'GET',
        url: 'http://127.0.0.1:8000/houses/',
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
            <Card sx={{ maxWidth: 345 }}>
        <CardMedia style={{ height: "250px", paddingTop: "2%" }} image="/images/homeThree.png" title="Picture" alt="pic"/>
        <CardContent>
          <Typography gutterBottom className="font-sans text-lg font-medium text-center">
          <p className="font-sans text-lg font-medium text-center">{this.state.houses[2].title}</p>
          </Typography>
          <Typography className="font-sans text-lg font-medium text-center">
            <p className="font-sans text-lg font-small text-center">{this.state.houses[2].ratings}<StarIcon sx={{ color: grey[900] }}/></p>
            <p className="font-sans text-lg font-small text-center">{this.state.houses[2].price}</p>
            
          </Typography>
          <Typography className="font-sans text-lg font-medium text-center">
            <p>‎</p>
            <Link href='./homes/third'><button type="button" className="font-sans text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  focus:ring-blue-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-full">Book Home</button></Link>
            </Typography>
        </CardContent>  
      </Card>
        </div>
        )
    }
  }
}

class HouseFour extends React.Component{

    constructor(props){
      super(props)
      
      this.state = {
        houses: []
      }
    } 
    
    componentDidMount(){
      var houses = {
        method: 'GET',
        url: 'http://127.0.0.1:8000/houses/',
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
            <Card sx={{ maxWidth: 345 }}>
        <CardMedia style={{ height: "250px", paddingTop: "2%" }} image="/images/homeFour.png" title="Picture" alt="pic"/>
        <CardContent>
          <Typography gutterBottom className="font-sans text-lg font-medium text-center">
          <p className="font-sans text-lg font-medium text-center">{this.state.houses[3].title}</p>
          </Typography>
          <Typography className="font-sans text-lg font-medium text-center">
            <p className="font-sans text-lg font-small text-center">{this.state.houses[3].ratings}<StarIcon sx={{ color: grey[900] }}/></p>
            <p className="font-sans text-lg font-small text-center">{this.state.houses[3].price}</p>
            
          </Typography>
          <Typography className="font-sans text-lg font-medium text-center">
            <p>‎</p>
            <Link href='./homes/fourth'><button type="button" className="font-sans text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  focus:ring-blue-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-full">Book Home</button></Link>
            </Typography>
        </CardContent>  
      </Card>
        </div>
        )
    }
  }
}
export default houses

/*
This info goes on the booking page.

<p className="font-sans text-lg font-medium text-center">{this.state.houses[0].description}</p>
<p className="font-sans text-lg font-medium text-center">{this.state.houses[0].sqft} sqft</p>
<p className="font-sans text-lg font-medium text-center">{this.state.houses[0].maxGuests} guest max.</p>
<p className="font-sans text-lg font-medium text-center">{this.state.houses[0].bedRooms} bd</p>
<p className="font-sans text-lg font-medium text-center">{this.state.houses[0].bathRooms} br</p>
 */