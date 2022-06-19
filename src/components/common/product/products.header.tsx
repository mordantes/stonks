
export const ProductHeader: React.FC = () => {
	return (

		<div className='row'>
			<div className='d-flex justify-content-evenly align-items-baseline'>
				<span className='col-6 text-left mt-3'>
					Имя товара
				</span>
				<span className='col-1 text-center'>
					Начальная цена
				</span>
				<span className='col-1 text-center'>
					Текущая цена
				</span>
				<span className='col-1 text-center'>
					Скидка
				</span>
				<span className='col-1 text-center'>
					Изменение, %
				</span>
				<span className='col-1 text-center'>
					Частота изменения
				</span>
				<span className='col-2 text-center'>
					Ранк
				</span>
			</div>
		</div>
	)
}