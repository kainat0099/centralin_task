import { useEffect, useMemo, useRef, useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  Drawer,
  Typography,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { Calendar as CalendarIcon } from "../../icons/calendar";
import { Cash as CashIcon } from "../../icons/cash";
import { ChartBar as ChartBarIcon } from "../../icons/chart-bar";
import { ChartPie as ChartPieIcon } from "../../icons/chart-pie";
import { ChatAlt2 as ChatAlt2Icon } from "../../icons/chat-alt2";
import { ClipboardList as ClipboardListIcon } from "../../icons/clipboard-list";
import { CreditCard as CreditCardIcon } from "../../icons/credit-card";
import { Home as HomeIcon } from "../../icons/home";
import { LockClosed as LockClosedIcon } from "../../icons/lock-closed";
import { Mail as MailIcon } from "../../icons/mail";
import { MailOpen as MailOpenIcon } from "../../icons/mail-open";
import { Newspaper as NewspaperIcon } from "../../icons/newspaper";
import { OfficeBuilding as OfficeBuildingIcon } from "../../icons/office-building";
import { ReceiptTax as ReceiptTaxIcon } from "../../icons/receipt-tax";
import { Selector as SelectorIcon } from "../../icons/selector";
import { Share as ShareIcon } from "../../icons/share";
import { ShoppingBag as ShoppingBagIcon } from "../../icons/shopping-bag";
import { ShoppingCart as ShoppingCartIcon } from "../../icons/shopping-cart";
import { Truck as TruckIcon } from "../../icons/truck";
import { UserCircle as UserCircleIcon } from "../../icons/user-circle";
import { Refresh as RefreshIcon } from "../../icons/refresh";
import { Users as UsersIcon } from "../../icons/users";
import { XCircle as XCircleIcon } from "../../icons/x-circle";
import { Logo } from "../logo";
import { Scrollbar } from "../scrollbar";
import { DashboardSidebarSection } from "./dashboard-sidebar-section";
import { OrganizationPopover } from "./organization-popover";
import GroupsIcon from "@mui/icons-material/Groups";
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CompressIcon from '@mui/icons-material/Compress';
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import FeedbackIcon from "@mui/icons-material/Feedback";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import PersonIcon from "@mui/icons-material/Person";
import FacebookIcon from "@mui/icons-material/Facebook";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useAuth } from '../../hooks/use-auth';
import toast from 'react-hot-toast';

const user = {
  avatar: "/static/mock-images/avatars/avatar-siegbert_gottfried",
  name: "Admin One",
};
const getSections = (t) => [
  {
    title: t(""),
    items: [
      {
        title: t("Downloads"),
        path: "#",
        icon: <CloudDownloadIcon fontSize="small" />,
        children: [
          {
            title: t("Sample 1"),
            path: "#",
          },
          {
            title: t("Sample 2"),
            path: "#",
          },
          
         
        ],
      },
      {
        title: t("Shared Links"),
        path: "#",
        icon: <GroupsIcon fontSize="small" />,
      },
      {
        title: t("Personal Links"),
        path: "#",
        icon: <PersonIcon fontSize="small" />,
      },
      {
        title: t("Admin Groups"),
        path: "#",
        icon: <AssessmentIcon fontSize="small" />,
        children: [
          {
            title: t("Sample 1"),
            path: "#",
          },
          {
            title: t("Sample 2"),
            path: "#",
          },
        ],
      },
      {
        title: t("Smart Alerts"),
        path: "#",
        icon: <NotificationsIcon fontSize="small" />,
      },
      {
        title: t("Trading Diary"),
        path: "#",
        icon: <AssessmentIcon fontSize="small" />,
      },
      {
        title: t("Co-Development"),
        path: "#",
        icon: <CompressIcon fontSize="small" />,
      },
    ],
  },
];

const getLowSections = (t) => [
  {
    title: t(""),
    items: [
      {
        title: t("Support"),
        path: "#",
        icon: <SupportAgentIcon fontSize="small" />,
      },
      {
        title: t("Feedback"),
        path: "#",
        icon: <FeedbackIcon fontSize="small" />,
      },
    ],
  },
];

