import * as React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function createData(microbit: String, fram: String) {
  return { microbit, fram };
}
const rows = [
  createData("Pin 9", "CS"),
  createData("Pin 15", "MOSI"),
  createData("Pin 14", "MISO"),
  createData("Pin 13", "SCK"),
  createData("Pin 3V3", "VCC"),
  createData("Pin GND", "GND"),
];

export default function ConnectionTable() {
  return (
    <TableContainer>
      <Table
        sx={{ width: "60%", margin: "auto", mb: 5 }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow sx={{ backgroundColor: "#E8E8E8" }}>
            <TableCell align="center" sx={{ border: 1 }}>
              Micro:bit
            </TableCell>
            <TableCell align="center" sx={{ border: 1 }}>
              FRAM
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.microbit}>
              <TableCell align="center" sx={{ border: 1 }}>
                {row.microbit}
              </TableCell>
              <TableCell align="center" sx={{ border: 1 }}>
                {row.fram}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
