import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Link, Card, Grid, Typography, CardContent, Stack } from '@mui/material';
// utils
import Iconify from './iconify/Iconify';
import AccountMoreMenu from './AccountMoreMenu';
// ----------------------------------------------------------------------

const StyledCardMedia = styled('div')({
  position: 'relative',
  paddingTop: 'calc(100% * 3 / 4)',
  bgcolor: '#292929',
});

const StyledTitle = styled(Link)({
  height: 22,
  overflow: 'hidden',
  WebkitLineClamp: 1,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
});

const StyledInfo = styled(Stack)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: theme.spacing(3),
  color: '#808080',
}));

const StyledCover = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
  borderColor: '#292929',
});

// ----------------------------------------------------------------------

BlogPostCard.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default function BlogPostCard({ post, index, isLoad }) {
  const { cover, name, email, phone, program, message, createdAt } = post;

  const POST_INFO = [
    { string: phone, icon: 'carbon:phone-filled' },
    { string: program, icon: 'fluent:phone-laptop-32-filled' },
    { string: message, icon: 'ant-design:message-filled' },
  ];

  return (
    <Grid item xs={12} sm={6} md={3}     >
      <Card sx={{
        textAlign: 'left',
        position: 'relative',
        bgcolor: '#292929',
        borderRadius: "20px"
      }}>
        <StyledCardMedia>
          <StyledCover alt={name} src={cover} />
          <AccountMoreMenu post={post} isLoad={isLoad} />
        </StyledCardMedia>

        <CardContent
          sx={{
            pt: 4,
          }}
        >
          <Typography gutterBottom variant="caption" sx={{ color: 'white', display: 'block' }}>
            {email}
          </Typography>

          <StyledTitle
            color="#FFFFFF"
            variant="h7"
            underline="hover"
          >
            {name}
          </StyledTitle>

          <StyledInfo >
            {POST_INFO.map((info, index) => (

              <Box
                key={index}

                sx={{
                  display: 'flex',
                  // flexWrap: 'wrap',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}
              >
                <Iconify icon={info.icon} sx={{ width: 16, height: 16, mr: 0.5 }} />
                <Typography
                  sx={
                    {
                      whiteSpace: "nowrap",
                    }
                  }
                  variant="caption">{info.string}</Typography>
              </Box>
            ))}
          </StyledInfo>
        </CardContent>
      </Card>
    </Grid>
  );
}
