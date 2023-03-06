import { Box } from '@material-ui/core'
import React from 'react'
import Rating from '@material-ui/lab/Rating'

const StarRating = ({ stars }) => {
    return (
        <div>
            <Box component='fieldset' borderColor='transparent'>
                <Rating name='read-only' readOnly value={stars}></Rating>
            </Box>
        </div>
    )
}

export default StarRating