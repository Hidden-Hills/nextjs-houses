import * as React from "react"
import Link from "next/link"
import axios from "axios"
import StarIcon from '@mui/icons-material/Star';
import { grey } from '@mui/material/colors';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { createTheme } from '@mui/material/styles';
import dayjs from 'dayjs';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 200,
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};
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



const today = dayjs().get('date')
const tomorrow = today + 4
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May","Jun","Jul", "Aug", "Sep", "Oct", "Nov","Dec"];
const d = new Date();


function houses (){
    return(
        <div className="pt-5">
          <Grid container direction="row" justifyContent="center" alignItems="center">
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
        <div className="p-4">
        <Link href='./homes/fourth'><button type="button" >
        <Card sx={{ maxWidth: 300, minWidth: 300, boxShadow: 'none' }}>
        <CardMedia className="rounded-lg" style={{ height: "250px", paddingTop: "2%" }} image="/houseSix/homeSix.webp" title="Picture" alt="pic"/>
        <CardContent>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={8}>
        <p style={{marginRight: '32px'}}className="text-medium text-center">{this.state.houses[0].location}</p>
        <p className="text-small text-center"><StarIcon sx={{ color: grey[900], fontSize:'23px' }}/>{this.state.houses[0].ratings}</p>
        </Stack>
        <Stack direction="column" justifyContent="center" alignItems="flex-start" >  
          <p className="text-small text-center px-0.5 opacity-75">100 miles away</p> 
          <p className="text-small text-center px-0.5 opacity-75 mb-1">{monthNames[d.getMonth()]} {today} - {tomorrow}</p>         
          <p className="text-small text-center px-0.5 font-medium">{this.state.houses[0].price}</p>  
        </Stack>
        </CardContent>  
        </Card>
        </button>
        </Link>
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
          <div className="p-4">
        <Link href='./homes/second'><button type="button" >
        <Card sx={{ maxWidth: 300, minWidth: 300, boxShadow: 'none' }}>
        <CardMedia className="rounded-lg" style={{ height: "250px", paddingTop: "2%" }} image="/houseTwo/homeTwo.webp" title="Picture" alt="pic"/>
        <CardContent>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={8}>
        <p className="text-medium text-center">{this.state.houses[1].location}</p>
        <p className="text-small text-center"><StarIcon sx={{ color: grey[900], fontSize:'23px' }}/>{this.state.houses[1].ratings}</p>
        </Stack>
        <Stack direction="column" justifyContent="center" alignItems="flex-start" >  
          <p className="text-small text-center px-0.5 opacity-75">100 miles away</p> 
          <p className="text-small text-center px-0.5 opacity-75 mb-1">{monthNames[d.getMonth()]} {today} - {tomorrow}</p>         
          <p className="text-small text-center px-0.5 font-medium">{this.state.houses[1].price}</p>  
        </Stack>
        </CardContent>  
        </Card>
        </button>
        </Link>
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
        <div className="p-4">
        <Link href='./homes/fourth'><button type="button" >
        <Card sx={{ maxWidth: 300, minWidth: 300, boxShadow: 'none' }}>
        <CardMedia className="rounded-lg" style={{ height: "250px", paddingTop: "2%" }} image="/houseFive/homeFive.webp" title="Picture" alt="pic"/>
        <CardContent>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={8}>
        <p style={{marginRight: '20px'}}className="text-medium text-center">{this.state.houses[2].location}</p>
        <p className="text-small text-center"><StarIcon sx={{ color: grey[900], fontSize:'23px' }}/>{this.state.houses[1].ratings}</p>
        </Stack>
        <Stack direction="column" justifyContent="center" alignItems="flex-start" >  
          <p className="text-small text-center px-0.5 opacity-75">100 miles away</p> 
          <p className="text-small text-center px-0.5 opacity-75 mb-1">{monthNames[d.getMonth()]} {today} - {tomorrow}</p>         
          <p className="text-small text-center px-0.5 font-medium">{this.state.houses[2].price}</p>  
        </Stack>
        </CardContent>  
        </Card>
        </button>
        </Link>
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
        <div className="p-4">
        <Link href='./homes/fourth'><button type="button" >
        <Card sx={{ maxWidth: 300, minWidth: 300, boxShadow: 'none' }}>
        <CardMedia className="rounded-lg" style={{ height: "250px", paddingTop: "2%" }} image="/houseEight/homeEight.webp" title="Picture" alt="pic"/>
        <CardContent>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={8}>
        <p style={{marginLeft: '-25px'}}className="text-medium text-center">{this.state.houses[3].location}</p>
        <p className="text-small text-center"><StarIcon sx={{ color: grey[900], fontSize:'23px' }}/>{this.state.houses[3].ratings}</p>
        </Stack>
        <Stack direction="column" justifyContent="center" alignItems="flex-start" >  
          <p className="text-small text-center px-0.5 opacity-75">100 miles away</p> 
          <p className="text-small text-center px-0.5 opacity-75 mb-1">{monthNames[d.getMonth()]} {today} - {tomorrow}</p>         
          <p className="text-small text-center px-0.5 font-medium">{this.state.houses[3].price}</p>  
        </Stack>
        </CardContent>  
        </Card>
        </button>
        </Link>
        </div>
      )
  }
}
}

