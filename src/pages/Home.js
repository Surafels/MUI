import { Container } from '@mui/system';
import TourCard from '../components/TourCard';
import { Grid, Typography } from '@mui/material';
import SearchAppBar from '../components/AppBar';
import cities from '../data.json';


const Home = ()=> {

    return (
       <div> 
      <Container sx={{marginY: 5}}>
      
{cities.map((city) =>(
        <>

  <Typography
  variant='h4'
  component='h2'
  marginTop={5}
  marginBottom={3}
  > Top {city.name} Tours
  </Typography>
  <Grid container spacing={5}>
{city.tours.map((tour, index) => (
  <TourCard tour={tour} key={index} />
))}
 

 </Grid>
       </>

))}

     


</Container>
    </div>
    )
}

export default Home;
