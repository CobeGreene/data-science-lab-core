export namespace Matrix {
    export interface Matrix {
        rows: number;
        columns: number;
        data: number[][];
    }

    export function make(matrix: number[][]): Matrix {
        const rows = matrix.length;
        const columns = matrix[0].length;
        return {
            rows,
            columns,
            data: matrix
        }
    }

    export function construct(rows: number, columns: number, func: (row: number, column: number) => number): Matrix {
        return {
            rows,
            columns,
            data: Array(rows).fill(undefined).map((_, row) => Array(columns).fill(undefined).map((_2, column) => func(row, column)))
        }
    }

    export function zeros(rows: number, columns: number): Matrix {
        return {
            rows,
            columns,
            data: Array(rows).fill(undefined).map(() => Array(columns).fill(0))
        }
    }

    export function ones(rows: number, columns: number): Matrix {
        return {
            rows,
            columns,
            data: Array(rows).fill(undefined).map(() => Array(columns).fill(1))
        }
    }

    export function slice(matrix: Matrix): Matrix {
        return {
            rows: matrix.rows,
            columns: matrix.columns,
            data: Array(matrix.rows).fill(undefined).map((_, index) => matrix.data[index].slice())
        }
    }

    export function map(matrix: Matrix, func: (value: number, row: number, column: number) => number): Matrix {
        return {
            rows: matrix.rows,
            columns: matrix.columns,
            data: matrix.data.map((row, index) => row.map((value, column) => func(value, index, column)))
        }
    }

    export function multiply(lhs: Matrix, rhs: Matrix | number): Matrix {
        if (typeof (rhs) === 'number') {
            return Matrix.map(lhs, (value: number) => rhs * value);
        } else {
            if (lhs.columns != rhs.rows) {
                throw new Error(`Can't multiple matrices with dimensions ${lhs.rows}x${lhs.columns} and ${rhs.rows}x${rhs.columns}`);
            }
            return Matrix.construct(lhs.rows, rhs.columns, (row, column) => {
                let sum = 0;
                for (let idx = 0; idx < lhs.columns; ++idx) {
                    sum += lhs.data[row][idx] * rhs.data[idx][column];
                }
                return sum;
            });
        }
    }

    export function hadamard(lhs: Matrix, rhs: Matrix): Matrix {
        if (lhs.rows !== rhs.rows || lhs.columns !== rhs.columns) {
            throw new Error(`Can't hadamard product matrices with dimensions ${lhs.rows}x${lhs.columns} and ${rhs.rows}x${rhs.columns}`);
        }
        return Matrix.construct(lhs.rows, lhs.columns, (row, column) => {
            return lhs.data[row][column] * rhs.data[row][column];
        });
    }

    export function columnMultiply(matrix: Matrix, columnRhs: Matrix): Matrix {
        if (columnRhs.columns !== 1) {
            throw new Error(`Can't column multiply with a column matrix that has ${columnRhs.columns} columns.`);
        }
        if (columnRhs.rows !== matrix.rows) {
            throw new Error(`Can't column multiply matrices with dimensions ${matrix.rows}x${matrix.columns} and ${columnRhs.rows}x${columnRhs.columns}`);
        }
        return Matrix.construct(matrix.rows, matrix.columns, (row, col) => {
            return matrix.data[row][col] * columnRhs.data[row][0];
        });
    }
    
    export function columnAdd(matrix: Matrix, columnRhs: Matrix): Matrix {
        if (columnRhs.columns !== 1) {
            throw new Error(`Can't column add with a column matrix that has ${columnRhs.columns} columns.`);
        }
        if (columnRhs.rows !== matrix.rows) {
            throw new Error(`Can't column add matrices with dimensions ${matrix.rows}x${matrix.columns} and ${columnRhs.rows}x${columnRhs.columns}`);
        }
        return Matrix.construct(matrix.rows, matrix.columns, (row, col) => {
            return matrix.data[row][col] + columnRhs.data[row][0];
        });
    }
    
    export function columnSubtract(matrix: Matrix, columnRhs: Matrix): Matrix {
        if (columnRhs.columns !== 1) {
            throw new Error(`Can't column subtract with a column matrix that has ${columnRhs.columns} columns.`);
        }
        if (columnRhs.rows !== matrix.rows) {
            throw new Error(`Can't column subtract matrices with dimensions ${matrix.rows}x${matrix.columns} and ${columnRhs.rows}x${columnRhs.columns}`);
        }
        return Matrix.construct(matrix.rows, matrix.columns, (row, col) => {
            return matrix.data[row][col] - columnRhs.data[row][0];
        });
    }

    export function add(lhs: Matrix, rhs: Matrix | number): Matrix {
        if (typeof (rhs) === 'number') {
            return Matrix.construct(lhs.rows, lhs.columns, (row, column) => {
                return lhs.data[row][column] + rhs;
            });
        } else {
            if (lhs.rows !== rhs.rows || lhs.columns !== rhs.columns) {
                throw new Error(`Can't add matrices with dimensions ${lhs.rows}x${lhs.columns} and ${rhs.rows}x${rhs.columns}`);
            }
            return Matrix.construct(lhs.rows, lhs.columns, (row, column) => {
                return lhs.data[row][column] + rhs.data[row][column];
            });
        }
    }

    export function subtract(lhs: Matrix, rhs: Matrix | number): Matrix {
        if (typeof (rhs) === 'number') {
            return Matrix.construct(lhs.rows, lhs.columns, (row, column) => {
                return lhs.data[row][column] - rhs;
            });
        } else {
            if (lhs.rows !== rhs.rows || lhs.columns !== rhs.columns) {
                throw new Error(`Can't subtract matrices with dimensions ${lhs.rows}x${lhs.columns} and ${rhs.rows}x${rhs.columns}`);
            }
            return Matrix.construct(lhs.rows, lhs.columns, (row, column) => {
                return lhs.data[row][column] - rhs.data[row][column];
            });
        }
    }

    export function sum(matrix: Matrix): number {
        return matrix.data
            .reduce((accumulator, current) => accumulator.concat(current))
            .reduce((accumulator, current) => accumulator + current);
    }

    export function transpose(matrix: Matrix): Matrix {
        return Matrix.construct(matrix.columns, matrix.rows, (row, column) => {
            return matrix.data[column][row];
        });
    }

    export function column(matrix: Matrix, column: number): Matrix {
        if (column < 0 || column >= matrix.columns) {
            throw new Error(`Can't get column ${column} from matrix ${matrix.rows}x${matrix.columns}`);
        }
        return Matrix.construct(matrix.rows, 1, (row, _) => {
            return matrix.data[row][column];
        });
    }

    export function row(matrix: Matrix, row: number): Matrix {
        if (row < 0 || row >= matrix.rows) {
            throw new Error(`Can't get row ${row} from matrix ${matrix.rows}x${matrix.columns}`);
        }
        return Matrix.construct(1, matrix.columns, (_, column) => {
            return matrix.data[row][column];
        });
    }

}
