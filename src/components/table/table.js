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
                {
                    dataList.map(data => (
                        <tr key={data.Id}>
                            <td>{data.Region}</td>
                            <td>{data.Town}</td>
                            <td>{data.Name}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
export default table