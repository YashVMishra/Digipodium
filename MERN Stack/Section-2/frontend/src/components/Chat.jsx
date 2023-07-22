import React, { useState} from 'react'
import '../styling/todo.css'

const Chat = () => {

    const [chat, setChat] = useState([]);

    const addChat = (e) => {
        if(e.code === 'Enter'){
            console.log("task added");
            let msg=e.target.value;
            if(!msg.trim()){
                return;
            }

            e.target.value = "";
            setChat([...chat, {msg : msg, read : false}]);
            console.log(chat);
        }
    }

    const deleteChat = (index) => {
        const temp = chat;
        chat.splice(index, 1);
        setChat([...chat]);
    }
    
    return (
        <div>
            <h1 className='text-center display-4 fw-bold my-4 myh1'>Chat - One Way</h1>
            <div className="container">
                <div className="card">

                    <div className="card-body" style={{backgroundImage : 'url("https://wallpapers.com/images/hd/fun-chat-app-stickers-pattern-a7mhh6ay9qqcpyfh.jpg")', backgroundSize : "cover"}}>
                        <div>
                            {
                                chat.map((chat, index) => (
                                    <div className='' style={{margin : "25px 0px 25px 0px"}}>
                                        <span className='fw-normal py-2 px-3 border rounded-3 text-black text-hidden me-3 d-inline' style={{width : "max-content", padding : "3px 10px 3px 10px", backgroundColor : "#90EE90", fontSize : "18px"}}>
                                            {chat.msg}
                                        </span>
                                        <i class="fa-solid fa-trash-can " style={{color : "#90EE90", fontSize : "15px", cursor : "pointer"}} onClick={() => (deleteChat(index))}></i>
                                    </div>
                                   
                                ))
                            }
                        </div>
                    </div>

                    <div className="card-footer">
                        <input type="text" name="" id="" placeholder='Type Here...' className='form-control' onKeyDown={addChat}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat