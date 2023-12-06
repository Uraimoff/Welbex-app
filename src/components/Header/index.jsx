import React from 'react'
import welbex from './../../assets/svg/logo_welbex.svg'
import telegram from './../../assets/svg/telegram.svg' 
import viber from './../../assets/svg/viber.svg'
import whatsapp from './../../assets/svg/whatsapp.svg'

const Header = () => {
  return (
    <div className='flex sm:mt-[48px] justify-around w-full align-middle'>
        <div className='hidden gap-[10px] sm:flex sm:flex-col '>
            <img className='w-[140px]' src={welbex} alt="" />
            <slogan className='text-[10px] font-montserrat'>крупный интегратор CRM в Росcии и ещё 8 странах</slogan>
        </div>
        <div className='flex w-full py-[20px] px-[16px] sm:py-[5px] justify-around align-middle text-[16px]'>
            <div className='text-[12px] sm:text-[16px]'>Услуги</div>
            <div className='text-[12px] sm:text-[16px]'>Виджеты</div>
            <div className='text-[12px] sm:text-[16px]'>Интеграции</div>
            <div className='text-[12px] sm:text-[16px]'>Кейсы</div>
            <div className='text-[12px] sm:text-[16px]'>Сертификаты</div>
        </div>
        <div className='hidden  sm:flex sm:ml-[100px] justify-between text-[16px] align-middle'>
            <a href='tel:+75555555555' className='text-[14px]'>+7 555 555-55-55</a>
            <img src={telegram} alt="" />
            <img src={viber} alt="" />
            <img src={whatsapp} alt="" />
        </div>
    </div>
  )
}

export default Header