import "./faq.css";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function BasicAccordion() {
  return (
    <div>
        <div className="accord">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{fontSize: 34, color: 'success.dark' }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="ac"
        >
          <Typography>Is QTify free to use</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes!It is 100% percent free .You can download it.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{fontSize: 34, color: 'success.dark' }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className="ac"
        >
          <Typography>Can I download and listen to songs offline</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Offcourse you can.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
      </div>
    </div>
  );
}
