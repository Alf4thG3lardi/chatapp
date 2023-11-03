import React from 'react'
import profil from '../../../assets/profilwa.png'

const ListUser = () => {
  return (
    <div className="screen" style={{ minHeight: "100vh" }}>
      <div style={{ paddingTop:'3rem'}}>
      </div>
      <div className="row justify-content-center" style={{ paddingTop: "3rem" }}>
        <h1 className="text-center" style={{ fontFamily: "Poppins", fontWeight: "900", color: "#31059A" }}>
          List User
        </h1>
        <p className="mb-4 text-center" style={{ fontSize: "1.3rem", fontFamily: "Poppins" }}>
          This is user that you have been saved
        </p>
        <div className="col-5 border border-white bg-primary shadow-lg p-3 mb-5 bg-body rounded d-flex flex-column" style={{ width: "25vw", minHeight: "10vh" }}>
          <div style={{ background: "#DBDDFF", cursor: "pointer" }}>
            <img className="ms-2" src={profil} alt="" width={73} height={75} style={{ float: "left" }} />
            <h5 className="pt-4" style={{ fontFamily: "Poppins", fontWeight: "600", position:'relative', marginRight:'12rem', marginTop:"0.1rem"}}>
              Alfath
            </h5>
          </div>
          </div>
      </div>
    </div>
  )
}

export default ListUser