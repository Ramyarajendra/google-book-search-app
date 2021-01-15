import React, { useState } from 'react'
import { Button, Container, Grid, makeStyles, TextField } from '@material-ui/core'
import { connect } from 'react-redux'
import { searchBooks } from '../actions/booksAction'
import booksReducer from '../reducers/booksReducer'
import { Alert} from '@material-ui/lab'

const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(3)
    },
    alert:{
        marginBottom: theme.spacing(2) 
    }
}))

const Search = ({ searchBooks, error }) => {
    const classes = useStyles()
    const [text, setText] = useState('')

    const onSearch = (e) => {
        e.preventDefault()
        if(text){
            searchBooks(text)
        }
    }

    return (
        <Container className={classes.container}>
        {error && <Alert className={classes.alert} severity='error'>{error}</Alert>}
            <form onSubmit={onSearch}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={9}>
                        <TextField value={text} type='search' onChange={e => setText(e.target.value)} fullWidth size='small' id="search" label="Search Books" variant="outlined" required />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Button type='submit' fullWidth variant='contained' color='primary'> Search </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}
const mapStateToProps = state => ({
    error: state.booksReducer.error
})

export default connect(mapStateToProps, { searchBooks })(Search)
