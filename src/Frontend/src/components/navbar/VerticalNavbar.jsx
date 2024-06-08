import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InboxIcon from '@mui/icons-material/Inbox';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import InsertChartRoundedIcon from '@mui/icons-material/InsertChartRounded';
import PictureAsPdfRoundedIcon from '@mui/icons-material/PictureAsPdfRounded';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import MonitorHeartRoundedIcon from '@mui/icons-material/MonitorHeartRounded';
import MenuIcon from '@mui/icons-material/Menu';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import InventoryIcon from '@mui/icons-material/Inventory';

import { Button, Typography, styled, Tooltip } from '@mui/material';

import theme from '../../theme';

const VerticalNavbar = ({ isExpanded, toggleNavbar }) => {
    const navigate = useNavigate();
    const pathname = useLocation().pathname;
    const pid = useParams().pid;

    const [riskManagementOpen, setRiskManagementOpen] = React.useState(false);
    const [assetInformationOpen, setAssetCategoryOpen] = React.useState(false);

    const handleListItemClick = (path) => {
        console.log('path', path);
        navigate(`/Project/${pid}/${path}`);
    };

    const onClickRiskAssessment = () => {
        setRiskManagementOpen(!riskManagementOpen);
    };

    const onClickAssetInformation = () => {
        setAssetCategoryOpen(!assetInformationOpen);
    };
    const onClickSelectThreat = () => {
        console.log('Select Threat');
    };

    const onClickSelectControl = () => {
        console.log('Select Control');
    };

    return (
        <>
            <div className="absolute top-2 left-2">
                <Tooltip title="Toggle Navbar" arrow>
                    <Button onClick={toggleNavbar}>
                        <MenuIcon fontSize="large" />
                    </Button>
                </Tooltip>
            </div>

            <div className="flex flex-col justify-center bg-white transition-width duration-300 ">
                    <List
                        component="div"
                        aria-labelledby="nested-list-subheader"
                    >
                        <ListItem sx={{ padding: 0, marginLeft: 3 }}>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    fontFamily: 'Roboto-Regular',
                                    color: theme.palette.primary.dark,
                                    fontWeight: 'bold',
                                }}
                            >
                                Prepare
                            </Typography>
                        </ListItem>
                        {/* Project Home */}
                        <ListItemButton
                            selected={pathname === `/Project/${pid}/Dashboard`}
                            onClick={() => handleListItemClick('Dashboard')}
                            varient="test"
                        >
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary="Project Dashboard" />
                        </ListItemButton>
                        <br />
                        <ListItem sx={{ padding: 0, marginLeft: 3 }}>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    fontFamily: 'Roboto-Regular',
                                    color: theme.palette.primary.dark,
                                    fontWeight: 'bold',
                                }}
                            >
                                Categorize
                            </Typography>
                        </ListItem>
                        {/* Asset Inventory */}
                        <ListItemButton
                            selected={
                                pathname ===
                                `/Project/${pid}/AssetInventory/Synchronize`
                            }
                            onClick={() =>
                                handleListItemClick(
                                    'AssetInventory/Synchronize',
                                )
                            }
                            varient="test"
                        >
                            <ListItemIcon>
                                <CloudSyncIcon />
                            </ListItemIcon>
                            <ListItemText primary="Asset Synchronize" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <InventoryIcon />
                            </ListItemIcon>
                            <ListItemText primary="Asset Information" />
                            {assetInformationOpen ? (
                                <ExpandLess onClick={onClickAssetInformation} />
                            ) : (
                                <ExpandMore onClick={onClickAssetInformation} />
                            )}
                        </ListItemButton>
                        <Collapse
                            in={assetInformationOpen}
                            timeout="auto"
                            unmountOnExit
                        >
                            <List
                                component="div"
                                disablePadding
                                className="pl-4 flex flex-col"
                                dense
                            >
                                <ListItemButton
                                    selected={
                                        pathname ===
                                        `/Project/${pid}/AssetInventory/AssetInformation/Networking`
                                    }
                                    onClick={() =>
                                        handleListItemClick(
                                            'AssetInventory/AssetInformation/Networking',
                                        )
                                    }
                                >
                                    <div className="w-1/3"></div>
                                    <ListItemText primary="Networking" />
                                </ListItemButton>
                                <ListItemButton
                                    selected={
                                        pathname ===
                                        `/Project/${pid}/AssetInventory/AssetInformation/Instance`
                                    }
                                    onClick={() =>
                                        handleListItemClick(
                                            'AssetInventory/AssetInformation/Instance',
                                        )
                                    }
                                >
                                    <div className="w-1/3"></div>
                                    <ListItemText primary="Instance" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        {/* Cloud Topology */}
                        <ListItemButton
                            selected={
                                pathname === `/Project/${pid}/CloudTopology`
                            }
                            onClick={() => handleListItemClick('CloudTopology')}
                        >
                            <ListItemIcon>
                                <AccountTreeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Cloud Topology" />
                        </ListItemButton>
                        {/* Risk Assessment */}
                        <br />
                        <ListItem sx={{ padding: 0, marginLeft: 3 }}>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    fontFamily: 'Roboto-Regular',
                                    color: theme.palette.primary.dark,
                                    fontWeight: 'bold',
                                }}
                            >
                                Select
                            </Typography>
                        </ListItem>
                        <ListItemButton onClick={onClickRiskAssessment}>
                            <ListItemIcon>
                                <ManageAccountsRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Risk Assessment" />
                            {riskManagementOpen ? (
                                <ExpandLess />
                            ) : (
                                <ExpandMore />
                            )}
                        </ListItemButton>
                        <Collapse
                            in={riskManagementOpen}
                            timeout="auto"
                            unmountOnExit
                        >
                            <List
                                component="div"
                                disablePadding
                                className="pl-4 flex flex-col"
                                dense
                            >
                                <ListItemButton
                                    selected={
                                        pathname ===
                                        `/Project/${pid}/SelectAsset`
                                    }
                                    onClick={() =>
                                        handleListItemClick('SelectAsset')
                                    }
                                >
                                    <div className="w-1/3"></div>
                                    <ListItemText primary="Select Asset" />
                                </ListItemButton>
                                {/* <ListItemButton
                                selected={pathname === '/Project/SelectThreat'}
                                onClick={onClickSelectThreat}
                            >
                                <div className="w-1/3"></div>
                                <ListItemText primary="Select Risk" />
                            </ListItemButton> */}
                                <ListItemButton
                                    selected={
                                        pathname ===
                                        `/Project/${pid}/SelectProposedControl`
                                    }
                                    onClick={() =>
                                        handleListItemClick(
                                            'SelectProposedControl',
                                        )
                                    }
                                >
                                    <div className="w-1/3"></div>
                                    <ListItemText primary="Select Control" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        {/* Implement */}
                        <br />
                        <ListItem sx={{ padding: 0, marginLeft: 3 }}>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    fontFamily: 'Roboto-Regular',
                                    color: theme.palette.primary.dark,
                                    fontWeight: 'bold',
                                }}
                            >
                                Implement
                            </Typography>
                        </ListItem>
                        <ListItemButton
                            selected={pathname === `/Project/${pid}/Implement`}
                            onClick={() => handleListItemClick('Implement')}
                        >
                            <ListItemIcon>
                                <TaskAltIcon />
                            </ListItemIcon>
                            <ListItemText primary="Implement" />
                        </ListItemButton>
                        {/* Pentest */}
                        <br />
                        <ListItem sx={{ padding: 0, marginLeft: 3 }}>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    fontFamily: 'Roboto-Regular',
                                    color: theme.palette.primary.dark,
                                    fontWeight: 'bold',
                                }}
                            >
                                Assess
                            </Typography>
                        </ListItem>
                        <ListItemButton
                            selected={pathname === `/Project/${pid}/Pentest`}
                            onClick={() => handleListItemClick('Pentest')}
                        >
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Pentest" />
                        </ListItemButton>
                        {/* Reporting */}
                        <br />
                        <ListItem sx={{ padding: 0, marginLeft: 3 }}>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    fontFamily: 'Roboto-Regular',
                                    color: theme.palette.primary.dark,
                                    fontWeight: 'bold',
                                }}
                            >
                                Authorize
                            </Typography>
                        </ListItem>
                        {/* <ListItemButton
                            selected={pathname === `/Project/${pid}/Reporting`}
                            // onClick={() => handleListItemClick('Reporting')}
                            sx={{ opacity: 0.2 }}
                        >
                            <ListItemIcon>
                                <PictureAsPdfRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Reporting" />
                        </ListItemButton> */}
                        <br />
                        <ListItem sx={{ padding: 0, marginLeft: 3 }}>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    fontFamily: 'Roboto-Regular',
                                    color: theme.palette.primary.dark,
                                    fontWeight: 'bold',
                                }}
                            >
                                Monitor
                            </Typography>
                        </ListItem>
                        <ListItemButton
                            selected={pathname === `/Project/${pid}/Monitor`}
                            onClick={() => handleListItemClick('Monitor')}
                        >
                            <ListItemIcon>
                                <MonitorHeartRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Monitor" />
                        </ListItemButton>
                    </List>
            </div>
        </>
    );
};

export default VerticalNavbar;
