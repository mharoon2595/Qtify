import React from 'react'
import style from './Faq.module.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faq = () => {
  return (
    <div className={style.wrapper}>
    <div>
      <div className={style.faq}>
    <h1>FAQs</h1>
    </div>
    <div>
    <Accordion style={{border: '2px solid white',
          borderRadius: '10px',
          marginBottom:'1rem',
          backgroundColor: 'black'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'#34c94b'}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{borderRadius: '10px'}}
        >
          <Typography style={{color:'white', fontFamily:'Poppins'}}>Is Qtify free to use?</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor:'white'}}>
          <Typography style={{color:'black', fontFamily:'Poppins'}}>
            100% free with 0 ads.
            </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion style={{border: '2px solid white',
          borderRadius: '10px',
          marginBottom:'1rem',
          backgroundColor: 'black'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'#34c94b'}}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
          style={{borderRadius: '10px'}}
        >
          <Typography style={{color:'white', fontFamily:'Poppins'}}>Can I download and listen to songs offline?</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor:'white'}}>
          <Typography style={{color:'black', fontFamily:'Poppins'}}>
            Sorry, unfortunately we do not provide the service to download any songs.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      </div>
      </div>
    </div>
  )
}

export default Faq