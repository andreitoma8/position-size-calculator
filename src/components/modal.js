import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button variant="contained" onClick={handleOpen}>How to use</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography variant="h5">
                        Input:
                    </Typography>
                    <Typography >
                        1. Your Account size
                    </Typography>
                    <Typography >
                        2. The % of your account you are ready to risk for the trade
                    </Typography>
                    <Typography >
                        3. The leverage you use (slider is set at 1 or default, witch means no levrage)
                    </Typography>
                    <Typography >
                        4. Your StopLoss for the Trade as a %
                    </Typography>
                    <Typography variant="h6" sx={{ mt: 2 }}>
                        The calculator will display your position size for the Trade.
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}