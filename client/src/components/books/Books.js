import { Container, Grid, LinearProgress, makeStyles } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import BookItem from './BookItem'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3)
    }
}))
const Books = ({ books, loading }) => {
    const classes = useStyles()

    if(loading){
       return <LinearProgress/>
    }
    else{
        return (
            <Container className={classes.root}>
                <Grid container spacing={2}>
                    {books && books.map((book, index) => (
                        <BookItem key={index} book={book}/>
                    ))}
                </Grid>
            </Container>
        )}
}

const mapStateToProps = state => ({
    books: state.booksReducer.books,
    loading: state.booksReducer.loading
})

export default connect(mapStateToProps, null)(Books)
