import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Paper, TextField, Button, Typography, TextareaAutosize} from '@mui/material';
import { REQUEST_TYPES } from '../constant';

function APIClient() {
    const [response, setResponse] = useState({});
    return(
        <Paper
            sx = {{
                margin: 8,
                padding: 3
            }}
        >
            <Typography variant="h4" gutterBottom>
                REST Client
            </Typography>
            <FormControl>
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Type"
                    style={{width: 100}}
                >
                    {
                    REQUEST_TYPES.map(req_type => {
                        return(
                            <MenuItem value={req_type}>{req_type}</MenuItem>
                        )
                    })
                    }
                </Select>
            </FormControl>
            <FormControl size='medium'>
                <TextField 
                    id="outlined-basic" 
                    label="URL" 
                    variant="outlined" 
                    size='medium'
                    style={{
                        width: 800
                    }}
                    sx = {{
                        mx: 2
                    }}
                />
            </FormControl>
            <Button 
                variant="outlined" 
                size= 'large'
                style= {{'height': 55}}>Send</Button>
            <div>
                <TextareaAutosize 
                    minRows={10}
                    style = {{
                        height: 100,
                        width: 1000,
                        margin: 20
                    }}
                />
            </div>
        </Paper>

    )
}

export default APIClient;