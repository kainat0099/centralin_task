import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography
} from '@mui/material';
import { ArrowRight as ArrowRightIcon } from '../../../icons/arrow-right';
import { Scrollbar } from '../../scrollbar';

export const AccountSecuritySettings = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <>
      <Card>
        <h1>Sample Page</h1>
      </Card>
    </>
  );
};
