/**
 * External Dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { withRouter } from 'react-router-dom';

/**
 * Internal Dependencies
 */
import MovieTableHeader from './TableHeader';
import MovieTableToolbar from './TableToolbar';

function descendingComparator( a, b, orderBy ) {
    if ( b[orderBy] < a[orderBy] ) {
        return -1;
    }
    if ( b[orderBy] > a[orderBy] ) {
        return 1;
    }
    return 0;
}

function getComparator( order, orderBy ) {
    return order === 'desc'
        ? ( a, b ) => descendingComparator( a, b, orderBy )
        : ( a, b ) => -descendingComparator( a, b, orderBy );
}

function stableSort( array, comparator ) {
    const stabilizedThis = array.map( ( el, index ) => [el, index] );
    stabilizedThis.sort( ( a, b ) => {
        const order = comparator( a[0], b[0] );
        if ( order !== 0 ) return order;
        return a[1] - b[1];
    } );
    return stabilizedThis.map( el => el[0] );
}

const useStyles = makeStyles( theme => ( {
    root: {
        width: '100%',
        maxWidth: '100vw',
    },
    table: {
        minWidth: 750,
    },
    tableRow: {
        cursor: 'pointer',
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
} ) );

function MovieTable( { rows, history } ) {
    const classes = useStyles();
    const [order, setOrder] = React.useState( 'asc' );
    const [orderBy, setOrderBy] = React.useState( 'calories' );
    const [selected, setSelected] = React.useState( [] );
    const [page, setPage] = React.useState( 0 );
    const [rowsPerPage, setRowsPerPage] = React.useState( 5 );

    const handleRequestSort = ( event, property ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder( isAsc ? 'desc' : 'asc' );
        setOrderBy( property );
    };

    const handleSelectAllClick = ( event ) => {
        if ( event.target.checked ) {
            const newSelecteds = rows.map( n => n.name );
            setSelected( newSelecteds );
            return;
        }
        setSelected( [] );
    };

    const handleChangePage = ( event, newPage ) => {
        setPage( newPage );
    };

    const handleChangeRowsPerPage = ( event ) => {
        setRowsPerPage( parseInt( event.target.value, 10 ) );
        setPage( 0 );
    };

    const emptyRows = rowsPerPage - Math.min( rowsPerPage, rows.length - page * rowsPerPage );

    return (
        <div className={classes.root}>
            <MovieTableToolbar numSelected={selected.length} />
            <TableContainer>
                <Table
                    className={classes.table}
                    aria-labelledby="tableTitle"
                    size="medium"
                    aria-label="enhanced table"
                >
                    <MovieTableHeader
                        classes={classes}
                        numSelected={selected.length}
                        order={order}
                        orderBy={orderBy}
                        onSelectAllClick={handleSelectAllClick}
                        onRequestSort={handleRequestSort}
                        rowCount={rows.length}
                    />
                    <TableBody>
                        {stableSort( rows, getComparator( order, orderBy ) )
                            .slice( page * rowsPerPage, page * rowsPerPage + rowsPerPage )
                            .map( ( row, index ) => (
                                <TableRow
                                    hover
                                    role="checkbox"
                                    tabIndex={-1}
                                    key={row.name}
                                    onClick={() => history.push( `/movies/${row.id}` )}
                                    className={classes.tableRow}
                                >
                                    <TableCell align="right">
                                        {row.id}
                                    </TableCell>
                                    <TableCell align="right">{row.title}</TableCell>
                                    <TableCell align="right">{row.format}</TableCell>
                                    <TableCell align="right">{row.movie_length}</TableCell>
                                    <TableCell align="right">{row.release_year}</TableCell>
                                    <TableCell align="right">{row.rating}</TableCell>
                                </TableRow>
                            ) )}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </div>
    );
}

export default withRouter( MovieTable );
