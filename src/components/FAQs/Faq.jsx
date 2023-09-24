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
          marginBottom:'1rem'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{borderRadius: '10px'}}
        >
          <Typography>Is Qtify free to use?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color:'black'}}>
            100% free with 0 ads.
            </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{border: '2px solid white',
          borderRadius: '10px',
          marginBottom:'1rem'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          style={{borderRadius: '10px'}}
        >
          <Typography>Can I download and listen to songs offline?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color:'black'}}>
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