import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

export const Product = (product: any) => {
  const item = product?.product || {};

  return (
    <Card className="card-item" sx={{ width: 400, height: 300, margin: 2 }}>
      <CardMedia sx={{ height: 140 }} image={`${item?.thumbnail}`} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`${item?.description.slice(0, 50)} ...`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
