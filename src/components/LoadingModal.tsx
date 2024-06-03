import { Box, CircularProgress, Modal } from '@mui/material';
import React from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root');

interface LoadingModalProps {
    open: boolean;
}

const LoadingModal: React.FC<LoadingModalProps> = ({ open }) => {
    if (!modalRoot) return null;

    return createPortal(
        <Modal
            open={open}
            aria-labelledby="loading-modal-title"
            aria-describedby="loading-modal-description"
            closeAfterTransition
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                    bgcolor: 'rgba(0, 0, 0, 0.5)',
                }}
            >
                <CircularProgress color="inherit" />
            </Box>
        </Modal>,
        modalRoot
    );
};

export default LoadingModal;