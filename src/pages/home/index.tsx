import { GetServerSidePropsContext } from "next";
import React from "react";


export default function Home(props: any) {
  return (
    <>
      <div className='about'>

        <h2 className="d-flex justify-content-around m-2">Немного о нас:</h2>
        <ol className='d-flex row justify-content-center m-2 '>
          <li className="m-2">
            Мы - OpenSource проект, предоставляющий доступ всем желающим для ознакомления с изменением цен в работающих на территории РФ супермаркетах
          </li>
          <li className="m-2">
            Цель проекта - изучить периодичность и закономерность изменения ценовой политики торговых сетей по оказанию услуг покупателям.
          </li>
          <li className="m-2">
            Все данные взяты исключительно из открытых источников и мы не ручаемся за их полноту и правдивость.
          </li>
          <li className="m-2">
            Мы знаем, что согласно статье ГК РФ №494 все предоставляемые магазинами данные (прайс-листы) являются публичной офертой.
          </li>
          <li className="m-2">
            В дальнейшем мы добавим данные о товарах других популярных торговых сетей, пока - тестовый режим.
          </li>
        </ol>
      </div>
    </>

  )
}
export async function getServerSideProps(context: GetServerSidePropsContext) {


  return {
    props: {}
  }
}