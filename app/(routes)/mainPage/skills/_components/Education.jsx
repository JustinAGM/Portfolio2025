import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { ChevronDown } from 'lucide-react';

function Education() {
    return (
        <div className="col-span-1 md:col-span-2 mt-12 md:mt-16 max-w-full">
            <div className="md:mt-10 p-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl text-slate-50 text-center md:text-left text-shadow-lg text-shadow-cyan-500">
                    Education
                </h1>
            </div>
            <div className="w-full px-4 space-y-4">
                <Accordion sx={{ bgcolor: '#EEF7FF', color: '#083344' }} TransitionProps={{ unmountOnExit: true }}>
                    <AccordionSummary
                        expandIcon={<ChevronDown color="#083344" />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        aria-label="Bachelor's Degree Accordion"
                    >
                        <Typography component="span" sx={{ color: '#083344' }}>
                            🏫 Bachelor's Degree
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ bgcolor: '#153448', color: '#A7E6FF' }}>
                        <Typography component="div" sx={{ whiteSpace: 'pre-line' }}>
                            🎓 Bachelor's in Business Technology Livelihood Education Major in Information Communication Technology{'\n'}
                            🥈 Magna Cum Laude
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={{ bgcolor: '#EEF7FF', color: '#083344' }} TransitionProps={{ unmountOnExit: true }}>
                    <AccordionSummary
                        expandIcon={<ChevronDown color="#083344" />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                        aria-label="Vocational Accordion"
                    >
                        <Typography component="span" sx={{ color: '#083344' }}>
                            📄 Vocational
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ bgcolor: '#153448', color: '#A7E6FF' }}>
                        <Typography component="div" sx={{ whiteSpace: 'pre-line' }}>
                            📘 Python for Beginners{'\n'}
                            🎨 Creative Web Design
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={{ bgcolor: '#EEF7FF', color: '#083344' }} TransitionProps={{ unmountOnExit: true }}>
                    <AccordionSummary
                        expandIcon={<ChevronDown color="#083344" />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                        aria-label="Junior and Senior High School Accordion"
                    >
                        <Typography component="span" sx={{ color: '#083344' }}>
                            ✨ Junior and Senior High School
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ bgcolor: '#153448', color: '#A7E6FF' }}>
                        <Typography component="div" sx={{ whiteSpace: 'pre-line' }}>
                            From General Academic Strand to Humanities and Social Sciences.{'\n'}
                            🥈 With Honor
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
}

export default Education;
