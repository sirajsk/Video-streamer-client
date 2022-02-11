import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Backdrop from '@mui/material/Backdrop';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Banner from '../Assets/V.svg';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Skeleton from '@mui/material/Skeleton';


var cardStyle = {
    display: 'block',
    marginTop: 25,
    transitionDuration: '0.3s',
    backgroundColor: "#292928",
    height: '40vw'
}
const style = {
    position: 'absolute',
    top: '55%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    height: 500,
    bgcolor: '#282929',
    border: '1px solid #5E5E5D',
    boxShadow: 24,
    p: 4,
};

export default function UploadVideo() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>

            <Box sx={{ minWidth: 275 }}>
                <Card style={cardStyle} variant="outlined"> <React.Fragment>
                    <CardContent >
                        <Typography sx={{ fontSize: 20 }} color="#B1BDB4" style={{ display: "flex" }} gutterBottom>
                            UPLOAD VIDEO
                        </Typography>
                        <hr style={{ backgroundColor: "#ffff" }} />
                        <div style={{ display: "flex", justifyContent: "center", marginTop: 60 }}>
                            {Banner ?
                                <img style={{ width: 200, height: 200 }} src={Banner} alt="" />
                                : <Skeleton variant="circular" width={40} height={40} />}
                        </div>

                    </CardContent>
                    <CardActions sx={{ justifyContent: "center" }}>

                        <Button variant="contained" component="span" onClick={handleOpen}>
                            Upload video
                        </Button>
                       
                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            open={open}
                            onClose={handleClose}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                                timeout: 500,
                            }}
                        >
                            <Fade in={open}>
                                <Box sx={style}>
                                    <Typography id="transition-modal-title" variant="h6" component="h2">
                                        UPLOAD VIDEO
                                    </Typography>
                                    <hr />
                                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                                </Box>
                            </Fade>
                          
                        </Modal>
                    </CardActions>
                </React.Fragment></Card>
            </Box>


        </>
    );
}