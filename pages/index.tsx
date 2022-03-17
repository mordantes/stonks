import type { NextPage } from 'next'
import React from "react";
import TelegramIcon from '@mui/icons-material/Telegram';
import { Button } from '@mui/material';


const Home: NextPage = () => {
  return (
    <>
      <div className='about'>
        <div className='row'>
          <div className='col-lg-6'>
            <h2 className="d-flex justify-content-around m-2">Немного о нас:</h2>
            <ol className='d-flex row justify-content-center m-2'>
              <li className="m-2">
                Мы - OpenSource проект, предоставляющий доступ всем желающим для ознакомления с изменением цен
                <br></br>
                в работающих на территории Росии супермаркетах
              </li>
              <li className="m-2">
                Цель проекта - изучить периодичность и закономерность изменения ценовой политики
                <br></br>
                торговых сетей по оказанию услуг покупателям.
              </li>
              <li className="m-2">
                Все данные взяты исключительно из открытых источников и мы не ручаемся
                <br></br>за их полноту и правдивость.
              </li>
              <li className="m-2">
                Мы знаем, что согласно статье ГК РФ №494 все предоставляемые магазинами данные (прайс-листы)
                <br></br> являются публичной офертой.
              </li>
              <li className="m-2">
                В дальнейшем мы добавим данные о товарах основных торговых сетей, пока - тестовый режим.
              </li>
            </ol>
          </div>

        </div>

      </div>
    </>

  )
}

export default Home