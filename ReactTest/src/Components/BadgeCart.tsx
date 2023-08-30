
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function CustomizedBadges() {
  return (
    <IconButton aria-label="cart" className='ShoppingIcon'>
      <StyledBadge badgeContent={4} color="secondary">
        <ShoppingCartOutlinedIcon style={{color:'white'}} fontSize='large'/>
      </StyledBadge>
    </IconButton>
  );
}
