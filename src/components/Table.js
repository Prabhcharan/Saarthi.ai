import React from "react";
import "./Table.css";
import { MdClose } from "react-icons/md";

const formatDate = (date) => {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;

  return [day, month, year].join('-');
}

const Table = ({ data: _data, onChange }) => {
  const [data, setData] = React.useState(_data);
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const handleDeleted = (i) => {
    let val = data;
    val.splice(i, 1);
    setData(val);
    onChange(val);
    forceUpdate();
  };

  React.useEffect(() => {
    setData(_data);
  }, [_data]);

  return (
    <div className="table-container">
      <table class="content-table">
        <thead>
          <tr>
            {!!(data.length) && <th className="del"></th>}
            <th>Name</th>
            <th>Employee ID</th>
            <th>Department</th>
            <th>Email ID</th>
            <th>DOJ</th>
          </tr>
        </thead>
        <tbody>
          {data.length ? (
            data.map((d, i) => (
              <tr key={i}>
                <td>
                  {
                    <MdClose
                      className="delete"
                      onClick={() => handleDeleted(i)}
                    />
                  }
                </td>
                <td>{d.name}</td>
                <td>{d.id}</td>
                <td>{d.dept}</td>
                <td>{d.email}</td>
                <td>{formatDate(d.doj)}</td>
              </tr>
            ))
          ) : (
              <tr className="empty">No Employee Data</tr>
            )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
