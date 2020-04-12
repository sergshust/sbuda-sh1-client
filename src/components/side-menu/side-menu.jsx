import React from "react";
import { connect } from "react-redux";
import {
    Drawer,
    IconButton,
    Divider,
    SwipeableDrawer,
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import useStyles from "./styles";
import { menuActions } from "../../actions/index";
import MenuList from "../menu-list";

const SideMenu = ({ isMenuOpen, hideMenu, showMenu }) => {
    const classes = useStyles();

    return (
        <SwipeableDrawer
            anchor="left"
            open={isMenuOpen}
            onOpen={showMenu}
            onClose={hideMenu}
        >
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={isMenuOpen}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={() => hideMenu()}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <MenuList />
            </Drawer>
        </SwipeableDrawer>
    );
};

const mapStateToProps = ({ menuReducer: { isMenuOpen } }) => ({
    isMenuOpen,
});

const mapDispatchToProps = {
    hideMenu: menuActions.hideMenu,
    showMenu: menuActions.showMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
