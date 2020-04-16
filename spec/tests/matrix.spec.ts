import { Matrix } from '../../lib/data-structures/matrix';

describe('Matrix Tests', () => {
    
    it('make matrix from 2d array', () => {
        const matrix = Matrix.make([[1, 2, 3], [4, 5, 6]]);

        expect(matrix.rows).toBe(2);
        expect(matrix.columns).toBe(3);
        expect(matrix.data).toEqual([[1, 2, 3], [4, 5, 6]]);
    });
    
    it('zeros make matrix create 2d array of zeros', () => {
        const matrix = Matrix.zeros(2, 3);
        
        expect(matrix.rows).toBe(2);
        expect(matrix.columns).toBe(3);
        expect(matrix.data).toEqual([[0, 0, 0], [0, 0, 0]]);
    });

    it('ones make matrix create 2d array of ones', () => {
        const matrix = Matrix.ones(2, 3);
        
        expect(matrix.rows).toBe(2);
        expect(matrix.columns).toBe(3);
        expect(matrix.data).toEqual([[1, 1, 1], [1, 1, 1]]);
    });

    it('construct makes rows with function', () => {
        const matrix = Matrix.construct(2, 3, (row, column) => {
            return 3 * row + column;
        });

        expect(matrix.rows).toBe(2);
        expect(matrix.columns).toBe(3);
        expect(matrix.data).toEqual([[0, 1, 2], [3, 4, 5]]);
    });

    it('slice should make copy of the matrix', () => {
        const matrix = Matrix.construct(2, 3, (row, column) => {
            return 3 * row + column;
        });
        const slice = Matrix.slice(matrix);
        slice.data[0][0] = 10;

        expect(slice.rows).toBe(2);
        expect(slice.columns).toBe(3);
        expect(matrix.data).toEqual([[0, 1, 2], [3, 4, 5]]);
        expect(slice.data).toEqual([[10, 1, 2], [3, 4, 5]]);
    });

    it('map should double each value', () => {
        const matrix = Matrix.make([[1, 2, 3], [4, 5, 6]]);
        const map = Matrix.map(matrix, (value, _, _2) => value * 2);

        expect(map.rows).toBe(2);
        expect(map.columns).toBe(3);
        expect(map.data).toEqual([[2, 4, 6], [8, 10, 12]]);
    });

    it('multiple should scale by 2', () => {
        let matrix = Matrix.ones(2, 3);
        matrix = Matrix.multiply(matrix, 2);

        expect(matrix.rows).toBe(2);
        expect(matrix.columns).toBe(3);
        expect(matrix.data).toEqual([[2, 2, 2], [2, 2, 2]]);
    });

    it ('multiple by matrix should throw error for wrong dimensions', () => {
        let lhs = Matrix.ones(2, 3);
        let rhs = Matrix.ones(2, 2);
        expect(() => {
            Matrix.multiply(lhs, rhs);
        }).toThrowError();
    });

    it('multiply by matrix should multipy both sides', () => {
        let lhs = Matrix.construct(2, 3, (row, column) => {
            return 3 * row + column;
        });
        let rhs = Matrix.construct(3, 2, (row, column) => {
            return 2 * row + column;
        });
        const multiply = Matrix.multiply(lhs, rhs);
        expect(multiply.rows).toBe(2);
        expect(multiply.columns).toBe(2);
        expect(multiply.data).toEqual([[10, 13], [28, 40]]);
    });

    it('hadamard should throw error for wrong dimensions for columns', () => {
        let lhs = Matrix.ones(2, 3);
        let rhs = Matrix.ones(2, 2);
        expect(() => {
            Matrix.hadamard(lhs, rhs);
        }).toThrowError();
    });

    it('hadamard should throw error for wrong dimensions for rows', () => {
        let lhs = Matrix.ones(2, 3);
        let rhs = Matrix.ones(3, 3);
        expect(() => {
            Matrix.hadamard(lhs, rhs);
        }).toThrowError();
    });

    it('hadamard should product the two matrix', () => {
        let lhs = Matrix.construct(2, 2, (row, column) => {
            return 2 * row + column;
        });
        let rhs = Matrix.construct(2, 2, (row, column) => {
            return 2 * row + column;
        });
        const multiply = Matrix.hadamard(lhs, rhs);
        expect(multiply.rows).toBe(2);
        expect(multiply.columns).toBe(2);
        expect(multiply.data).toEqual([[0, 1], [4, 9]]);
    });

    it('column multiply should throw for multi-columns matrix', () => {
        let lhs = Matrix.ones(2, 2);
        let column = Matrix.ones(2, 2);
        expect(() => {
            Matrix.columnMultiply(lhs, column);
        }).toThrowError();
    });
    
    it('column multiply should throw for incorrect rows', () => {
        let lhs = Matrix.ones(2, 2);
        let column = Matrix.ones(1, 1);
        expect(() => {
            Matrix.columnMultiply(lhs, column);
        }).toThrowError();
    });

    it('column multiply should multiply by column', () => {
        let lhs = Matrix.ones(2, 2);
        const column = Matrix.construct(2, 1, (row, column) => {
            return row * 2 + 3;
        });
        lhs = Matrix.columnMultiply(lhs, column);
        expect(lhs.rows).toBe(2); 
        expect(lhs.columns).toBe(2); 
        expect(lhs.data).toEqual([[3, 3], [5, 5]]); 
    });

    it('column add should throw for multi-columns matrix', () => {
        let lhs = Matrix.ones(2, 2);
        let column = Matrix.ones(2, 2);
        expect(() => {
            Matrix.columnAdd(lhs, column);
        }).toThrowError();
    });
    
    it('column add should throw for incorrect rows', () => {
        let lhs = Matrix.ones(2, 2);
        let column = Matrix.ones(1, 1);
        expect(() => {
            Matrix.columnAdd(lhs, column);
        }).toThrowError();
    });

    it('column add should multiply by column', () => {
        let lhs = Matrix.zeros(2, 2);
        const column = Matrix.construct(2, 1, (row, column) => {
            return row * 2 + 3;
        });
        lhs = Matrix.columnAdd(lhs, column);
        expect(lhs.rows).toBe(2); 
        expect(lhs.columns).toBe(2); 
        expect(lhs.data).toEqual([[3, 3], [5, 5]]); 
    });

    it('column subtract should throw for multi-columns matrix', () => {
        let lhs = Matrix.ones(2, 2);
        let column = Matrix.ones(2, 2);
        expect(() => {
            Matrix.columnSubtract(lhs, column);
        }).toThrowError();
    });
    
    it('column subtract should throw for incorrect rows', () => {
        let lhs = Matrix.ones(2, 2);
        let column = Matrix.ones(1, 1);
        expect(() => {
            Matrix.columnSubtract(lhs, column);
        }).toThrowError();
    });

    it('column subtract should multiply by column', () => {
        let lhs = Matrix.zeros(2, 2);
        const column = Matrix.construct(2, 1, (row, column) => {
            return -1 * (row * 2 + 3);
        });
        lhs = Matrix.columnSubtract(lhs, column);
        expect(lhs.rows).toBe(2); 
        expect(lhs.columns).toBe(2); 
        expect(lhs.data).toEqual([[3, 3], [5, 5]]); 
    });

    it('add should add number to each value', () => {
        let lhs = Matrix.construct(2, 3, (row, column) => {
            return 3 * row + column;
        });
        lhs = Matrix.add(lhs, 1);
        expect(lhs.rows).toBe(2);
        expect(lhs.columns).toBe(3);
        expect(lhs.data).toEqual([[1,2,3],[4,5,6]]);
    });

    
    it('add should throw for multi-dimensions for columns', () => {
        let lhs = Matrix.ones(2, 3);
        let rhs = Matrix.ones(2, 4);
        expect(() => {
            Matrix.add(lhs, rhs);
        }).toThrowError();
    });
    
    it('add should throw for multi-dimensions for rows', () => {
        let lhs = Matrix.ones(2, 3);
        let rhs = Matrix.ones(3, 3);
        expect(() => {
            Matrix.add(lhs, rhs);
        }).toThrowError();
    });
    
    it('add should combine matrix', () => {
        let lhs = Matrix.construct(3, 3, (row, column) => {
            return 3 * row + column;
        });
        let rhs = Matrix.construct(3, 3, (row, column) => {
            return 3 * row + column;
        });
        const matrix = Matrix.add(lhs, rhs);
        expect(matrix.rows).toBe(3);
        expect(matrix.columns).toBe(3);
        expect(matrix.data).toEqual([[0, 2, 4], [6, 8, 10], [12, 14, 16]]);
    });

    it('subtract should add number to each value', () => {
        let lhs = Matrix.construct(2, 3, (row, column) => {
            return 3 * row + column;
        });
        lhs = Matrix.subtract(lhs, 1);
        expect(lhs.rows).toBe(2);
        expect(lhs.columns).toBe(3);
        expect(lhs.data).toEqual([[-1,0,1],[2,3,4]]);
    });

    
    it('subtract should throw for multi-dimensions for columns', () => {
        let lhs = Matrix.ones(2, 3);
        let rhs = Matrix.ones(2, 4);
        expect(() => {
            Matrix.subtract(lhs, rhs);
        }).toThrowError();
    });
    
    it('subtract should throw for multi-dimensions for rows', () => {
        let lhs = Matrix.ones(2, 3);
        let rhs = Matrix.ones(3, 3);
        expect(() => {
            Matrix.subtract(lhs, rhs);
        }).toThrowError();
    });
    
    it('subtract should combine matrix', () => {
        let lhs = Matrix.construct(3, 3, (row, column) => {
            return 3 * row + column;
        });
        let rhs = Matrix.construct(3, 3, (row, column) => {
            return 3 * row + column;
        });
        const matrix = Matrix.subtract(lhs, rhs);
        expect(matrix.rows).toBe(3);
        expect(matrix.columns).toBe(3);
        expect(matrix.data).toEqual([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
    });

    it('sum expect to sum matrix', () => {
        const matrix = Matrix.ones(3, 3);
        const sum = Matrix.sum(matrix);
        expect(sum).toBe(9);
    });

    it('transpose should flip Matrix', () => {
        let matrix = Matrix.construct(2, 3, (row, column) => {
            return 3 * row + column;
        });
        matrix = Matrix.transpose(matrix);

        expect(matrix.rows).toBe(3);
        expect(matrix.columns).toBe(2);
        expect(matrix.data).toEqual([[0, 3], [1, 4], [2, 5]]);
    });

    it('column should throw for negative column', () => {
        let matrix = Matrix.construct(2, 3, (row, column) => {
            return 3 * row + column;
        });
        expect(() => {
            Matrix.column(matrix, -1);
        }).toThrowError();
    });
    
    it('column should throw for column pass the matrix', () => {
        let matrix = Matrix.construct(2, 3, (row, column) => {
            return 3 * row + column;
        });
        expect(() => {
            Matrix.column(matrix, 3);
        }).toThrowError();
    });

    it('column should extract column', () => {
        let matrix = Matrix.construct(2, 3, (row, column) => {
            return 3 * row + column;
        });
        matrix = Matrix.column(matrix, 1);
        expect(matrix.rows).toBe(2);
        expect(matrix.columns).toBe(1);
        expect(matrix.data).toEqual([[1],[4]]);
    });
    
    it('row should throw for negative row', () => {
        let matrix = Matrix.construct(2, 3, (row, column) => {
            return 3 * row + column;
        });
        expect(() => {
            Matrix.row(matrix, -1);
        }).toThrowError();
    });
    
    it('row should throw for row pass the matrix', () => {
        let matrix = Matrix.construct(2, 3, (row, column) => {
            return 3 * row + column;
        });
        expect(() => {
            Matrix.row(matrix, 2);
        }).toThrowError();
    });

    it('row should extract row', () => {
        let matrix = Matrix.construct(2, 3, (row, column) => {
            return 3 * row + column;
        });
        matrix = Matrix.row(matrix, 1);
        expect(matrix.rows).toBe(1);
        expect(matrix.columns).toBe(3);
        expect(matrix.data).toEqual([[3, 4, 5]]);
    });



});
