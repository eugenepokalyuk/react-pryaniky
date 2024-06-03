import { AccessTime as AccessTimeIcon, Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';
import {
    Box,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Tooltip
} from '@mui/material';
import { format } from 'date-fns';
import React from 'react';

interface DataTableProps {
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

const DataTable: React.FC<DataTableProps> = ({ data, onEdit, onDelete }) => {
    return (
        <Table size="small" sx={{ tableLayout: 'fixed', wordWrap: 'break-word' }}>
            <TableHead>
                <TableRow>
                    <TableCell colSpan={2} align="center">Company Signature</TableCell>
                    <TableCell colSpan={3} align="center">Document</TableCell>
                    <TableCell colSpan={3} align="center">Employee</TableCell>
                    <TableCell rowSpan={2} align="center">Actions</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Number</TableCell>
                    <TableCell>Sig Date</TableCell>
                    <TableCell>Signature Name</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((row) => {
                    const companySigDate = formatDateTime(row.companySigDate);
                    const employeeSigDate = formatDateTime(row.employeeSigDate);
                    return (
                        <TableRow key={row.id}>
                            <TableCell>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    {companySigDate.date}
                                    <Tooltip title={companySigDate.time}>
                                        <AccessTimeIcon sx={{ fontSize: 16, marginLeft: 1 }} />
                                    </Tooltip>
                                </Box>
                            </TableCell>
                            <TableCell>{row.companySignatureName}</TableCell>
                            <TableCell>{row.documentName}</TableCell>
                            <TableCell>{row.documentStatus}</TableCell>
                            <TableCell>{row.documentType}</TableCell>
                            <TableCell>{row.employeeNumber}</TableCell>
                            <TableCell>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    {employeeSigDate.date}
                                    <Tooltip title={employeeSigDate.time}>
                                        <AccessTimeIcon sx={{ fontSize: 16, marginLeft: 1 }} />
                                    </Tooltip>
                                </Box>
                            </TableCell>
                            <TableCell>{row.employeeSignatureName}</TableCell>
                            <TableCell>
                                <IconButton color="primary" onClick={() => onEdit(row)}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton color="secondary" onClick={() => onDelete(row)}>
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
};

export default DataTable;