import * as React from 'react';
import { MenuItem, FormControl, Select, InputLabel } from '@mui/material';

export default function CountrySelector() {
    const [country, setCountry] = React.useState('');

    const handleChange = (event) => {
        setCountry(event.target.value);
    };

    const getCountryFlag = (countryCode) => {
        return <span className={`fi fi-${countryCode}`} style={{ marginRight: '8px' }} />;
    };

    return (
        <FormControl variant="outlined" sx={{ ml:15,borderRadius:"20px",minWidth: 150,backgroundColor:"#082D41",color:'white', }}>
            <InputLabel sx={{ color:'white',fontWeight:" bold"}} >Country</InputLabel>
            <Select sx={{ borderColor:"white",borderRadius:"20px",color:'white'}}
                value={country}
                onChange={handleChange}
                label="Country"
            >
                <MenuItem value="IN" >
                    {getCountryFlag('in')} India
                </MenuItem>
                <MenuItem value="US">
                    {getCountryFlag('us')} USA
                </MenuItem>
                <MenuItem value="CA">
                    {getCountryFlag('ca')} Canada
                </MenuItem>
                <MenuItem value="RU">
                    {getCountryFlag('ru')} Russia
                </MenuItem>
            </Select>
        </FormControl>
    );
}
