import React from 'react'

const Profile = ()=>{
    return (
        <div style={{maxWidth:"550px",margin:"0px auto"}}>
            <div style={{
                display:"flex",
                justifyContent:"space-around",
                margin:"18px 0px",
                borderBottom:"1px solid grey"
            }}>
                <div>
                    <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
                    src="https://scontent-sin6-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/71113220_2680745722004586_712027530869396219_n.jpg?_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=106&_nc_ohc=b9hL1KOM4PwAX9Gvt42&oh=c943a9e42f9920bbb599417d057f9e7e&oe=5EFD5587"
                    />
                </div>
                <div>
                    <h4>__taehui___</h4>
                    <div style={{
                        display:"flex",
                        justifyContent:"space-between",
                        width:"108%"
                    }}>
                        <h6>3 posts</h6>
                        <h6>1339 followers</h6>
                        <h6>297 following</h6>
                    </div>
                </div>
            </div>
            <div className="gallery">
                <img className="item" src="https://scontent-sin6-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/71035989_140359640649702_7813129374127546676_n.jpg?_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=106&_nc_ohc=aHYS5ukgsTYAX-Xc1Jo&oh=5c8dcca77b6b3e9994de4e3e772f8f84&oe=5EFE4CC8"/>
                <img className="item" src="https://scontent-sin6-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/95246109_142679343980605_4096202894413952678_n.jpg?_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=101&_nc_ohc=bfWkkD66Ip4AX9vO12Y&oh=86eb9d44684b755c684adc92d7179c7b&oe=5EFEBAAF"/>
                <img className="item" src="https://scontent-sin6-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/96142543_115553150143063_109695016532361439_n.jpg?_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=107&_nc_ohc=usVTfHIRjJ8AX8mCN-s&oh=39cdfe9746f988f7f379c2bf3cc4626b&oe=5EFDF478"/>
            </div>
        </div>
    )
}

export default Profile;