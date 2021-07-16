


import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        // move some of these styles out of room, box size should be 1024 x 563 when expanded, 
        root: {
            width: '1024px',
            height: '563px',
            borderRadius: '6px',
            boxShadow: '0 0 15px 0 rgba(0,0,0,0.25)',

        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightBold,
        },
    }),
);

export default function HowItWorks() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>How JustFund Works</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <h1>How JustFund Works</h1>
                        <p>When you submit a propsoal on JustFund</p>
                        <p>1. Your Proposal is submitted directly to the funder you applied to.</p>
                        <p>2. Your proposal also becomes available to all JustFunders in the portal, where they can filter, find, and fund proposals. This increases your proposal's reach, and creates the opportunity to receive additonal funding - without additional work.</p>

                        {/* space here, icons to left, option x: to right*/}
                        <p>We offer three ways to submit a proposal:</p>
                        {/* h3 = subtitle */}
                        <h3>Option 1: Create a New Proposal</h3>
                        <p>Start from scratch to draft a new proposal.</p>

                        <h3>Option 2: Use an Active Proposal to Apply to Another Funding Opportunity</h3>
                        <p>Start from scratch to draft a new proposal.</p>

                        <h3>Option 3: Copy an Active Proposal</h3>
                        <p>To use content from an active proposal as the basis of a new draft, copy the proposal and edit content as needed.</p>
                    </Typography>
                </AccordionDetails>
            </Accordion>


        </div>
    );
}






