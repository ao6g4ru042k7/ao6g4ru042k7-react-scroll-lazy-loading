import classes from "./table.module.scss";
const table = ({ dataList }) => {
    return (
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Region</th>
            <th>Town</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((data) => (
            <tr key={data.id}>
              <td>{data.name}</td>
              <td>{data.html_url}</td>
              <td>{data.updated_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}
export default table