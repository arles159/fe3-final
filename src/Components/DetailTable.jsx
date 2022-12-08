import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


const rows = [

];

export default function DetailTable({ name, username, id, email, phone, website }) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>ID</StyledTableCell>
                        <StyledTableCell align="right">Nombre</StyledTableCell>
                        <StyledTableCell align="right">Nombre de Usuario</StyledTableCell>
                        <StyledTableCell align="right">E-mail</StyledTableCell>
                        <StyledTableCell align="right">Telefono</StyledTableCell>
                        <StyledTableCell align="right">Sitio Web</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <StyledTableRow key={name}>
                        <StyledTableCell component="th" scope="row">
                            {id}
                        </StyledTableCell>
                        <StyledTableCell component="th" scope="row">
                            {name}
                        </StyledTableCell>
                        <StyledTableCell component="th" scope="row">
                            {username}
                        </StyledTableCell>
                        <StyledTableCell component="th" scope="row">
                            {email}
                        </StyledTableCell>
                        <StyledTableCell component="th" scope="row">
                            {phone}
                        </StyledTableCell>
                        <StyledTableCell component="th" scope="row">
                            {website}
                        </StyledTableCell>


                    </StyledTableRow>

                </TableBody>
            </Table>
        </TableContainer>
    );
}
