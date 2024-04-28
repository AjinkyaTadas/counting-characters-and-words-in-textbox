import React, { useState } from 'react';

const App = () => {
    const [textData, setTextData] = useState("");
    const [preData, setpreData] = useState("");

    const clearData = () => {
        setTextData("");
    }

    const preViewData = () => {
        setpreData(textData);
    }

    const handleData = (e) => {
        setTextData(e.target.value)
    }





    return (
        <>
            <div className="container my-5">
                <textarea cols="30" rows="10" value={textData} className="w-100" onChange={handleData}>{textData}</textarea>
                <button className="btn btn-dark" onClick={clearData}>Clear Data</button>
                <p className="text-Danger">{preData}</p>
                <button className="btn btn-success" onClick={preViewData}>Preview Data</button>
                <p className="text-center text-danger">{textData.length} characters are inside this textarea</p>
                <p className="text-center text-danger">{(textData.split(" ").length) - 1} words are inside this textarea</p>
            </div>
        </>
    )
}

export default App
