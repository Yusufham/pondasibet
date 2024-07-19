import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import daftar from "../img/daftar.gif"
import './AddUser.css'

const AddUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("SYDNEY");
    const navigate = useNavigate();


    const saveUser = async (e) =>{
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users',{
                name,
                email,
                gender
            });
            navigate("/")
        } catch (error) {
            console.log(error);            
        }
    }

    const [users, setUser] = useState([]);

    useEffect(()=>{
        getUsers();
    },[]);

    const getUsers = async () =>{
        const response = await axios.get('http://localhost:5000/users');
        setUser(response.data);
    }






    const [name2, setName2] = useState("");
    const [email2, setEmail2] = useState("");
    const [gender2, setGender2] = useState("SYDNEY");
    



    const [users2, setUser2] = useState([]);



    const saveUser2 = async (e) =>{
        e.preventDefault();
        try {
            await axios.post(`http://localhost:5000/users2`,{
                name2,
                email2,
                gender2
            });
            navigate("/add/komentar")
        } catch (error) {
            console.log(error);            
        }
    }

    useEffect(()=>{
        getUsers2();
    },[]);

    const getUsers2 = async () =>{
        const response = await axios.get('http://localhost:5000/users2');
        setUser2(response.data);
    }


    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })  

    function handleInput(event){
        const newObj = {...values, [event.target.name]: event.target.values}
        setValues(newObj)
    }



    return (
        <div className='container-atas'>
            <div className="box-kembali">
                <a href="/">kembali</a>
            </div>
            <div className='add-box'>
            <div className='add-box2'>
            <form onSubmit={saveUser}>
                <h1> masukan tebakan kamu </h1>
                    <div className='field'>
                        <label className=''>NAMA KAMU</label>
                        <div className='control-nama'>
                            <input type='text' 
                            className='input' 
                            pattern="[a-zA-Z]{3,}"
                            maxLength={7}
                            onChange={(e)=> setName(e.target.value)}
                            value={name} 
                            placeholder='isi nama' required/>
                            <span className="validity"></span>
                            </div>
                    </div>
                    <div className='field'>
                        <label className=''>TEBAKAN ANGKA</label>
                        <div className='control-angka '>
                            <input type='tel'
                            minLength="4"
                            maxLength="4"
                            className='input-angka'
                            pattern="[0-9]{4}"
                            value={email} 
                            onChange={(e)=> setEmail(e.target.value)}
                            placeholder='angka hantu' required/>
                            <span className="validity"></span>
                        </div>
                    </div>
                    <div className='field'>
                        <label className=''>POOLS/TOTO</label>
                        <div className='control'>
                            <div className='select is-fullwidth'>
                            <select 
                            value={gender} 
                            onChange={(e)=> setGender(e.target.value)}>
                                <option value="SYDNEY">SYDNEY</option>
                                <option value="SINGAPORE">SINGAPORE</option>
                                <option value="HONGKONG">HONGKONG</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='field'>
                        <button type='submit' className='button is-success'>Submit</button>
                        </div>
                        </form>
            </div>
            </div>

            <div className="daftar">
                <p>PONDASIBET AGEN SLOT / TOTO ONLINE AMAN TERPERCAYA</p>
                <p>daftar di bawah slot gacor vip</p>
                <a href="https://88pondasi.com/register?referral_code=haham&utm_medium=social&utm_source=heylink.me&utm_medium=social&utm_source=heylink.me"><img src={daftar} alt="dafatar di sini" /></a>
            </div>
            <div className="tentang toto">
            </div>
            <div className="tentang-togel">
                <div className="box-tentang-togel">
                    <h6>aku dapat sedikit info tentang toto / pools</h6>
                    <p>togel attau toto gencar gencarnya di era tahun 1968  lotre yang melibatkan 4 digit angka ini sudah mashuur yaitu pada zaman kolonial belanda  </p>
                    <br></br>
                    <p>saat itu banyak mulai bermunculan sentra togel di keramaian pusatnya di kota batavia.yang mana waktu itu batavia sebagai pusat pemerintah dan perdagangan</p>
                    <p>togel ini cukup laris manis di kalangan belanda bahkan para penduduk lokal ikut antri membeli togel ini</p>
                    <p>pada tahun 1968 pemerintah daerah mengelola toto/togel, pemerintah daerah surabaya menjaul toto yang merupakan singkatan dari Lotre yang diadakan pada tahun 1969</p>
                    <p>tidak berlangsunng lama munculahhhhh KSOB (kupon sumbangan olahraga bersama) dan NALO (nasional lotre)</p>
                    <p>kemudian pemerintah pusat menerbitkan SDSB(sumbangan dana sosial berhadiah)</p>
                    <br></br>
                    <p>terimaksih sudah membaca kaka</p>
                    <br></br>
                    <p>PONDASIBET</p>
                    <p>Minimal depo : 5.000</p>
                    <p>Minimal wd : 50.000</p>
                    <p>ada fitur code qr/qris hanya satu detik deposit masuk</p>
                    <p>aman nyaman cepat</p>
                    <p>rasakan kenyamanan mu di PONDASIBET</p>
                    <p>daftar di bawah</p>
                    <br></br>
                    <div className="daftar-bawah">
                    <a href="https://88pondasi.com/register?referral_code=haham&utm_medium=social&utm_source=heylink.me&utm_medium=social&utm_source=heylink.me">DAFTAR</a>
                    <div className="box-kembali2">
                        <a href="/">kembali</a>
                </div>
            </div>

                </div>
            </div>


        <div className='container-isicoment'>
            <div className='box-isicoment'>
            <div className="box-isicoment2">
            <form onSubmit={saveUser2}>
                <h1>beri aku masukan / komentar kaka </h1>
                    <div className='box-input-komentar'>
                        <label className=''>NAMA KAMU</label>
                        <div className='control-nama-komentar'>
                            <input type='text' 
                            className='input' 
                            minLength="3"
                            maxLength="8"
                            pattern="[a-zA-Z]{3,}"
                            maxLength="6"
                            value={name2} 
                            onChange={(e)=> setName2(e.target.value)}
                            placeholder='isi nama' required/>
                            <span className="validity"></span>
                            </div>
                    </div>
                    <div className='box-input-komentar2'>
                        <label className=''>KOMENTAR</label>
                        <div className='control-komentar'>
                            <textarea type='text'
                            minLength="6"
                            maxLength="700"
                            className='input-angka'
                            pattern="[a-zA-Z]{5,}"
                            value={email2} 
                            onChange={(e)=> setEmail2(e.target.value)}
                            placeholder='isi komentar' required/>
                            <span className="validity"></span>
                        </div>
                    </div>
                    <div className=''>
                        <button type='submit' className=''>Submit</button>
                    </div>
            </form>
            </div>
            </div>
        </div>

            <div className="coment">
            <div className="coment2">

                <div className="box-coment">
                    {users2.map((user2, index) => (
                    <div key={user2.id}>
                        <div className="box-nama"><p>Nama={user2.name2}</p></div>
                        <div className="box-komentar"><div><p>{user2.email2}</p></div></div>
                    </div>
                    ))}
                </div>
            </div>
            </div>
                
</div>
)
}

export default AddUser;