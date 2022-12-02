import React from "react";
import {  ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from '@material-ui/core/styles'
import { mainLayoutStyle } from "helpers/Constants";
export function MainLayout(props) {
  const outerTheme = createTheme({
    palette: {
      primary: {
        main: "#1A4BA1",
      },

      secondary: {
        main: "#FBFBFB",
      },
    },
  });
  const classes = mainLayoutStyle();
  return (
    <>
      <ThemeProvider theme={outerTheme}>
        <div className={classes.root + " mb-5"}>
          <main className={classes.content}>{props.children}</main>
        </div>
      </ThemeProvider>
    </>
  );
}
