import { Typography, useTheme } from "@mui/material";
import FlexBetween from "../../components/flexBetween";
import WidgetWrapper from "../../components/widgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  // @ts-ignore

  const dark = palette.neutral.dark;
  // @ts-ignore

  const main = palette.neutral.main;
  // @ts-ignore

  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="../../assets/"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>MikaCosmetics</Typography>
        <Typography color={medium}>mikacosmetics.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Your pathway to stunning and immaculate beauty and made sure your skin
        is exfoliating skin and shining like light.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;