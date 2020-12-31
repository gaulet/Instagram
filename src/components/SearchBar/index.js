import React from 'react';
import { string, func } from 'prop-types';

import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import CancelIcon from '@material-ui/icons/Cancel';

import useStyles from './styles';

const INPUT_HEIGHT = '30px';

const SearchBar = ({ value, onChange }) => {
  const classes = useStyles();

  const handleChange = (e) => onChange(e.target.value);
  const clearValue = () => onChange('');

  return (
    <TextField
      label={<SearchIcon className={classes.searchIcon} fontSize="small" />}
      className={classes.root}
      margin="dense"
      variant="outlined"
      value={value}
      onChange={handleChange}
      InputProps={{
        endAdornment: value && (
          <IconButton size="small" onClick={clearValue}>
            <CancelIcon fontSize="small" className={classes.icons} />
          </IconButton>
        ),
        style: { height: INPUT_HEIGHT },
      }}
    />
  );
};

SearchBar.propTypes = {
  value: string,
  onChange: func,
};

export default SearchBar;
