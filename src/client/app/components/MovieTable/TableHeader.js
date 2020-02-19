import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Checkbox from '@material-ui/core/Checkbox';


const headCells = [
    {
        id: 'id', numeric: true, disablePadding: false, label: 'ID',
    },
    {
        id: 'title', numeric: false, disablePadding: false, label: 'Title',
    },
    {
        id: 'format', numeric: false, disablePadding: false, label: 'Format',
    },
    {
        id: 'movie_length', numeric: true, disablePadding: false, label: 'Length',
    },
    {
        id: 'release_year', numeric: true, disablePadding: false, label: 'Release Year',
    },
    {
        id: 'rating', numeric: true, disablePadding: false, label: 'Rating',
    },
];


export default function MovieTableHeader( {
    classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort,
} ) {
    const createSortHandler = property => ( event ) => {
        onRequestSort( event, property );
    };

    return (
        <TableHead>
            <TableRow>
                {headCells.map( headCell => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'default'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler( headCell.id )}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <span className={classes.visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ) )}
            </TableRow>
        </TableHead>
    );
}

MovieTableHeader.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf( ['asc', 'desc'] ).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};
