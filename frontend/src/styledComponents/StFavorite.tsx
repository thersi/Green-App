import React from 'react';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';


export default function StFavorite() {
    const [checked, setChecked] = React.useState(true);
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    setChecked(event.target.checked);
  };
  return(
  <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
        icon={<FavoriteBorder />} checkedIcon={<Favorite />}
      />
  );
}