import React, { useState, useEffect } from 'react';
import styles from 'styles/App.module.css';
import BackButton from 'components/App/BackButton'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const TermsAndConditions = () => {
    const [data, setData] = useState({
        title: "Loading...",
        subtitle: "Loading...",
        frequent_questions: []
    });

    useEffect(() => {
        fetch('http://167.172.120.46/api/view-frequentquestions')
            .then(response => response.json())
            .then(data => {
                setData({
                    title: data.frequent_questions.title,
                    subtitle: data.frequent_questions.subtitle,
                    frequent_questions: data.frequent_questions.frequent_questions
                });
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <main className={styles.containerTerm}>
            <BackButton/>   

            <header>
                <h1 className={styles.title}>{data.title}</h1>
                <p className={styles.subtitle}>{data.subtitle}</p>
            </header>

            <div className={styles.content}>
                {data.frequent_questions.map((faq, index) => (
                    <Accordion key={index} style={{ backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#F0ECE7', width: '120%', padding: 0, marginLeft:'-30px'}}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${index + 1}-content`}
                            id={`panel${index + 1}-header`}
                        >
                            <Typography className={styles.titleAcc}>{faq.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={styles.subtitleAcc}>
                                {faq.answer}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </main>
    );
};

export default TermsAndConditions;
