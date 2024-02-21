import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import BpCheckedIcon from './BpCheckedIcon';
import BpIcon from './BpIcon';

function BpCheckbox(props) {
  return (
    <div>
      <Checkbox
        sx={{
          '&:hover': { bgcolor: 'transparent' },
        }}
        disableRipple
        color="default"
        checkedIcon={<BpCheckedIcon />}
        icon={<BpIcon />}
        label={props.label}
        inputProps={{ 'aria-label': 'Checkbox demo' }}
        style={props.style}
        {...props}
      />
      <label>
        {props.label}
      </label>
    </div>
  );
}

export default BpCheckbox