import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import Connection from "../../../connection/connection";
import Cookies from "js-cookie";

const Chatroom = () => {
  const { getChatusers, chatusers, getChatroom, chatroom, getMessages, messages, setMessageForm, storeMessage, messageValue, storeChatroomuser, setChatroomuserForm } = useContext(Connection);
  const user_id = Cookies.get("user");
  const { room_id } = useParams();
  useEffect(() => {
    room_id ? getChatroom(room_id) : <></>;
    getMessages();
    getChatusers();
  }, []);
  return (
    <div style={{ background: "#DBDDFF", minHeight: "80vh"}}>
      {room_id ? (
        <>
          <p className="h1 mt-3 mb-3" style={{ fontFamily: "Poppins", fontWeight: "900", color: "#31059A" }}>
            {chatroom.name}
          </p>
          <form className="mx-auto d-flex justify-content-start" onSubmit={storeChatroomuser} style={{ width: "40vw", marginBottom: "4rem" }}>
            <select className="form-select" name="user_id" onChange={setChatroomuserForm}>
              <option selected>Open this select user</option>
              {chatusers.map((chatuser) => {
                return <option value={chatuser.id}>{chatuser.username}</option>;
              })}
            </select>
            <button type="submit" className="ms-2 btn btn-primary float-right">
              Submit
            </button>
          </form>
            <div className="overflow-y-auto overflow-x-hidden" style={{ maxHeight: "50vh" }}>
            {messages
            .filter((messages) => messages.chatroom_id == room_id)
            .map((message) => {
              return message.user_id == user_id ? (
                <div className=" row " >
                  <div className="d-flex justify-content-end" style={{ cursor: "pointer" }}>
                    <p className="bg-primary border border-primary text-white mb-2 ms-5 me-5 p-3" style={{ borderRadius: "0.5rem", fontFamily: "Roboto" }}>
                    {message.message} : {message.username}
                    </p>
                  </div>
                </div>
              ) : (
                <div className=" row">
                  <div className=" d-flex justify-content-start" style={{ cursor: "pointer" }}>
                    <p className="bg-white border border-primary mb-2 ms-5 me-5 p-3" style={{ borderRadius: "0.5rem", fontFamily: "Roboto" }}>
                      {message.username} : {message.message}
                    </p>
                  </div>
                </div>
              );
            })}
            </div>

          <div>
            <form className="row mx-auto" onSubmit={storeMessage}>
              <div className="col-9">
                <input
                  type="text"
                  className="form-control border border-secondary"
                  name="message"
                  onChange={setMessageForm}
                  value={messageValue["message"]}
                  placeholder="Message"
                  style={{ marginTop: "2rem", width: "66vw", borderRadius: "3rem" }}
                />
              </div>
              <div className="col-3" style={{ position: "relative", marginTop: "2rem", paddingLeft: "9rem" }}>
                <input type="submit" className="btn" value="Submit" style={{ background: "#668DDC", color:'white', borderRadius:'5rem'}}/>
              </div>
            </form>
          </div>
        </>
      ) : (
        <>
          <p className="mt-3 text-white">  </p>
        </>
      )}
    </div>
  );
};

export default Chatroom;
