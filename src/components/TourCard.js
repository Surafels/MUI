import { Box, Grid, Paper, Rating, Typography } from "@mui/material";
import { AccessTime } from "@mui/icons-material";
// import { useState } from "react";

const TourCard = ({tour}) => {

    return (
    <Grid item xs={3}>
        <Paper elevation={3}>
<img className="img" src={tour.image} alt="image" />
<Box paddingX={1}>
<Typography variant="subtitle1" component="h2">
    {tour.name}
</Typography>
<Box 
sx={{
    display: "flex",
    alignItems: "center"
}
}
>
    <AccessTime sx={{width: 12.5}} />
<Typography variant="body2" component="p" marginLeft={0.5}>
    {tour.duration} hours
</Typography>
</Box>
<Box
sx={{
    display: "flex",
    alignItems: "center"
}
}
>
<Rating name="read-only" value={tour.rating}
 readOnly precision={0.5} size="small"/>
<Typography variant="body2" component="p" marginLeft={0.5}>{tour.rating}</Typography>
<Typography variant="body2" components="p" marginLeft={0.5}>{tour.numberOfReviews} views</Typography>

{/* 
<Rating
  name="simple-controlled"
  size="small"
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
/> */}
</Box>
<Box>
<Typography variant="h6" components="h3" marginLeft={0.5}>From C ${tour.price}</Typography>

</Box>
</Box>

        </Paper>
    </Grid>
        
    )
}

export default TourCard;