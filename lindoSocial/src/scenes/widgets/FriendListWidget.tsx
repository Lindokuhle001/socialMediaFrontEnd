import { Box, Typography, useTheme } from "@mui/material";
import Friend from "../../components/friend";
import WidgetWrapper from "../../components/widgetWrapper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "../../state/index";
import { State } from "types";

type FriendListWidgetProps = {
  id?: string;
};

const FriendListWidget = ({ id }: FriendListWidgetProps) => {
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const token = useSelector((state: State) => state.token);
  const friends = useSelector((state: State) => state.user?.friends);

  const getFriends = async () => {
    const response = await fetch(`http://localhost:3000/users/${id}/friends`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    dispatch(setFriends({ friends: data }));
  };

  useEffect(() => {
    getFriends();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <WidgetWrapper>
      <Typography
        // @ts-ignore
        color={palette.neutral.dark}
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5rem" }}
      >
        Friend List
      </Typography>
      <Box display="flex" flexDirection="column" gap="1.5rem">
        {friends?.map((friend) => (
          <Friend
            key={friend?.id}
            friendId={friend?.id}
            name={`${friend?.firstName} ${friend?.lastName}`}
            subtitle={friend?.occupation}
            userPicturePath={friend?.picturePath}
          />
        ))}
      </Box>
    </WidgetWrapper>
  );
};

export default FriendListWidget;
