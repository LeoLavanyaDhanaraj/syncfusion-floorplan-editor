import type { Components } from "@mui/material/styles";

import type { Theme } from "../types";

export const MuiCardHeader = {
  defaultProps: {
    titleTypographyProps: { variant: "h6" },
    subheaderTypographyProps: { variant: "body2" },
  },
  styleOverrides: { root: { padding: "16px 16px 16px" } },
} satisfies Components<Theme>["MuiCardHeader"];
