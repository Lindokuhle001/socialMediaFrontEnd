import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
// import Form from "./form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width={"100%"}
        // @ts-ignore
        bgcolor={theme.palette.background.alt}
        p={"1rem 6%"}
        textAlign={"center"}
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          LindoSocial
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p={"2rem"}
        m={"2rem auto"}
        borderRadius={"1.5rem"}
        // @ts-ignore

        bgcolor={theme.palette.background.alt}
      >
        <Typography fontWeight="700" variant="h2" sx={{ mb: "1.5rem" }}>
          Welcome To LindoSocial sign in with :
        </Typography>

        <Button
          fullWidth
          type="submit"
          sx={{
            m: "1rem 0",
            p: "0.2rem",
            backgroundColor: theme.palette.primary.main,
            // @ts-ignore

            color: theme.palette.background.alt,
            "&:hover": { color: theme.palette.primary.main },
          }}
        >
        <Typography fontWeight="500" variant="h2" color={theme.palette.primary.contrastText}>
          Google
        </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default LoginPage;
