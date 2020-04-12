import React, { useEffect } from "react";
import {
    Typography, Divider, Grid,
} from "@material-ui/core";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import useStyles from "./styles";
import ArticleCard from "../article-card/article-card";
import articlesActions from "../../actions/articles.actions";
import withSchoolService from "../hoc/with-school-service";

const ArticlesSection = ({
    limit = 0,
    skip = 0,
    getAllArticles,
    articles,
}) => {
    const classes = useStyles();

    useEffect(() => {
        getAllArticles(skip, limit);
    }, [getAllArticles, skip, limit]);

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Статті
            </Typography>
            {/*<Divider className={classes.divider} />*/}
            <div>
                <Grid container spacing={3}>
                    {articles.map((post) => (
                        <Grid key={post._id} item xs={12} sm={6} md={4}>
                            <ArticleCard {...post} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
};

const mapStateToProps = ({ articlesReducer: { articles } }) => ({
    articles,
});

const mapDispatchToProps = (
    dispatch,
    ownProps,
) => bindActionCreators({
    getAllArticles: (
        skip, limit,
    ) => articlesActions.getAllArticles(ownProps.schoolService, skip, limit)(),
}, dispatch);

export default withSchoolService()(
    connect(mapStateToProps, mapDispatchToProps)(ArticlesSection),
);