export const DashboardSidebar = (props) => {
  const { onClose, open } = props;
  const router = useRouter();
  const { t } = useTranslation();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
    noSsr: true,
  });
  const sections = useMemo(() => getSections(t), [t]);
  const low_sections = useMemo(() => getLowSections(t), [t]);

  const organizationsRef = useRef(null);
  const [openOrganizationsPopover, setOpenOrganizationsPopover] =
    useState(false);

    const { logout } = useAuth();

    const handleLogout = async () => {
      try {
        onClose?.();
        await logout();
        router.push('/authentication/login');
      } catch (err) {
        console.error(err);
        toast.error('Unable to logout.');
      }
    };

  const handlePathChange = () => {
    if (!router.isReady) {
      return;
    }

    if (open) {
      onClose?.();
    }
  };

  useEffect(
    handlePathChange,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.isReady, router.asPath]
  );

  const handleOpenOrganizationsPopover = () => {
    setOpenOrganizationsPopover(true);
  };

  const handleCloseOrganizationsPopover = () => {
    setOpenOrganizationsPopover(false);
  };

  const content = (
    <>
      <Scrollbar
        sx={{
          height: "100%",
          "& .simplebar-content": {
            height: "100%",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <div>
            {/* <Box sx={{ p: 3 }}>
              <NextLink
                href="/"
                passHref
              >
                <a>
                  <Logo
                    sx={{
                      height: 42,
                      width: 42
                    }}
                  />
                </a>
              </NextLink>
            </Box> */}
            <br></br>
            <Box sx={{ px: 2 }}>
              <Box
                // onClick={handleOpenOrganizationsPopover}
                ref={organizationsRef}
                sx={{
                  alignItems: "center",
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  px: 3,
                  py: "11px",
                  borderRadius: 1,
                }}
              >
                <div>
                  <Avatar
                    src={user.avatar}
                    sx={{
                      height: 80,
                      width: 80,
                    }}
                  >
                    <UserCircleIcon fontSize="small" />
                  </Avatar>
                  <Typography color="inherit" variant="subtitle1">
                    {user.name}
                  </Typography>
                  <Typography color="neutral.400" variant="body2">
                    Centralin User
                  </Typography>
                </div>
              </Box>
            </Box>
          </div>
          <Divider
            sx={{
              borderColor: "#2D3748",
              my: 3,
            }}
          />
          <Box sx={{ flexGrow: 1 }}>
            {sections.map((section) => (
              <DashboardSidebarSection
                key={section.title}
                path={router.asPath}
                sx={{
                  mt: 2,
                  "& + &": {
                    mt: 2,
                  },
                }}
                {...section}
              />
            ))}
          </Box>
          <Divider
            sx={{
              borderColor: "#2D3748", // dark divider
            }}
          />
          <Box sx={{ flexGrow: 1 }}>
            {low_sections.map((section) => (
              <DashboardSidebarSection
                key={section.title}
                path={router.asPath}
                sx={{
                  mt: 2,
                  "& + &": {
                    mt: 2,
                  },
                }}
                {...section}
              />
            ))}
          </Box>
          <Divider
            sx={{
              borderColor: "#2D3748",
              my: 3,
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FacebookIcon sx={{  m: 2 }} />
            <TelegramIcon sx={{   m: 2 }}  />
            <YouTubeIcon sx={{   m: 2  }}  />
            
           
        
          
          </Box>
          <Box sx={{ p: 2 }}>
           
              <Button
              endIcon={<ExitToAppIcon  />}
                style={{color : 'white' , backgroundColor : '#1CB393'}}
                component="a"
                fullWidth
                sx={{ mt: 2 }}
                variant="contained"
                onClick={handleLogout}
              >
                {t("Log out")}
              </Button>
           
          </Box>
          
        </Box>
      </Scrollbar>
      <OrganizationPopover
        anchorEl={organizationsRef.current}
        onClose={handleCloseOrganizationsPopover}
        open={openOrganizationsPopover}
      />
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "#555555",
            borderRightColor: "divider",
            borderRightStyle: "solid",
            borderRightWidth: (theme) =>
              theme.palette.mode === "dark" ? 1 : 0,
            color: "#FFFFFF",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "#555555",
          color: "#FFFFFF",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
