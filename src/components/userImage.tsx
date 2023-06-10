import { Box } from "@mui/material";

export type UserImage = {
  image?: string;
  size?: string;
};

const UserImage = ({ image, size = "60px" }: UserImage) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`https://lindosocial.onrender.com/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;
