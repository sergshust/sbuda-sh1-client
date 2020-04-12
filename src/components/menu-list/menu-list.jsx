import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {
    List, ListItem, ListItemText,
} from "@material-ui/core";
import { menuActions } from "../../actions/index";

const menuItems = {
    ADMIN: [
        {
            id: 1,
            title: "Статті",
            route: "/posts",
        },
        {
            id: 2,
            title: "Користувачі",
            route: "/users",
        },
        {
            id: 3,
            title: "Адм Статей",
            route: "/articles-list",
        },
        {
            id: 4,
            title: "Про нас",
            route: "/about-us",
        },
    ],
    MODERATOR: [
        {
            id: 1,
            title: "Статті",
            route: "/posts",
        },
        {
            id: 2,
            title: "Адм Статей",
            route: "/articles-list",
        },
        {
            id: 3,
            title: "Про нас",
            route: "/about-us",
        },
    ],
    USER: [
        {
            id: 1,
            title: "Статті",
            route: "/posts",
        },
        {
            id: 2,
            title: "Про нас",
            route: "/about-us",
        },
    ],
    PUBLIC: [
        {
            id: 1,
            title: "Статті",
            route: "/posts",
        },
        {
            id: 2,
            title: "Про нас",
            route: "/about-us",
        },
    ],
};

const MenuList = ({ currentUser, hideMenu }) => {
    const history = useHistory();
    const listItems = menuItems[currentUser.role || "PUBLIC"];

    return (
        <List>
            {listItems.map(({ id, title, route }) => (
                <ListItem
                    button
                    key={id}
                    onClick={() => {
                        history.push(route);
                        hideMenu();
                    }}
                >
                    <ListItemText
                        primary={title}
                    />
                </ListItem>
            ))}
        </List>
    );
};

const mapStateToProps = ({ authReducer: { currentUser } }) => ({
    currentUser,
});

const mapDispatchToProps = {
    hideMenu: menuActions.hideMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuList);
