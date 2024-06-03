import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from '@mui/material';
import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import * as yup from 'yup';

// Validation schema
const validationSchema = yup.object({
    companySigDate: yup.date().required('Company Sig Date is required'),
    companySignatureName: yup.string().required('Company Signature Name is required'),
    documentName: yup.string().required('Document Name is required'),
    documentStatus: yup.string().required('Document Status is required'),
    documentType: yup.string().required('Document Type is required'),
    employeeNumber: yup.string().required('Employee Number is required'),
    employeeSigDate: yup.date().required('Employee Sig Date is required'),
    employeeSignatureName: yup.string().required('Employee Signature Name is required'),
});

interface DataDialogsProps {
    openAddDialog: boolean;
    openEditDialog: boolean;
    openDeleteDialog: boolean;
    currentRecord: any;
    onCloseAdd: () => void;
    onCloseEdit: () => void;
    onCloseDelete: () => void;
    onAdd: (values: any) => void;
    onEdit: () => void;
    onDelete: () => void;
}

const DataDialogs: React.FC<DataDialogsProps> = ({
    openAddDialog,
    openEditDialog,
    openDeleteDialog,
    currentRecord,
    onCloseAdd,
    onCloseEdit,
    onCloseDelete,
    onAdd,
    onEdit,
    onDelete
}) => {
    const formik: any = useFormik({
        initialValues: {
            companySigDate: '',
            companySignatureName: '',
            documentName: '',
            documentStatus: '',
            documentType: '',
            employeeNumber: '',
            employeeSigDate: '',
            employeeSignatureName: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            if (openAddDialog) {
                onAdd(values);
            } else if (openEditDialog) {
                onEdit();
            }
            formik.resetForm();
        },
    });

    useEffect(() => {
        if (openEditDialog && currentRecord) {
            formik.setValues(currentRecord);
        } else if (openAddDialog) {
            formik.resetForm();
        }
    }, [openEditDialog, openAddDialog, currentRecord]);

    const getHelperText = (field: string) => {
        const touched = formik.touched[field];
        const error = formik.errors[field];
        if (touched && typeof error === 'string') {
            return error;
        }
        return undefined;
    };

    return (
        <>
            {/* Dialog for adding a new record */}
            <Dialog open={openAddDialog} onClose={onCloseAdd}>
                <DialogTitle>Add New Record</DialogTitle>
                <DialogContent>
                    <DialogContentText>Fill in the fields below to add a new record:</DialogContentText>
                    <form onSubmit={formik.handleSubmit}>
                        <TextField
                            margin="dense"
                            label="Company Sig Date"
                            name="companySigDate"
                            value={formik.values.companySigDate}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            fullWidth
                            error={formik.touched.companySigDate && Boolean(formik.errors.companySigDate)}
                            helperText={getHelperText('companySigDate')}
                        />
                        <TextField
                            margin="dense"
                            label="Company Signature Name"
                            name="companySignatureName"
                            value={formik.values.companySignatureName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            fullWidth
                            error={formik.touched.companySignatureName && Boolean(formik.errors.companySignatureName)}
                            helperText={getHelperText('companySignatureName')}
                        />
                        <TextField
                            margin="dense"
                            label="Document Name"
                            name="documentName"
                            value={formik.values.documentName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            fullWidth
                            error={formik.touched.documentName && Boolean(formik.errors.documentName)}
                            helperText={getHelperText('documentName')}
                        />
                        <TextField
                            margin="dense"
                            label="Document Status"
                            name="documentStatus"
                            value={formik.values.documentStatus}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            fullWidth
                            error={formik.touched.documentStatus && Boolean(formik.errors.documentStatus)}
                            helperText={getHelperText('documentStatus')}
                        />
                        <TextField
                            margin="dense"
                            label="Document Type"
                            name="documentType"
                            value={formik.values.documentType}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            fullWidth
                            error={formik.touched.documentType && Boolean(formik.errors.documentType)}
                            helperText={getHelperText('documentType')}
                        />
                        <TextField
                            margin="dense"
                            label="Employee Number"
                            name="employeeNumber"
                            value={formik.values.employeeNumber}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            fullWidth
                            error={formik.touched.employeeNumber && Boolean(formik.errors.employeeNumber)}
                            helperText={getHelperText('employeeNumber')}
                        />
                        <TextField
                            margin="dense"
                            label="Employee Sig Date"
                            name="employeeSigDate"
                            value={formik.values.employeeSigDate}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            fullWidth
                            error={formik.touched.employeeSigDate && Boolean(formik.errors.employeeSigDate)}
                            helperText={getHelperText('employeeSigDate')}
                        />
                        <TextField
                            margin="dense"
                            label="Employee Signature Name"
                            name="employeeSignatureName"
                            value={formik.values.employeeSignatureName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            fullWidth
                            error={formik.touched.employeeSignatureName && Boolean(formik.errors.employeeSignatureName)}
                            helperText={getHelperText('employeeSignatureName')}
                        />
                        <DialogActions>
                            <Button onClick={onCloseAdd} color="primary">
                                Cancel
                            </Button>
                            <Button type="submit" color="primary">
                                Add
                            </Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>

            {/* Dialog for editing a record */}
            <Dialog open={openEditDialog} onClose={onCloseEdit}>
                <DialogTitle>Edit Record</DialogTitle>
                <DialogContent>
                    <DialogContentText>Edit the fields below:</DialogContentText>
                    <form onSubmit={formik.handleSubmit}>
                        <TextField
                            margin="dense"
                            label="Company Sig Date"
                            name="companySigDate"
                            value={formik.values.companySigDate}
                            onChange={formik.handleChange}
                            fullWidth
                            error={formik.touched.companySigDate && Boolean(formik.errors.companySigDate)}
                            helperText={getHelperText('companySigDate')}
                        />
                        <TextField
                            margin="dense"
                            label="Company Signature Name"
                            name="companySignatureName"
                            value={formik.values.companySignatureName}
                            onChange={formik.handleChange}
                            fullWidth
                            error={formik.touched.companySignatureName && Boolean(formik.errors.companySignatureName)}
                            helperText={getHelperText('companySignatureName')}
                        />
                        <TextField
                            margin="dense"
                            label="Document Name"
                            name="documentName"
                            value={formik.values.documentName}
                            onChange={formik.handleChange}
                            fullWidth
                            error={formik.touched.documentName && Boolean(formik.errors.documentName)}
                            helperText={getHelperText('documentName')}
                        />
                        <TextField
                            margin="dense"
                            label="Document Status"
                            name="documentStatus"
                            value={formik.values.documentStatus}
                            onChange={formik.handleChange}
                            fullWidth
                            error={formik.touched.documentStatus && Boolean(formik.errors.documentStatus)}
                            helperText={getHelperText('documentStatus')}
                        />
                        <TextField
                            margin="dense"
                            label="Document Type"
                            name="documentType"
                            value={formik.values.documentType}
                            onChange={formik.handleChange}
                            fullWidth
                            error={formik.touched.documentType && Boolean(formik.errors.documentType)}
                            helperText={getHelperText('documentType')}
                        />
                        <TextField
                            margin="dense"
                            label="Employee Number"
                            name="employeeNumber"
                            value={formik.values.employeeNumber}
                            onChange={formik.handleChange}
                            fullWidth
                            error={formik.touched.employeeNumber && Boolean(formik.errors.employeeNumber)}
                            helperText={getHelperText('employeeNumber')}
                        />
                        <TextField
                            margin="dense"
                            label="Employee Sig Date"
                            name="employeeSigDate"
                            value={formik.values.employeeSigDate}
                            onChange={formik.handleChange}
                            fullWidth
                            error={formik.touched.employeeSigDate && Boolean(formik.errors.employeeSigDate)}
                            helperText={getHelperText('employeeSigDate')}
                        />
                        <TextField
                            margin="dense"
                            label="Employee Signature Name"
                            name="employeeSignatureName"
                            value={formik.values.employeeSignatureName}
                            onChange={formik.handleChange}
                            fullWidth
                            error={formik.touched.employeeSignatureName && Boolean(formik.errors.employeeSignatureName)}
                            helperText={getHelperText('employeeSignatureName')}
                        />
                        <DialogActions>
                            <Button onClick={onCloseEdit} color="primary">
                                Cancel
                            </Button>
                            <Button type="submit" color="primary">
                                Save
                            </Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>

            {/* Dialog for deleting a record */}
            <Dialog open={openDeleteDialog} onClose={onCloseDelete}>
                <DialogTitle>Delete Record</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this record?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onCloseDelete} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={onDelete} color="secondary">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default DataDialogs;