class HouseFive extends React.Component{

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
        <div className="p-4">
        <Link href='./homes/fourth'><button type="button" >
        <Card sx={{ maxWidth: 300, minWidth: 300, boxShadow: 'none' }}>
        <CardMedia className="rounded-lg" style={{ height: "250px", paddingTop: "2%" }} image="/houseSeven/homeSeven.webp" title="Picture" alt="pic"/>
        <CardContent>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={8}>
        <p style={{marginRight: '55px'}}className="text-medium text-center">{this.state.houses[4].location}</p>
        <p className="text-small text-center"><StarIcon sx={{ color: grey[900], fontSize:'23px' }}/>{this.state.houses[4].ratings}</p>
        </Stack>
        <Stack direction="column" justifyContent="center" alignItems="flex-start" >  
          <p className="text-small text-center px-0.5 opacity-75">100 miles away</p> 
          <p className="text-small text-center px-0.5 opacity-75 mb-1">{monthNames[d.getMonth()]} {today} - {tomorrow}</p>         
          <p className="text-small text-center px-0.5 font-medium">{this.state.houses[4].price}</p>  
        </Stack>
        </CardContent>  
        </Card>
        </button>
        </Link>
        </div>
      )
  }
}
}

class HouseSix extends React.Component{

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
          <div className="p-4">
          <Link href='./homes/fourth'><button type="button" >
          <Card sx={{ maxWidth: 300, minWidth: 300, boxShadow: 'none' }}>
          <CardMedia className="rounded-lg" style={{ height: "250px", paddingTop: "2%" }} image="/houseFour/homeFour.webp" title="Picture" alt="pic"/>
          <CardContent>
          <Stack direction="row" justifyContent="center" alignItems="center" spacing={8}>
          <p style={{marginRight: '10px'}}className="text-medium text-center">{this.state.houses[5].location}</p>
          <p className="text-small text-center"><StarIcon sx={{ color: grey[900], fontSize:'23px' }}/>{this.state.houses[5].ratings}</p>
          </Stack>
          <Stack direction="column" justifyContent="center" alignItems="flex-start" >  
            <p className="text-small text-center px-0.5 opacity-75">100 miles away</p> 
            <p className="text-small text-center px-0.5 opacity-75 mb-1">{monthNames[d.getMonth()]} {today} - {tomorrow}</p>         
            <p className="text-small text-center px-0.5 font-medium">{this.state.houses[5].price}</p>  
          </Stack>
          </CardContent>  
          </Card>
          </button>
          </Link>
          </div>
        )
    }
  }
}

class HouseSeven extends React.Component{

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
        <div className="p-4">
        <Link href='./homes/third'><button type="button" >
        <Card sx={{ maxWidth: 300, minWidth: 300, boxShadow: 'none' }}>
        <CardMedia className="rounded-lg" style={{ height: "250px", paddingTop: "2%" }} image="/houseThree/homeThree.webp" title="Picture" alt="pic"/>
        <CardContent>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={8}>
        <p style={{marginRight: '-3px'}} className="text-medium text-center">{this.state.houses[6].location}</p>
        <p className="text-small text-center"><StarIcon sx={{ color: grey[900], fontSize:'23px' }}/>{this.state.houses[6].ratings}</p>
        </Stack>
        <Stack direction="column" justifyContent="center" alignItems="flex-start" >  
          <p className="text-small text-center px-0.5 opacity-75">100 miles away</p> 
          <p className="text-small text-center px-0.5 opacity-75 mb-1">{monthNames[d.getMonth()]} {today} - {tomorrow}</p>         
          <p className="text-small text-center px-0.5 font-medium">{this.state.houses[6].price}</p>  
        </Stack>
        </CardContent>  
        </Card>
        </button>
        </Link>
        </div>
      )
  }
}
}

class HouseEight extends React.Component{

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
      <div className="p-4">
      <Link href='./homes/first'><button type="button" >
      <Card sx={{ maxWidth: 300, minWidth: 300, boxShadow: 'none' }}>
      <CardMedia className="rounded-lg" style={{ height: "250px", paddingTop: "2%" }} image="/houseOne/homeOne.webp" title="Picture" alt="pic"/>
      <CardContent>
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={8}>
      <p className="text-medium text-center ">{this.state.houses[7].location}</p>
      <p className="text-small text-center"><StarIcon sx={{ color: grey[900], fontSize:'23px' }}/>{this.state.houses[7].ratings}</p>
      </Stack>
      <Stack direction="column" justifyContent="center" alignItems="flex-start" >  
        <p className="text-small text-center px-0.5 opacity-75">100 miles away</p> 
        <p className="text-small text-center px-0.5 opacity-75 mb-1">{monthNames[d.getMonth()]} {today} - {tomorrow}</p>         
        <p className="text-small text-center px-0.5 font-medium">{this.state.houses[7].price}</p>  
      </Stack>
      </CardContent>  
      </Card>
      </button>
      </Link>
      </div>
    )
  }
}
}
export default houses