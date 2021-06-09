import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://hackmag.com/wp-content/uploads/2014/07/Untitled-17.jpg"
          title="Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Unlimited Storage Space
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Code to your heart's content! Code World takes up very little space, so projects can be created and stored on tablets without worry.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://github-atom-io-herokuapp-com.freetls.fastly.net/assets/ide-atom-55f6e6b4a1efa9317460504da32ff6fc412d529e74a46b013a294698efb28838.png"
          title="Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Compatible with the Web
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            A cloud-based service, you can easily switch from a tablet to a desktop in a flash, with all of your changes being saved!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://runtech.al/run_media/2020/08/top-programing-languages-2020.png"
          title="Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Templates for Tons of Languages
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Users can code in over 20 different languages and frameworks, from React and Angular to C++ and Ruby.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://repository-images.githubusercontent.com/124369770/d12e6800-b47a-11e9-85a3-5fe53e198d49"
          title="Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Push to GitHub
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Once your project is completed, you can push it to a public GitHub repository.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://miro.medium.com/max/1600/0*AwqXb5NXJbrKRLxH."
          title="Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Collaborate with others
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Share projects with other programmers to create more magic.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.dailydot.com/wp-content/uploads/2019/01/Screen-Shot-2019-01-16-at-10.45.18-PM.png"
          title="Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Join a community
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            We have Facebook groups and a Slack channel to help each other succeed!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  </Grid>
</Grid>
  );
}