import React from "react";
import { TextField } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    textField: {
        width: '49%'
    }
})

const InputFields = (props) => {
    console.log(props)
    const style = useStyles()
    return (
        <TextField
            label="Dense"
            id="outlined-margin-dense"
            className={style.textField}
            defaultValue="BAC"
            helperText="Some important text"
            margin="dense"
            variant="outlined"
        />
    )
}

export default InputFields