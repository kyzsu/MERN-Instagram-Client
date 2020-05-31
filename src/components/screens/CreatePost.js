import React from 'react'

const CreatePost = ()=>{
    return(
        <div className="card input-field"
        style={{
            margin:"10px auto",
            maxWidth:"500 px",
            padding:"20px",
            textAlign:"center"
        }}>
            <input type="text" placeholder="title"/>
            <input type="text" placeholder="caption"/>
            <div class="file-field input-field">
                <div class="btn #90a4ae blue-grey darken-1">
                    <span>Upload Image</span>
                    <input type="file"/>
                </div>
                <div class="file-path-wrapper">
                    <input class="file-path validate" type="text"/>
                </div>
            </div>
            <button className="btn waves-effect waves-light #90a4ae blue-grey darken-1">
                Login
            </button>
        </div>
    )
}

export default CreatePost