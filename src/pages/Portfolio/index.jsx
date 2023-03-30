import { Container } from '@mui/material'
import React, { useEffect } from 'react'
import { MTypography } from '../../components/Motion'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import { PortfolioGET } from '../../reducers/main/main-api'
const Portfolio = () => {
	const dispatch = useDispatch()
	const { portfolio } = useSelector(store => store.main)

	useEffect(() => {
		if (portfolio.length === 0) {
			dispatch(PortfolioGET())
		}
	}, [dispatch])
	return (
		<section>
			<Container maxWidth='xl'>
				<MTypography
					initial='hidden'
					whileInView='visible'
					custom={1}
					variant='h1'
					mb={{ xs: 6, lg: 8 }}
					lineHeight='1!important'
				>
					Сделали +2000 проектов,
					<br /> и ни один не повторяется
				</MTypography>
				<div>
					{portfolio.map((item, idx) => (
						<Card idx={idx} item={item} id={item.id} />
					))}
				</div>
			</Container>
		</section>
	)
}

export default Portfolio
