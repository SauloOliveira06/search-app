import { DataGrid } from '@mui/x-data-grid';
import dataTable from 'atoms/DataTable';
import dataColumn from 'atoms/DataColumn';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import searchQuery from 'services/getQueryAPI';

const InfoTable = () => {
    const [dataRow, setDataRow] = useRecoilState(dataTable);
    const [dataCol,] = useRecoilState(dataColumn);
    const dataInfo = useRecoilValue(searchQuery);

    useEffect(() => {
        setInterval(() => {
            setDataRow(dataInfo)
        }, 1200)
    }, []);

    return (
        <>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={dataRow}
                    columns={dataCol}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </>
    )
}

export default InfoTable;