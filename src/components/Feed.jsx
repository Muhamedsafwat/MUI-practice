import { Box } from "@mui/material";

import Post from "./Post";

const Feed = () => {
  return (
    <Box component="main" flex={4} p={2}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Feed;
