import { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Link,
  Grid,
  Table,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TextField ,
  TableBody
} from '@mui/material';
import { Logo } from '../../logo';
import { Pencil as PencilIcon } from '../../../icons/pencil';
import { PropertyList } from '../../property-list';
import { PropertyListItem } from '../../property-list-item';
import { UserCircle as UserCircleIcon } from '../../../icons/user-circle';

const plans = [
  {
    image: <Logo />,
    name: 'Startup',
    price: '0',
    current: true
  },
  {
    image: <Logo />,
    name: 'Standard',
    price: '4.99',
    current: false
  },
  {
    image: <Logo />,
    name: 'Business',
    price: '29.99',
    current: false
  }
];

const user = {
  avatar: '/static/mock-images/avatars/avatar-anika_visser.png',
  name: 'Dummy User',
  email : 'dummy@email.com'
};

export const AccountBillingSettings = (props) => {
  const [selected, setSelected] = useState('Standard');

  return (
    <div {...props}>
        <Card>
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={4}
              xs={12}
            >
              <Typography variant="h6">
                Sign In
              </Typography>
            </Grid>
            <Grid
              item
              md={8}
              xs={12}
            >
              
              <Box
                sx={{
                  display: 'flex',
                  mt: 3,
                  alignItems: 'center'
                }}
              >
                <TextField
                  defaultValue={user.email}
                  label="Email Address"
                  size="small"
                  sx={{
                    flexGrow: 1,
                    mr: 3
                  }}
                />
               
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  mt: 3,
                  alignItems: 'center'
                }}
              >
                 <TextField
                  defaultValue={user.email}
                  label="Confirm Email Address"
                  size="small"
                  sx={{
                    flexGrow: 1,
                    mr: 3,
                    color : '#1D84C6'
                  }}
                />
               
               
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={4}
              xs={12}
            >
              <Typography variant="h6">
                Security Information
              </Typography>
            </Grid>
            <Grid
              item
              md={8}
              xs={12}
            >
              
              <Box
                sx={{
                  display: 'flex',
                  mt: 3,
                  alignItems: 'center'
                }}
              >
                <TextField
                  defaultValue={user.email}
                  label="Old Password"
                  type='password'
                  size="small"
                  sx={{
                    flexGrow: 1,
                    mr: 3
                  }}
                />
                <Button>
                  Edit
                </Button>
               
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  mt: 3,
                  alignItems: 'center'
                }}
              >
                 <TextField
                  defaultValue={user.email}
                  label="New Password"
                  size="small"
                  type='password'
                  sx={{
                    flexGrow: 1,
                    mr: 3
                  }}
                />
                <Button>
                  Edit
                </Button>
               
               
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  mt: 3,
                  alignItems: 'center'
                }}
              >
                 <TextField
                  defaultValue={user.email}
                  label="Confirm New Password"
                  size="small"
                  type='password'
                  sx={{
                    flexGrow: 1,
                    mr: 3
                  }}
                />
                  <Button>
                  Edit
                </Button>
               
               
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>


      <Card sx={{ mt: 4 }}>
        <CardContent>
          <div>
            <Typography variant="h6">
             Account Activity
            </Typography>
            
          </div>
        </CardContent>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>DATE</TableCell>
              <TableCell>TIME</TableCell>
              <TableCell>IP ADDRESS</TableCell>
              <TableCell>CHANGE MADE</TableCell>
              <TableCell>ACTION</TableCell>
              
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>22-02-2022</TableCell>
              <TableCell sx={{color : '#1D84C6'}}>10:00 PM</TableCell>
              <TableCell>192.162.20.22</TableCell>
              <TableCell sx={{color : '#1CB393'}}>Success at first attempt</TableCell>
              <TableCell align="right">
                <Link
                  sx={{color : '#1D84C6'}}
                  href="#"
                >
                  Login
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>22-02-2022</TableCell>
              <TableCell sx={{color : '#1D84C6'}}>08:32 AM</TableCell>
              <TableCell>192.162.20.22</TableCell>
              <TableCell sx={{color : '#E7414C'}}>Disconnection</TableCell>
              <TableCell align="right" >
                <Link
                  
                  href="#"
                  sx={{color : '#1D84C6'}}
                >
                  Login
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>22-02-2022</TableCell>
              <TableCell sx={{color : '#1D84C6'}}>9:23 PM</TableCell>
              <TableCell>192.162.20.22</TableCell>
              <TableCell sx={{color : '#1CB393'}}>Success at first attempt</TableCell>
              <TableCell align="right">
                <Link
                  sx={{color : '#1D84C6'}}
                  href="#"
                >
                  Login
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};
