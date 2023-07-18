import React, { useState } from 'react'

const StateManagement = () => {
    const [Likes, setLikes] = useState(0);
    const [imgURL, setImgURL] = useState('');

    const disLikes = () => {
        if(Likes > 0){
            setLikes(Likes-1);
        }
    }

    const selectFile = (e) => {
        const files = e.target.files[0];
        console.log(files);

        // reading a file
        const reader =  new FileReader(files);

        reader.onload = (data) => {
            console.log(data.target.result);
            setImgURL(data.target.result);
        };

        reader.readAsDataURL(files);
    }

    let count=30;

    return (
        <div>
            <div className="container">
                <h1>Count : {count}</h1>
                <button onClick={() => {count++; console.log(count);}}>Add Count</button>

                <h1>Likes : {Likes}</h1>
                <button className='btn btn-warning me-3' onClick={() => {setLikes(Likes+1);}}>Add Likes</button>
                <button style={{color : 'white'}} className='btn btn-danger' onClick={() => {setLikes(0);}}>Reset</button>
                <button className='btn btn-warning ms-3' onClick={disLikes}>Add Dislikes</button>
                <br />  
                <input className='mt-3' type="file" onChange={selectFile}/>
                <br />
                <img src={imgURL} alt="" style={{width : '50vw', height : '50vh'}} className='mt-3'/>
            </div>
        </div>
    )
}

export default StateManagement