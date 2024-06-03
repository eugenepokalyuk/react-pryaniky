import { AccessTime as AccessTimeIcon, Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';
import {
    Box,
    Card,
    CardActions,
    CardContent,
    Grid,
    IconButton,
    Popover,
    Typography
} from '@mui/material';
import { format } from 'date-fns';
import React, { useState } from 'react';

interface DataCardProps {
    data: any[];
    onEdit: (row: any) => void;
    onDelete: (row: any) => void;
}

const formatDateTime = (dateTime: string) => {
    const date = new Date(dateTime);
    return {
        date: format(date, 'MM.dd.yyyy'),
        time: format(date, 'HH:mm:ss'),
    };
};

const DataCard: React.FC<DataCardProps> = ({ data, onEdit, onDelete }) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [popoverContent, setPopoverContent] = useState<string>('');

    const handleTimeClick = (event: React.MouseEvent<HTMLElement>, time: string) => {
        setAnchorEl(event.currentTarget);
        setPopoverContent(time);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
        setPopoverContent('');
    };

    const open = Boolean(anchorEl);

    return (
        <Grid container spacing={2}>
            {data.map((row) => {
                const companySigDate = formatDateTime(row.companySigDate);
                const employeeSigDate = formatDateTime(row.employeeSigDate);
                return (
                    <Grid item xs={12} sm={6} key={row.id}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{row.documentName}</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography variant="body2">Company Sig Date: {companySigDate.date}</Typography>
                                    <IconButton
                                        sx={{ fontSize: 16, marginLeft: 1 }}
                                        onClick={(event) => handleTimeClick(event, companySigDate.time)}
                                    >
                                        <AccessTimeIcon />
                                    </IconButton>
                                </Box>
                                <Typography variant="body2">Company Signature Name: {row.companySignatureName}</Typography>
                                <Typography variant="body2">Document Status: {row.documentStatus}</Typography>
                                <Typography variant="body2">Document Type: {row.documentType}</Typography>
                                <Typography variant="body2">Employee Number: {row.employeeNumber}</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography variant="body2">Employee Sig Date: {employeeSigDate.date}</Typography>
                                    <IconButton
                                        sx={{ fontSize: 16, marginLeft: 1 }}
                                        onClick={(event) => handleTimeClick(event, employeeSigDate.time)}
                                    >
                                        <AccessTimeIcon />
                                    </IconButton>
                                </Box>
                                <Typography variant="body2">Employee Signature Name: {row.employeeSignatureName}</Typography>
                            </CardContent>
                            <CardActions>
                                <IconButton color="primary" onClick={() => onEdit(row)}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton color="secondary" onClick={() => onDelete(row)}>
                                    <DeleteIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                );
            })}
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handlePopoverClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Typography sx={{ p: 2 }}>{popoverContent}</Typography>
            </Popover>
        </Grid>
    );
};

export default DataCard;