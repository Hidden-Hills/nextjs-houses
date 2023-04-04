import * as React from "react"
import Link from "next/link"
import axios from "axios"
import StarIcon from '@mui/icons-material/Star';
import { grey } from '@mui/material/colors';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import CastleOutlinedIcon from '@mui/icons-material/CastleOutlined';import Modal from '@mui/material/Modal';
import { createTheme } from '@mui/material/styles';
import IconButton from '@mui/material/Button';


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

function houses (){
    return(
        <div>
          <Grid container direction="row" justifyContent="center" alignItems="center">
            <TaskBar/>
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
            </Grid>
        </div>
    )
}

function TaskBar (){
  return(
    <div>
      <Grid container direction="row" justifyContent="center" alignItems="center" item xs="auto" >
      <AvatarChip/>
      </Grid>   
    </div>
  )
}

function AvatarChip() {
  return (
    <div className="p-3 mw-sm">
      <div className="place-items-start">
      <Chip avatar={<Avatar>U</Avatar>} label="User"/>
      </div>
    </div>
  );
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
        <Link href='./homes/first'><button type="button" >
        <Card sx={{ maxWidth: 300, minWidth: 300, boxShadow: 'none' }}>
        <CardMedia className="rounded-lg" style={{ height: "250px", paddingTop: "2%" }} image="/images/homeOne1.webp" title="Picture" alt="pic"/>
        <CardContent>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={8}>
        <p className="text-medium text-center ">{this.state.houses[3].location}</p>
        <p className="text-small text-center"><StarIcon sx={{ color: grey[900], fontSize:'23px' }}/>{this.state.houses[3].ratings}</p>
        </Stack>
        <Stack direction="column" justifyContent="center" alignItems="flex-start" >  
          <p className="text-small text-center px-0.5 opacity-75">100 miles away</p> 
          <p className="text-small text-center px-0.5 opacity-75 mb-1">Apr 3 - 9</p>         
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
        <Link href='./homes/second'><button type="button" >
        <Card sx={{ maxWidth: 300, minWidth: 300, boxShadow: 'none' }}>
        <CardMedia className="rounded-lg" style={{ height: "250px", paddingTop: "2%" }} image="/images/homeTwo.webp" title="Picture" alt="pic"/>
        <CardContent>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={8}>
        <p className="text-medium text-center">{this.state.houses[0].location}</p>
        <p className="text-small text-center"><StarIcon sx={{ color: grey[900], fontSize:'23px' }}/>{this.state.houses[0].ratings}</p>
        </Stack>
        <Stack direction="column" justifyContent="center" alignItems="flex-start" >  
          <p className="text-small text-center px-0.5 opacity-75">100 miles away</p> 
          <p className="text-small text-center px-0.5 opacity-75 mb-1">Apr 3 - 9</p>         
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
          <Link href='./homes/third'><button type="button" >
          <Card sx={{ maxWidth: 300, minWidth: 300, boxShadow: 'none' }}>
          <CardMedia className="rounded-lg" style={{ height: "250px", paddingTop: "2%" }} image="/images/homeThree.webp" title="Picture" alt="pic"/>
          <CardContent>
          <Stack direction="row" justifyContent="center" alignItems="center" spacing={8}>
          <p className="text-medium text-center">{this.state.houses[2].location}</p>
          <p className="text-small text-center"><StarIcon sx={{ color: grey[900], fontSize:'23px' }}/>{this.state.houses[2].ratings}</p>
          </Stack>
          <Stack direction="column" justifyContent="center" alignItems="flex-start" >  
            <p className="text-small text-center px-0.5 opacity-75">100 miles away</p> 
            <p className="text-small text-center px-0.5 opacity-75 mb-1">Apr 3 - 9</p>         
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
          <Link href='./homes/first'><button type="button" >
          <Card sx={{ maxWidth: 300, minWidth: 300, boxShadow: 'none' }}>
          <CardMedia className="rounded-lg" style={{ height: "250px", paddingTop: "2%" }} image="/images/homeFour.webp" title="Picture" alt="pic"/>
          <CardContent>
          <Stack direction="row" justifyContent="center" alignItems="center" spacing={8}>
          <p style={{marginRight: '8px'}}className="text-medium text-center">{this.state.houses[1].location}</p>
          <p className="text-small text-center"><StarIcon sx={{ color: grey[900], fontSize:'23px' }}/>{this.state.houses[1].ratings}</p>
          </Stack>
          <Stack direction="column" justifyContent="center" alignItems="flex-start" >  
            <p className="text-small text-center px-0.5 opacity-75">100 miles away</p> 
            <p className="text-small text-center px-0.5 opacity-75 mb-1">Apr 3 - 9</p>         
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
export default houses