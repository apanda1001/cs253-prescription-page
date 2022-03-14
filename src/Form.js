import { useState, useParams, useHistory, useEffect } from 'react';
import MedicineList from './MedicineList';
import React from "react";
const Form = () => {
    const [diagnosis, setDiagnosis] = useState('');
    const [xray, setXray] = useState('');
    const [test, setTest] = useState('Select Tests');
    const [physiotherapy, setPhysiotherapy] = useState('');
    const [medicines, setMedicines] = useState('Select Medicines');
    const [tenure, setTenure] = useState('');
    const [comments, setComments] = useState('');
    const [addMedicine, setAddMedicine] = useState(false);
    const [addTest, setAddTest] = useState(false);
    const [medicineArray, setMedicineArray] = useState(
        [
            {
                medicines: 'Crocin',
                tenure: '2 days',
                comments: 'Painkiller', 
                id: 1
            }
        ]
    );
    let i;
    function mapper(obj, i, arr) {
        return (<div key={obj.id.toString()}>
            <table>
                <tr>
                    <td>{obj.medicines}</td>
                    <td>{obj.tenure}</td>
                    <td>{obj.comments}</td>
                </tr>
            </table>
        </div>);
}
    let id = 1;
    const handleMedicines = (m, t, c) => {
        setAddMedicine(true);
        id++;
        let newObj = {
            medicines: m,
            tenure: t,
            comments: c,
            id: id
        };
        //console.log(newObj);
        setMedicineArray(medicineArray.push(newObj));
        console.log(medicineArray);
        medicineArray.map(
            (obj) => console.log(obj)
        );
    }
    return (
        <div className = "add-treatment">
            <button>
                Back
            </button>
            <form>
                <label>Diagnosis</label>
                <textarea 
                required
                value={diagnosis}
                onChange={(e) => {setDiagnosis(e.target.value)}}
                ></textarea>
                <h4>Medicines</h4>
                <label>Select medicine</label>
                <select
                    value = {medicines}
                    onChange = {(e) => setMedicines(e.target.value)}
                >
                    <option value="Select Medicines">Select Medicines</option>
                    <option value="Crocin">Crocin</option>
                    <option value="Disprin">Disprin</option>
                </select>
                <label>Add tenure</label>
                <input 
                type="text" 
                required
                value = {tenure}
                onChange = {(e) => setTenure(e.target.value)}
                ></input>
                <label>Add Comments</label>
                <textarea 
                required
                value = {comments}
                onChange = {(e) => setComments(e.target.value)}
                ></textarea>
                <button
                onClick={() => handleMedicines(medicines, tenure, comments)}
                >Add medicine</button>
                { addMedicine && 
                <div>
                    {medicineArray.map(
                        mapper
                        )}  
                </div>
                }
                <label>XRays</label>
                <textarea 
                required
                value = {xray}
                onChange = {(e) => setXray(e.target.value)}
                ></textarea>
                <label>Tests</label>
                <select
                value = {test}
                onChange = {(e) => setTest(e.target.value)}
                >
                    <option value="Select Tests">Select Tests</option>
                    <option value="Blood Test">Blood Test</option>
                    <option value="Covid Test">Covid Test</option>
                </select>
                <button>Add Test</button>
                <label>Physiotherapy</label>
                <textarea 
                required
                value = {physiotherapy}
                onChange = {(e) => setPhysiotherapy(e.target.value)}
                ></textarea>
                <button>Add Treatment</button>
            </form>
        </div>
    );
}
export default Form;