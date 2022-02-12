import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Backdrop from '@mui/material/Backdrop';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Banner from '../Assets/V.svg';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Skeleton from '@mui/material/Skeleton';
import axios from 'axios';
import '../UploadVideo/UploadVideo.scss'

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
const chunkSize = 5 * 1024;

export default function UploadVideo() {
    const [dropZoneActive,setDropZoneActive]=useState(false)
    const [files,setFiles]=useState([])
    const [currentFileIndex,setCurrentFileIndex]=useState(null)
    const [lastUploadedFileIndex, setLastUploadedFileIndex] = useState(null);
    const [currentChunkIndex, setCurrentChunkIndex] = useState(null);
    const [open, setOpen] =useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    function handleDrop(e){
        e.preventDefault()
        setFiles([...files,...e.dataTransfer.files])

    }

    function readAndUploadCurrentChunk(){
        const reader=new FileReader();
        const file=files[currentFileIndex]
        if(!file){
            return;

        }
        const from = currentChunkIndex * chunkSize;
        const to = from + chunkSize;
        const blob = file.slice(from, to);
        reader.onload = e => uploadChunk(e);
        reader.readAsDataURL(blob);
    }

    function uploadChunk(readerEvent){
        const file = files[currentFileIndex];
        const data = readerEvent.target.result;
        const params = new URLSearchParams();

        params.set('name', file.name);
        params.set('size', file.size);
        params.set('currentChunkIndex', currentChunkIndex);
        params.set('totalChunks', Math.ceil(file.size / chunkSize)); 
        const headers = { 'Content-Type': 'application/octet-stream' };
        const url = 'http://localhost:3001/api/upload?' + params.toString();

        axios.post(url,data,{headers}).then(response=>{
            console.log(response)
            const file = files[currentFileIndex];
            const filesize = files[currentFileIndex].size;
            const chunks = Math.ceil(filesize / chunkSize) - 1;
            const isLastChunk = currentChunkIndex === chunks;

            if (isLastChunk) {
                file.finalFilename = response.data.finalFilename;
                setLastUploadedFileIndex(currentFileIndex);
                setCurrentChunkIndex(null);
                console.log('is last chunk')
                setDropZoneActive(false)
                
            }
            else {
                setCurrentChunkIndex(currentChunkIndex + 1);
            }
        })
    }



    useEffect(() => {
        if (lastUploadedFileIndex === null) {
            return;
        }
        const isLastFile = lastUploadedFileIndex === files.length - 1;
        const nextFileIndex = isLastFile ? null : currentFileIndex + 1;
        setCurrentFileIndex(nextFileIndex);
    }, [lastUploadedFileIndex]);




    useEffect(() => {
    if(files.length>0){
        if(currentFileIndex ===null){
            setCurrentFileIndex(
                lastUploadedFileIndex === null ? 0 : lastUploadedFileIndex + 1
            );
        }
    }
    }, [files.length])


    useEffect(() => {
        if (currentFileIndex !== null) {
            setCurrentChunkIndex(0);
        }
    }, [currentFileIndex]);


   useEffect(() => {
   if(currentChunkIndex !==null){
    readAndUploadCurrentChunk()
   } 
   }, [currentChunkIndex])
   

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
                                    <div
                                        onDragOver={e=>{setDropZoneActive(true);e.preventDefault()}}
                                        onDragLeave={e =>{setDropZoneActive(false); e.preventDefault()}}
                                        onDrop={e=>{handleDrop(e)}}
                                        className={'dropzone'+(dropZoneActive ? "active" :"")}>
                                        Drop Zone                                                                                                                                                           
                                    </div>

                                </Box>
                            </Fade>

                        </Modal>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                    </CardActions>
                </React.Fragment></Card>
            </Box>


        </>
    );
}