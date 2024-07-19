import React from 'react'
import './komentar.css' 
import Daftar from '../img/daftar.gif'
import Logo from '../img/logo.png'
import Minimal from '../img/bawah2.jpg'

const Komentar = () => {
  return (
    <div>
        <div className='end-komentar'>
            <div className='end-komentar2'>
                <div className='end-komentar-atas'>
                    <a href='/'>pools/togel</a>
                    <a href='/add'>kembali</a>
                    <a href='https://88pondasi.com/register?referral_code=haham&utm_medium=social&utm_source=heylink.me&utm_medium=social&utm_source=heylink.me'>daftar</a>
                </div>
                <div className='end-komentar-atas2'>
                    <img src={Logo} alt='pondasibet' />
                    <img src={Logo} alt='pondasibet' />
                    <img src={Logo} alt='pondasibet' />
                </div>
                <div className='end-komentar-terimakasih'>
                    <h1>terimakasih</h1>
                    <p>terimak  kasih sudah beri masukan / komentar.. komentar kaka sangat membuat aku bahagia.
                        <br></br>
                        semoga menang besar kaka bersama PONDASIBET
                        <br></br>
                        link gacor slot vip
                    </p>
                    <a href='https://88pondasi.com/register?referral_code=haham&utm_medium=social&utm_source=heylink.me&utm_medium=social&utm_source=heylink.me'><img src={Daftar} alt='DAFTAR' /></a>

                </div>
                <div className='minimal'>
                    <a href='https://88pondasi.com/register?referral_code=haham&utm_medium=social&utm_source=heylink.me&utm_medium=social&utm_source=heylink.me'><img src={Minimal} /></a>
                </div>

            </div>
            <div className='kembali'>
                <a href='/add'><h1>kembali</h1 ></a>
            </div>
</div> 
    </div>
  )
}

export default Komentar
