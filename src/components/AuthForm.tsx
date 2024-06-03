import { Alert, Box, Button, Container, Paper, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store/reducers';
import { authRequest } from '../store/reducers/authReducer';
import { DATA_PATH } from '../utils/consts';
import LoadingModal from './LoadingModal';

const AuthForm: React.FC = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    if (auth.token) {
      navigate(DATA_PATH);
    }
  }, [auth.token, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(authRequest({ username, password }));
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 8 }}>
        <Typography variant="h5" component="h1" gutterBottom>
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Login
          </Button>
          {auth.error && (
            <Alert severity="error" sx={{ marginTop: 2 }}>
              {auth.error}
            </Alert>
          )}
        </Box>
      </Paper>
      <LoadingModal open={auth.loading} />
    </Container>
  );
};

export default AuthForm;