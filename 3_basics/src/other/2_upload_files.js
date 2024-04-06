import React, { useState } from 'react';


function SingleFileUpload() {
    const BASE_URL = "http://localhost:3001/";
    const [file1, setFile1] = useState(null);
   
    const handleFile1Change = (e) => {
        if (e.target.files) {
            setFile1(e.target.files[0]);
        }
    };

  
    const handleUpload = async () => {
        if (file1) {
            const formData = new FormData();
            formData.append("file", file1);
            try {
                const result = await fetch(BASE_URL + "upload", {
                    method: "POST",
                    body: formData,
                });
                const data = await result.json();
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <>
            <div>
                <label htmlFor="file_1" style={{ color: "green" }} >
                    Upload Users Sheet:
                </label>
                <div>
                    <input id="file_1" type="file" onChange={handleFile1Change} />
                </div>
                {file1 && (
                    <section>
                        File details:
                        <ul>
                            <li>Name: {file1.name}</li>
                            <li>Type: {file1.type}</li>
                            <li>Size: {file1.size} bytes</li>
                        </ul>
                    </section>
                )}
            </div>
            <div>
                {file1  && <button style={{ color: "blue" }} onClick={handleUpload}>Upload a file</button>}
            </div>
        </>
    );
}


function MultipulFileUpload() {
    const BASE_URL = "http://localhost:3001/";
    const [file1, setFile1] = useState(null);
    const [file2, setFile2] = useState(null);

    const handleFile1Change = (e) => {
        if (e.target.files) {
            setFile1(e.target.files[0]);
        }
    };

    const handleFile2Change = (e) => {
        if (e.target.files) {
            setFile2(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (file1 && file2) {
            const formData = new FormData();
            formData.append("files[]", file1);
            formData.append("files[]", file2);
            try {
                const result = await fetch(BASE_URL + "upload", {
                    method: "POST",
                    body: formData,
                });
                const data = await result.json();
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <>
            <div>
                <label htmlFor="file_1" style={{ color: "green" }} >
                    Upload File1:
                </label>
                <div>
                    <input id="file_1" type="file" onChange={handleFile1Change} />
                </div>
                {file2 && (
                    <section>
                        File details:
                        <ul>
                            <li>Name: {file2.name}</li>
                            <li>Type: {file2.type}</li>
                            <li>Size: {file2.size} bytes</li>
                        </ul>
                    </section>
                )}
            </div>
            <div>
                <label htmlFor="file_2" style={{ color: "green" }} >
                    Upload File 2:
                </label>
                <div>
                    <input id="file_2" type="file" onChange={handleFile2Change} />
                </div>
                {file2 && (
                    <section>
                        File details:
                        <ul>
                            <li>Name: {file2.name}</li>
                            <li>Type: {file2.type}</li>
                            <li>Size: {file2.size} bytes</li>
                        </ul>
                    </section>
                )}
            </div>
            <div>
                {file1 && file2 && <button style={{ color: "blue" }} onClick={handleUpload}>Upload a file</button>}
            </div>
        </>
    );
}


function App() {
    return (
        <div>
            <SingleFileUpload></SingleFileUpload>
        </div>
    );
}

export default App;
