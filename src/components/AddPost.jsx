import { useState } from "react";

//MUI components
import {
  Tooltip,
  Fab,
  Box,
  Typography,
  Modal,
  styled,
  TextField,
  Avatar,
  ButtonGroup,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";

//icons
import {
  Add,
  EmojiEmotions,
  PersonAdd,
  VideoCameraBack,
  Image,
} from "@mui/icons-material";
import { Stack } from "@mui/system";

//modal styling
const StyledBox = styled(Box)({
  width: 400,
  borderRadius: 5,
  padding: 15,
});

//user avatar
const UserCard = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 5,
  marginTop: 5,
  marginBottom: 15,
});

const AddPost = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [privacy, setPrivacy] = useState("public");

  return (
    <>
      <Tooltip
        sx={{ position: "fixed", bottom: 15, right: 15 }}
        title="Add new post"
      >
        <Fab onClick={handleOpen} color="primary" aria-label="add">
          <Add />
        </Fab>
      </Tooltip>
      <Modal
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        open={open}
        onClose={handleClose}
      >
        <StyledBox bgcolor={"background.default"} color={"text.primary"}>
          <Typography variant="h6" color="gray" textAlign="center">
            Create post
          </Typography>
          <UserCard>
            <Avatar src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            <Box>
              <Typography variant="span" fontWeight={500}>
                John Doe
              </Typography>
              <Typography
                sx={{ display: "block" }}
                variant="caption"
                fontWeight={100}
                color="gray"
              >
                {privacy}
              </Typography>
            </Box>
          </UserCard>
          <TextField
            placeholder="What's on your mind?"
            variant="outlined"
            sx={{ width: "100%" }}
            multiline
            rows={4}
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup fullWidth>
            <Button
              sx={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
              variant="contained"
            >
              Add post
            </Button>
            <FormControl sx={{ width: "50%" }}>
              <InputLabel id="select">Privacy</InputLabel>
              <Select
                onChange={(e) => setPrivacy(e.target.value)}
                sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                labelId="select"
                label="Audience"
              >
                <MenuItem value="public">Public</MenuItem>
                <MenuItem value="friends">Friends</MenuItem>
                <MenuItem value="only me">Only me</MenuItem>
              </Select>
            </FormControl>
          </ButtonGroup>
        </StyledBox>
      </Modal>
    </>
  );
};

export default AddPost;
