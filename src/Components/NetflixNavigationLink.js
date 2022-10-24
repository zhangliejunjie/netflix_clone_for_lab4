import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import Link, { LinkProps } from "@mui/material/Link";

export default function NetflixNavigationLink({
  sx,
  children,
  ...others
}) {
  return (
    <Link
      {...others}
      component={RouterLink}
      sx={{ color: "white", textDecoration: "none", ...sx }}
    > 
      {children}
    </Link>
  );
}
