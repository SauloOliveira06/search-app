import { atom } from "recoil"

const dataColumn = atom({
    key: 'dataColumn',
    default: [
        { field: 'id', sortable: false, headerName: 'ID', width: 40 },
        { field: 'userId', sortable: false, headerName: 'USER ID', width: 80 },
        { field: 'title', headerName: 'TITLE', width: 200 },
        { field: 'body', sortable: false, headerName: 'BODY', width: 300 },
    ]
});

export default dataColumn;