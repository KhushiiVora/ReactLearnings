import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function PostCard(props) {
  return (
    <Card variant="outlined" sx={{ minHeight: 345 }}>
      <CardContent>
        <Typography variant="h4">
          {`${props.userId}.) ` + props.title}
        </Typography>
        <Typography variant="body2">{props.body}</Typography>
      </CardContent>
    </Card>
  );
}

export default PostCard;
