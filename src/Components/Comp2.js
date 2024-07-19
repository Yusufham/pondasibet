import React, {useState, useEffect} from "react";
import './Comp2.css'
import Minimaldepo from '../img/minimaldepo.jpg'
import Depoqris from '../img/tutordeposit.jpg'
import Soccer from '../img/soccer.jpg'
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Comp2 = () => {


  
  const navigate = useNavigate();


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





  return (
    <div className='promo-container'>
      <div className='promo-box'>
      <div className='promo-dalam'>
        <div className='promo-dalam2'>
          <div className='promo-1'>
            <img src={Minimaldepo}  />
          </div>
          <div className='promo-2'>
            <h1>minimal depo</h1>
          </div>
          <div className='promo-3'>
              <h4>PONDASIBET<br></br>
              AGEN SLOT/TOTO online aman terpercaya</h4><br></br>
              <p>
                PONDASIBET merupakam salah satu bandar game online deposit 5.000 rupiah yang menyediakan berbagai macam jenis permainan Online dengan menerapkan seluruh sistem transaksi tidak di kenakan biaya apapun tanpa potongan sama sekali
              </p><br></br>
              <p>
                hanya dengan deposit bermodalkan 5.000 rupiah maka anda sudah dapat menikmati berbagai macam fitur yang di tawarkan 
                ada beberapa fitur seperti slot pools roulet pokerdice </p><br></br>
                <p>
                di PONDASIBET bisa deposit 5.000 rupiah dengan akun dompet digital gopay dana linkajh
              </p><br></br>
              <p>daftar sekarang rasakan banyak fitur di pondasibet</p>
              
              <div className='daftardisini'>
              <a href='https://88pondasi.com/register?referral_code=haham&utm_medium=social&utm_source=heylink.me&utm_medium=social&utm_source=heylink.me'>daftar disini</a>
              </div>
          </div>
        </div>
        <div>
          <div className='promo-1'>
            <img src={Depoqris}  />
          </div>
          <div className='promo-2'>
            <h1>depo qris</h1>
          </div>
          <div className='promo-3'>
              <h4>PONDASIBET<br></br>
              AGEN SLOT/TOTO online aman terpercaya</h4><br></br>
              <p>
                di PONDASIBET memiliki fitur deposit cepat aman dan nyaman dengan qris<br></br>
                hanya dengan satu detik deposit langsung masuk tanpa proses
                <br></br></p>
                <p><br></br>
                qris menjadi salah satu metode pembayaran digital yang di gunakan oleh PONDASIBET , sudah terjamin keamananya<br></br> 
                bagi anda yang ingin melakukan deposit dengan code qr
                <br></br>
                begini cara panduan mudahanaya 
              </p>
              <p>
                <br></br>
                1.siapkan akun qris 
                </p>
                <p>
                pastikan sudah memiliki akun qris yang aktif, anda bisa mendaftarkan akun qris melalui aplikasi mobile banking attau dompet digital contoh gopay dana dan linkajh
              </p>
                <p>
                  <br></br>
                  2.masuk ke pondasibet melalui apk / web
                </p>
                <p>
                  login di pondasibet dengan akun anda dan klik menubar pilihan dan pilih deposit
                </p>
                <p>
                  <br></br>
                  3.pilih metode pembayaran qris
                </p>
                <p>
                  pada menu deposit pilih metode pembayaran/ deposit dengan QRIS
                </p>
                <p>
                  <br></br>
                  4.masukan nominal deposit
                </p>
                <p>
                  masukan nominal deposit yang anda inginkan. pastikan nominal deposit di atas 5.000 rupiah. karna minimal deposit di pondasibet 5.000 rupiah
                </p>
                <p>
                  <br></br>
                  5.pindai kode QR qris
                </p>
                <p>
                  PONDASIBET akan menampilkan kode QR qris, setelah anda mengisi nominal deposit/pembayaran
                  buka aplikasi mobile banking / dompet digital anda dan pindai kode qr tersebut
                </p>
                <p>
                  <br></br>
                  6.komfirmasi deposit
                </p>
                <p>
                  setelah anda menggkonfrimasi transtraksi , deposit langsung masuk ke akun anda tanpa proses
                </p>
                <p>
                  <br></br>
                  tips tambahan
                  <br></br>
                  pastikan memiliki koneksi internet yang stabil 
                  <br></br>
                  jika anda kesulitan saat melakukan deposit hubungi customer servis / live chat di menu bar pondasibet
                </p>
                <br></br>
                <h3>daftar di bawah</h3>
                <a href='https://88pondasi.com/register?referral_code=haham&utm_medium=social&utm_source=heylink.me&utm_medium=social&utm_source=heylink.me'>daftar </a>
                </div>
        </div>
        <div>
          <div className='promo-1'>
            <img src={Soccer}  />
          </div>
          <div className='promo-2'>
            <h1>soccer roulette games</h1>
          </div>
          <div className='promo-3'>
              <h4>PONDASIBET<br></br>
              AGEN SLOT/TOTO online aman terpercaya</h4><br></br>
              <p>
                telah hadir live games terbaru Soccer Roulette di PONDASIBET
                <br></br>
                Soccer Roulette  menawarkan misteri dan kesenangan bagi para pemain dan dasar dasar permainan yang menyenangkan
                <br></br>
                berikut dasar dasar permainan
              </p>
              <p>
                <br></br>
                pada roulette ini terdapat 36 angka dan sebuah angka 0, dan bola putih kecil akan di lemparkan berputar dan akhirnya akan mendarat pada satu petak dari angka angka tersebut.
                <br></br>
                taruhan akan di tempatkan di meja , yang berkaitan dengan kotak kotak untuk menebak kemungkinan di mana bola mendarat
              </p>
              <p>
                <br></br>
                pada meja terdapat pilihan angka angka lain dan beberapa pilihan lain
                <br></br>
                beberapa pilihan
                <br></br>
                dua belas agka pertama (1 hingga 12)
                <br></br>
                dua belas angka ke dua (13 hingga 24)
                <br></br>
                dua belas angka ke tiga (25 hingga 36)
                <br></br>
                angka 1 hingga 18
                <br></br>
                angka 19 hingga 36
                <br></br>
                genap
                <br></br>
                ganjil
                <br></br>
                hitam 
                <br></br>
                merah
              </p>
              <p>
                <br></br>
                pada permainan rolet , anda harus menebak angka attau jenis kotak yang merupakan tempat dimana bola akan mendarat 
                <br></br>
                ada beberapa macam taruhan yang dapat anda buat taruhan bagian dalam yaitu taruhan yang di letakan pada angka angka tertentu,
                <br></br>
                anda dapat melakuakan taruhan seperti berikut 
              </p>
              <p>
                <br></br>
                taruhan langsung (straight up) dengan hasil 35 perbandingan 1
                <br></br>
                taruhan pisah (split) pada dua angka dengan hasil 17 berbanding 1
                <br></br>
                taruhan (street) pada dua angka dengan hasil 17 berbanding 1
                <br></br>
                </p>
                <p>
                  <br></br>
                segera rasakan kesanangan dasar dasar SOCCER ROULETTE di pondasibet
                <br></br>
                daftar segera 
                </p>
                <div className='daftardisini'>
                <a>daftar</a>
                </div>
                <div>
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
                        <div className=''>
                            <input type='text' 
                            className='input' 
                            minLength="3"
                            pattern="[a-zA-Z]{3,}"
                            title="hanya gunakan huruf"
                            maxLength="8"
                            value={name2} 
                            onChange={(e)=> setName2(e.target.value)}
                            placeholder='hanya gunakan huruf' required/>
                            </div>
                    </div>
                    <div className='box-input-komentar2'>
                        <label className=''>KOMENTAR</label>
                        <div className=''>
                            <textarea type='text'
                            minLength="6"
                            maxLength="700"
                            className='input-angka'
                            pattern="[a-zA-Z]{5,}"
                            value={email2} 
                            onChange={(e)=> setEmail2(e.target.value)}
                            placeholder='minimal 6 karakter' required/>
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
      </div>
    </div>
  )
}

export default Comp2;

