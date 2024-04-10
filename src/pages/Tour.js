import {  Box, Container, Typography } from "@mui/material";
import QuiltedImageList from "../components/QuiltedImage";
import CustomizedAccordions from "../components/Accordian";
import BasicModal from "../components/Modal";
import BottomNavigation from "@mui/material/BottomNavigation";
const Tour = () => {
    return (
        <Container sx={{width: 900}}>
<Typography variant="h3" component="h1" marginTop={3}>
    Explore the world in Vegas
</Typography>
<Box marginTop={3} sx={{display: "flex"}}>
    <img src="https://media.timeout.com/images/105124791/750/422/image.jpg"

    alt="img"
    height={325}
    />
    <QuiltedImageList />
</Box>
<Typography variant="h6" component="h4" marginTop={3}>
        About this ticket
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Typography variant="paragraph" component="p" marginY={3}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
          voluptates rem quos delectus debitis earum modi, ipsum veritatis.
          Perferendis officiis nobis, aut hic praesentium nulla vero, possimus
          omnis reprehenderit blanditiis quis incidunt minima voluptatibus illum
          quam corporis libero fugiat doloremque. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Exercitationem officiis commodi beatae
          animi incidunt necessitatibus aut provident ad ex. Saepe!
        </Typography>
      </Box>
      <Typography variant="h6" component="h4" marginBottom={2}>
        Frequently Asked Questions
      </Typography>
<CustomizedAccordions />

<BottomNavigation>
<BasicModal />
</BottomNavigation>
        </Container>
    )
}

export default Tour;