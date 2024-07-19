import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './Comp1.css'
import Atas from '../img/atas.png';
import Bannerbawah from '../img/banner-bawah.png'
import ButtonGroup1 from './isi/ButtonGroup1';
import Tricktogel from './isi/tricktogel'
import Carapasang from './isi/carapasang'



const RenderComponents = ({index}) =>{
  switch (index) {
    case 0: return <Tricktogel />
    break;
    case 1: return <Carapasang />
    break;
    default:
    break;
  }
} 

const buttons1 = [
  "trik togel/toto", "trick-4D"
]







const Comp1 = () => {


  const [isSelected1, setIsSelected1] = useState(0)



  const [users, setUser] = useState([]);

 useEffect(()=>{
    getUsers();
},[]);

const getUsers = async () =>{
    const response = await axios.get('http://localhost:5000/users');
    setUser(response.data);
}

const deleteUser = async (id) =>{
  try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
  } catch (error) {
      console.log(error);
  }
}

const [show, setShow] = useState(true)


  return (
    <div className="content-container">
          <div className="box-tengah">
          <div className="img-atas">
               <img src={Atas} />  
          </div>
        <div className="container-tebak">
            <div className="box-hasil-tebak">
              <div className="box-hasil-tebak2">
                <div className="hasil-tebak">
                    {users.map((user, index) => (
                    <div iv className='atas' key={user.id}>
                      <div className="atas-angka"><h5>ANGKA/TEBAKAN</h5></div>
                      <div className="isi-angka"><p>{user.email}</p></div>
                      <div className="isi-polls">{user.gender}</div>
                        <div className="isi-nama
                        "><h6>User:*</h6><h2>{user.name}</h2></div>

                  </div>
                    ))}
                </div>
              </div>  
            </div>
        </div>
            <div className="table">
              <p>PONDASIBET</p>
              <p>agen slot / togel online aman terpercaya</p>
              <p>info pondasibet hadiah toto/togel </p>
                  <div className="table-dalam">
                  <table>
                    <thead>
                      <tr>
                        <th>4D DISCONT</th>
                        <th>4D FULL</th>
                        <th>4D BB TEPAT</th>
                        <th>4D BB</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                      <td>3300 X</td>
                        <td>10.000 X</td>
                        <td>7.500 X</td>
                        <td>100 X</td>
                      </tr>
                    </tbody>
                  </table>
                  <table>
                      <tr>
                        <th>3D D
                          ISCONT</th>
                        <th>3D FULL</th>
                        <th>3D BB TEPAT</th>
                        <th>3D BB</th>
                      </tr>
                    <tbody>
                      <tr>
                        <td>400 X</td>
                        <td>1.000 X</td>
                        <td>850 X</td>
                        <td>30 X</td>
                      </tr>
                    </tbody>
                  </table>
                  </div>
                  <div className="table-dalam">
                  <table>
                    <thead>
                      <tr>
                        <th>2D DISCONT</th>
                        <th>2D FULL</th>
                        <th>2D BB TEPAT</th>
                        <th>2D BB</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                      <td>70 X</td>
                        <td>1000 X</td>
                        <td>90 X</td>
                        <td>10 X</td>
                      </tr>
                    </tbody>
                  </table>
                  <table>
                      <tr>
                        <th>KOP GANJIL</th>
                        <th>KOP GENAP</th>
                        <th>KOP BESAR</th>
                        <th>KOP KECIL</th>
                      </tr>
                    <tbody>
                      <tr>
                        <td>-1.5% </td>
                        <td>-1.5%</td>
                        <td>-1.5%</td>
                        <td>-1.5%</td>
                      </tr>
                    </tbody>
                  </table>
                  </div>

            </div>
            <div>
                              <ButtonGroup1 buttons1={buttons1} isSelected1={isSelected1} setIsSelected1={setIsSelected1} />
                          </div>
                          <div>
                              <RenderComponents index={isSelected1} />
                          </div>

            <div className="text-prediksi">
                  <p>ak ngumpulin angka pools dari beberapa user </p>
                  <p>jika kaka minat silahkan ambil</p>
                  <p>kaka bisa masukan prediksi angka pilihan kaka dibawah</p>
            </div>
            <a href='/add' className="button" ><h1 className="masukan-prediksi">MASUKAN PREDIKSI MU DISINI</h1></a>
        

        <div className="coba1">
          <div className="box-button-hasil">
          <button className="button-hasil" type="button" onClick={()=>setShow(!show)}>{show === true ? "tutup semua hasil angka" : "buka semua hasil angka"}</button>
          </div>
          {show &&
    <div className="sembunyi">
                <div className="coba2">
                {users.map((user, index) => (
                  <div className="kotak-kotak">
                    <div iv className='atas' key={user.id}>
                      <div className="atas-angka"><h5>ANGKA/TEBAKAN</h5></div>
                      <div className="isi-angka"><p>{user.email}</p></div>
                      <div className="isi-polls">{user.gender}</div>
                        <div className="isi-nama
                        "><h6>User:*</h6><p>{user.name}</p></div>
                                                   
                   </div>


                        <div className="loop-atas" key={user.id}>
                            <div className="terimakasih">TERIMAKASIH KAKA</div>
                            <div>{user.name}</div>
                            <div>SEMOGA MENANG</div>
                            <div>DI {user.gender}</div>
                            <div>{user.email}</div>
                            <button className="button-hasil-2" type="button" onClick={()=>setShow(!show)}>{show === true ? "tutup semua hasil angka" : "buka semua hasil angka"}</button>
                        </div>


                   </div>
                    ))}
                </div>                    
    </div>
}
    </div>
    </div>
    </div>
  )
}

export default Comp1;