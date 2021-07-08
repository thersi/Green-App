import React from 'react';
import StSwitch from '../styledComponents/StSwitch';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import StPaper from '../styledComponents/StPaper';
import StHeader from '../styledComponents/StHeader';
import StCalender from '../styledComponents/StCalender';

export default function AddActivities() {
  return (
    <div>
      <StCalender />
      <StPaper elevation={0}>
        <StHeader>
          <h2>Activities Today</h2>
        </StHeader>
        <FormGroup>
          <FormControlLabel
            control={<StSwitch />}
            label={<span style={{ fontSize: '15pt' }}>{'Activity 1'}</span>}
          />
          <FormControlLabel
            control={<StSwitch />}
            label={<span style={{ fontSize: '15pt' }}>{'Activity 2'}</span>}
          />
          <FormControlLabel
            control={<StSwitch />}
            label={<span style={{ fontSize: '15pt' }}>{'Activity 3'}</span>}
          />
          <FormControlLabel
            control={<StSwitch />}
            label={<span style={{ fontSize: '15pt' }}>{'Activity 4'}</span>}
          />
          <FormControlLabel
            control={<StSwitch />}
            label={<span style={{ fontSize: '15pt' }}>{'Activity 5'}</span>}
          />
        </FormGroup>
      </StPaper>
    </div>
  );
}
