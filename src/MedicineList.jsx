const MedicineList = (props) => {
    console.log(props);
    console.log(props.medicineObjects);
    const medicineObjects = props.medicineObjects;
    return (
        
        <div className="list">
            {medicineObjects.map(
                (obj) => (
                    <div key={obj.id}>
                        <table>
                            <tr>
                                <td>{obj.medicines}</td>
                                <td>{obj.tenure}</td>
                                <td>{obj.comments}</td>
                            </tr>
                        </table>
                    </div>
                )
            )}  
        </div>
    );

}
export default MedicineList;