import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import React from "react";

const TodoTable = () => {
  return (
    <>
      <div>TODO LIST </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Task Name Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Edit </TableCell>
              <TableCell>Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Task Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>
                <BorderColorOutlinedIcon />
              </TableCell>
              <TableCell>
                <RemoveIcon />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Task Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>
                <BorderColorOutlinedIcon />
              </TableCell>
              <TableCell>
                <RemoveIcon />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Task Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>
                <BorderColorOutlinedIcon />
              </TableCell>
              <TableCell>
                <RemoveIcon />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Task Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>
                <BorderColorOutlinedIcon />
              </TableCell>
              <TableCell>
                <RemoveIcon />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        display="flex"
        justify-content="center"
        alignItems="center"
        component={Paper}
        mt={2}
        minHeight="2rem"
      >
        <AddOutlinedIcon />
        ADD TODO
      </Box>
    </>
  );
};

export default TodoTable;
