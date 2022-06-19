import { useState } from "react"


export const SearchField: React.FC<{ term: string, setTerm: (value: string) => void, resetTerm: () => void }> = ({ term, setTerm, resetTerm }) => {

	const [local, setLocal] = useState(term)

	const changeLocal = (val: string) => setLocal(prev => val)

	return (
		<div className='row'>
			<div className='d-flex justify-content-evenly'>
				<div className='col-lg-8'>
					<fieldset>
						<div className="form-group">
							<label htmlFor="product" className="col-2 col-form-label">Имя товара</label>
							<div className="input-group">
								<button className="btn btn-info my-2 my-sm-0" onClick={() => {
									resetTerm()
									setLocal('')
								}}>Сброс</button>
								<input type="search"
									value={local}
									className="form-control"
									id="product" aria-describedby="productFind"
									placeholder="молоко"
									onChange={(e) => changeLocal(e.target.value)}
								/>
								<button className="btn btn-success my-2 my-sm-0" onClick={() => setTerm(local)}>Найти</button>
							</div>
						</div>
						<small id="productFind" className="form-text text-muted">Найдем как можно быстрее!</small>
					</fieldset>
				</div>
			</div>
		</div>
	)
}