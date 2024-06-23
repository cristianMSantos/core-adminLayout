import { Box } from "@mui/material";
import styled from "styled-components";

export const Main = styled(Box).attrs({ component: 'main' })`
  flex-grow: 1;
  height: 100vh;
  overflow: auto;
`;