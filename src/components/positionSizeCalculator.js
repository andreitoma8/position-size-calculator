import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

const fetchPositionSize = (rP, aS, sL, l) => {
    const ps = rP / 100 * parseFloat(aS) * 100 / parseFloat(sL) / l;
    return (ps)
}

const PositionSizeCalculator = () => {

    const [accountSize, setAccountSize] = useState("")
    const [riskPercentage, setRiskPercentage] = useState(2.5)
    const [levrage, setLevrage] = useState(1)
    const [stopLoss, setStopLoss] = useState("")
    const [positionSize, setPositionSize] = useState(0)

    useEffect(() => {
        if (
            parseFloat(accountSize) > 0 && parseFloat(stopLoss) > 0
        ) {
            setPositionSize(fetchPositionSize(riskPercentage, accountSize, stopLoss, levrage));
        }
    }, [accountSize, riskPercentage, levrage, stopLoss])

    const handleRiskPercentageChange = (event, newValue) => {
        setRiskPercentage(newValue);
    }

    const handleLevrageChange = (event, newValue) => {
        setLevrage(newValue);
    }

    return (
        <Paper elevation={4}>
            <Box display="flex"
                justifyContent="center"
                alignItems="center">
                <Typography variant="h4" gutterBottom component="p" marginTop={2}>
                    Account size
                </Typography>
            </Box>
            <Box display="flex"
                justifyContent="center"
                alignItems="center"
                marginBottom={2}>
                <TextField id="account-size" label="$" variant="outlined" onChange={event => setAccountSize(event.currentTarget.value)} value={accountSize} />
            </Box>
            <Box display="flex"
                justifyContent="center"
                alignItems="center">
                <Typography variant="h4" gutterBottom component="p">
                    Risk as % of the account:
                </Typography>
            </Box>
            <Box display="flex"
                justifyContent="center"
                alignItems="center">
                <Typography variant="h4" gutterBottom component="p">
                    {riskPercentage}
                </Typography>
            </Box>
            <Box display="flex"
                justifyContent="center"
                alignItems="center"
                marginX={40}>
                <Slider

                    defaultValue={2.5}

                    step={0.5}
                    marks
                    min={0.5}
                    max={20}
                    value={riskPercentage}
                    onChange={handleRiskPercentageChange}
                />
            </Box>
            <Box display="flex"
                justifyContent="center"
                alignItems="center"
                marginTop={2}>
                <Typography variant="h4" gutterBottom component="p">
                    Leverage:
                </Typography>
            </Box>
            <Box display="flex"
                justifyContent="center"
                alignItems="center">
                <Typography variant="h4" gutterBottom component="p">
                    {levrage}
                </Typography>

            </Box>
            <Box display="flex"
                justifyContent="center"
                alignItems="center"
                marginX={40}>
                <Slider

                    defaultValue={1}

                    step={1}
                    marks
                    min={1}
                    max={100}
                    value={levrage}
                    onChange={handleLevrageChange}
                />
            </Box>
            <Box display="flex"
                justifyContent="center"
                alignItems="center">
                <Typography variant="h4" gutterBottom component="p">
                    Stop loss as % from entry
                </Typography>
            </Box>
            <Box display="flex"
                justifyContent="center"
                alignItems="center"
                marginBottom={2}>
                <TextField id="stop-loss-percentage" label="%" variant="outlined" onChange={event => setStopLoss(event.currentTarget.value)} value={stopLoss} />
            </Box>
            <Box display="flex"
                justifyContent="center"
                alignItems="center">
                <Typography variant="h4" gutterBottom component="p">
                    Position size:
                </Typography>
            </Box>
            <Box display="flex"
                justifyContent="center"
                alignItems="center"
                marginBottom={2}>
                <Typography variant="h3" gutterBottom component="p" color={"primary"}>
                    {parseInt(positionSize)}$
                </Typography>
            </Box>
        </Paper>
    )
}

export default PositionSizeCalculator;