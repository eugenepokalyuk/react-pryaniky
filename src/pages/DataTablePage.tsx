import { Add as AddIcon } from '@mui/icons-material';
import { Box, Button, Container, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DataCard from '../components/DataCard';
import DataDialogs from '../components/DataDialogs';
import DataTable from '../components/DataTable';
import LoadingModal from '../components/LoadingModal';
import { createDataRequest, deleteDataRequest, fetchDataRequest, updateDataRequest } from '../store/actions/dataActions';
import { RootState } from '../store/reducers';
import { logout } from '../store/reducers/authReducer';

const DataTablePage: React.FC = () => {
    const dispatch = useDispatch();
    const dataState = useSelector((state: RootState) => state.data);
    const auth = useSelector((state: RootState) => state.auth);
    const navigate = useNavigate();

    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [addDialogOpen, setAddDialogOpen] = useState(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [currentRecord, setCurrentRecord] = useState<any>(null);

    useEffect(() => {
        if (auth.token) {
            dispatch(fetchDataRequest(auth.token));
        }
    }, [auth.token, dispatch]);

    const handleEdit = (row: any) => {
        setCurrentRecord(row);
        setEditDialogOpen(true);
    };

    const handleDelete = (row: any) => {
        setCurrentRecord(row);
        setDeleteDialogOpen(true);
    };

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };

    const handleAdd = (values: any) => {
        dispatch(createDataRequest({ data: values, token: auth.token }));
        setAddDialogOpen(false);
    };

    const handleUpdate = () => {
        if (currentRecord) {
            dispatch(updateDataRequest({ id: currentRecord.id, data: currentRecord, token: auth.token }));
            setEditDialogOpen(false);
        }
    };

    const handleDeleteConfirm = () => {
        if (currentRecord) {
            dispatch(deleteDataRequest({ id: currentRecord.id, token: auth.token }));
            setDeleteDialogOpen(false);
        }
    };

    if (dataState.loading) {
        return <LoadingModal open={auth.loading} />;
    }

    if (dataState.error) {
        return <Typography color="error">{dataState.error}</Typography>;
    }

    return (
        <Container maxWidth="lg">
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
                <Typography variant="h5" component="h1" gutterBottom>
                    Data Table
                </Typography>
                <Button color="secondary" variant="contained" onClick={handleLogout}>
                    Close session
                </Button>
            </Box>
            <Paper elevation={3} sx={{ padding: 4, marginTop: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 2 }}>
                    <Button
                        color="primary"
                        variant="contained"
                        startIcon={<AddIcon />}
                        onClick={() => setAddDialogOpen(true)}
                    >
                        Add
                    </Button>
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    <DataTable data={dataState.data} onEdit={handleEdit} onDelete={handleDelete} />
                </Box>
                <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                    <DataCard data={dataState.data} onEdit={handleEdit} onDelete={handleDelete} />
                </Box>
            </Paper>
            <DataDialogs
                openAddDialog={addDialogOpen}
                openEditDialog={editDialogOpen}
                openDeleteDialog={deleteDialogOpen}
                currentRecord={currentRecord}
                onCloseAdd={() => setAddDialogOpen(false)}
                onCloseEdit={() => setEditDialogOpen(false)}
                onCloseDelete={() => setDeleteDialogOpen(false)}
                onAdd={handleAdd}
                onEdit={handleUpdate}
                onDelete={handleDeleteConfirm}
            />
        </Container>
    );
};

export default DataTablePage;