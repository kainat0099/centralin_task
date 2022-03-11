import { useState, useEffect } from 'react';
import Head from 'next/head';
import { Box, Container, Divider, Tab, Tabs, Typography } from '@mui/material';
import { DashboardLayout } from '../components/dashboard/dashboard-layout';
import { AccountBillingSettings } from '../components/dashboard/account/account-billing-settings';
import { AccountGeneralSettings } from '../components/dashboard/account/account-general-settings';
import { AccountNotificationsSettings } from '../components/dashboard/account/account-notifications-settings';
import { AccountTeamSettings } from '../components/dashboard/account/account-team-settings';
import { AccountSecuritySettings } from '../components/dashboard/account/account-security-settings';
import { gtm } from '../lib/gtm';

const tabs = [
  { label: 'Personal Information', value: 'general' },
  { label: 'Sign In & Security', value: 'billing' },
  { label: 'Connect & View Social Media Information', value: 'team' },
  { label: 'Personalization', value: 'notifications' },
  { label: 'Centralin Points', value: 'security' }
];

const Account = () => {
  const [currentTab, setCurrentTab] = useState('billing');

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  const handleTabsChange = (event, value) => {
    setCurrentTab(value);
  };

  return (
    <>
      <Head>
        <title>
        Centralin
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4">
            Account
          </Typography>
          <Tabs
            indicatorColor="primary"
            onChange={handleTabsChange}
            scrollButtons="auto"
            textColor="primary"
            value={currentTab}
            variant="scrollable"
            sx={{ mt: 3 }}
          >
            {tabs.map((tab) => (
              <Tab
                key={tab.value}
                label={tab.label}
                value={tab.value}
              />
            ))}
          </Tabs>
          <Divider sx={{ mb: 3 }} />
          {currentTab === 'general' && <AccountGeneralSettings />}
          {currentTab === 'billing' && <AccountBillingSettings />}
          {currentTab === 'team' && <AccountTeamSettings />}
          {currentTab === 'notifications' && <AccountNotificationsSettings />}
          {currentTab === 'security' && <AccountSecuritySettings />}
        </Container>
      </Box>
    </>
  );
};

Account.getLayout = (page) => (
  
      <DashboardLayout>
        {page}
      </DashboardLayout>
    
  );
  


export default Account;
