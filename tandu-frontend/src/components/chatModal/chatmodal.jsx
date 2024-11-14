import * as React from 'react';
import { FaXmark } from "react-icons/fa6";
import './chatmodal.scss';

export const ChatModal = () => {
    
    const modalToogle = () => {
        let modalClassList = document.querySelector(".chat-modal").classList;
        let chatBtnClassList = document.querySelector(".chat-button").classList;
        modalClassList.toggle("hidden");
        chatBtnClassList.toggle("hidden");
    }

    return (
        <>
            <div className='chat-button'>
                <button onClick={modalToogle}>Hỗ trợ tư vấn 24/7</button>
            </div>
            <div className='chat-modal hidden'>
                <div className='modal-heading'>
                    <FaXmark className='hide-icon' onClick={modalToogle}/>
                    <p className='text-center'>Tân Du xin chào! <br /> Chúng tôi sẵn sàng hỗ trợ cho bạn</p>
                </div>
                <div className='modal-form'>
                    <form>
                        <input name='name' placeholder='Tên' ></input>
                        <input name='tel' placeholder='Số điện thoại' ></input>
                        <input name='email' placeholder='Email' ></input>
                        <textarea name='message' rows={5} placeholder='Bạn đang quan tâm hay thắc mắc về điều gì' ></textarea>
                        <button className='start-btn'>Bắt đầu trò chuyện</button>
                    </form>
                </div>
            </div>
        </>
    )
}