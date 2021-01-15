import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height:'100%',
        display: 'flex',
        flexDirection: 'column'
    },
    media: {
        height: 140,
    },
    cardMedia : {
        width: "auto",
        height: 250,
        padding: theme.spacing(2)
    },
    actions: {
        marginTop: 'auto',
    },
    chip: {
        marginLeft: theme.spacing(1),
        margiRight: theme.spacing(1),
        marginBottom: theme.spacing(0.5)
    },
    margin:{
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    }
}))

const BookItem = ({ book }) => {
    const classes = useStyles()
    {console.log(book,'book')}
    return (
        <Grid item xs={12} md={4} >
            <Card className={classes.root}>
                <CardActionArea style={{ display: "flex", alignItem: "center", justifyContent: "center" }} >
                    <CardMedia
                        className={classes.cardMedia}
                        component="img"
                        image={book.imageLinks && book.imageLinks.smallThumbnail}
                        title={book.title}
                    />
                </CardActionArea>
                <CardContent>
                        <Typography className={classes.margin} gutterBottom variant="h5" component="h2">
                            {book.title}
                        </Typography>
                        <Typography className={classes.margin} variant="body2" color="textSecondary" component="p">
                            {book.subtitle}
                        </Typography>
                        {book.authors && <Typography className={classes.margin}>
                            Authors: {book.authors.map(author => <Chip className={classes.chip} size="small" label={author} />)}
                        </Typography>}
                    </CardContent>
                <CardActions className={classes.actions}>
                    <Button href={book.previewLink} variant='outlined' target="_blank" size="small" color="primary">
                        Preview Book
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default BookItem
