import React, { useEffect } from 'react'
import { makeStyles } from '@mui/styles'
import { Chip, Container } from '@mui/material'
import { NavLink } from 'react-router-dom'

//images
import homeImg from '../../assets/123.webp'
// import homeImg from '../../assets/123.webp'
import img11 from '../../assets/detail/img_9.png'
import img12 from '../../assets/detail/img_11.png'
import img13 from '../../assets/detail/img_8.png'
import img14 from '../../assets/detail/img_12.png'
import img15 from '../../assets/detail/img_10.png'
import img2 from '../../assets/detail/img_1.png'
import img3 from '../../assets/detail/img_2.png'
import img4 from '../../assets/detail/img_3.png'
import img5 from '../../assets/detail/img_4.png'
import img6 from '../../assets/detail/img_5.png'
import img66 from '../../assets/images/left.png'
import img77 from '../../assets/images/right.png'
import img7 from '../../assets/detail/img_6.png'
import imgUP from '../../assets/images/UP.png'
import img81 from '../../assets/images/img_1.png'
import img82 from '../../assets/images/img.png'
import img83 from '../../assets/images/img_2.png'
import img84 from '../../assets/images/img_3.png'
import TextSpan from './textSpan'
import { useDispatch, useSelector } from 'react-redux'
import { Category, Filter } from '../../reducers/main/main-api'
import { Box } from '@mui/system'


const HomeImg = () => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const { categorys } = useSelector(store => store.main)
	useEffect(() => {
		dispatch(Category())
	}, [])
	return (
		<section>
			<Container maxWidth='xl'>
				<h1 className={classes.title}>Идеальный дом</h1>
				{categorys
					? categorys.slice(0, 1).map(el => (
							<div className={classes.blockImg}>
								<NavLink
									to={`/catalog/${categorys[0].title}`}
									className={'img Aimg11'}
								>
									<img className={'image'} src={img11} alt='' />{' '}
									<p className='image_span'>
										{' '}
										<TextSpan title={'Короны KR'} />
									</p>
								</NavLink>
								<NavLink
									to={`/catalog/${categorys[0].title}`}
									className={'img Aimg12'}
								>
									<img className={'image'} src={img12} alt='' />{' '}
									<p className='image_span'>
										{' '}
										<TextSpan title={'Короны KR'} />
									</p>
								</NavLink>
								<NavLink
									to={`/catalog/${categorys[0].title}`}
									className={'img Aimg14'}
								>
									<img className={'image'} src={img14} alt='' />{' '}
									<p className='image_span'>
										{' '}
										<TextSpan title={'Короны KR'} />
									</p>
								</NavLink>
								<NavLink
									to={`/catalog/${categorys[0].title}`}
									className={'img Aimg13'}
								>
									<img className={'image'} src={img13} alt='' />{' '}
									<p className='image_span'>
										{' '}
										<TextSpan title={'Короны KR'} />
									</p>
								</NavLink>
								<NavLink
									to={`/catalog/${categorys[0].title}`}
									className={'img Aimg15'}
								>
									<img className={'image'} src={img15} alt='' />{' '}
									<p className='image_span'>
										{' '}
										<TextSpan title={'Короны KR'} />
									</p>
								</NavLink>
								<NavLink
									to={`/catalog/${categorys[1].title}`}
									className={'img Aimg2'}
								>
									<img className={'image'} src={img2} alt='' />{' '}
									<p className='image_span'>
										{' '}
										<TextSpan title={'Арочный комплект'} />
									</p>
								</NavLink>
								<NavLink
									to={`/catalog/${categorys[1].title}`}
									className={'img Aimg22'}
								>
									<img className={'image'} src={imgUP} alt='' />{' '}
									<p className='image_span'>
										<TextSpan title={'Арочный комплект'} />{' '}
									</p>
								</NavLink>
								<NavLink
									to={`/catalog/${categorys[1].title}`}
									className={'img Aimg3'}
								>
									<img className={'image'} src={img3} alt='' />{' '}
									<p className='image_span'>
										{' '}
										<TextSpan title={'Комплект пилястра'} />
									</p>
								</NavLink>
								<NavLink
									to={`/catalog/${categorys[1].title}`}
									className={'img Aimg4'}
								>
									<img className={'image'} src={img3} alt='' />
									<p className='image_span'>
										{' '}
										<TextSpan title={'Комплект пилястра'} />
									</p>
								</NavLink>
								<NavLink
									to={`/catalog/${categorys[2].title}`}
									className={'img Aimg5'}
								>
									<img className={'image'} src={img4} alt='' />{' '}
									<p className='image_span'>
										<TextSpan title={'Комплект пилястра'} />{' '}
									</p>
								</NavLink>
								<NavLink
									to={`/catalog/${categorys[2].title}`}
									className={'img Aimg6'}
								>
									<img className={'image'} src={img5} alt='' />{' '}
									<p className='image_span'>
										{' '}
										<TextSpan title={'Комплект пилястра'} />
									</p>
								</NavLink>
								<NavLink to={`/catalog/Готовые%20комплекты%20Окна`} className={'img Aimg7'}>
									<img className={'image'} src={img6} alt='' />{' '}
									<p className='image_span'>
										{' '}
										<TextSpan title={'Комплект окон'} />
									</p>
								</NavLink>
								<NavLink to={`/catalog/Готовые%20комплекты%20Окна`} className={'img Aimg77'}>
									<img className={'image'} src={img77} alt='' />{' '}
									<p className='image_span'>
										{' '}
										<TextSpan title={'Комплект окон'} />
									</p>
								</NavLink>
								<NavLink to={`/catalog/Готовые%20комплекты%20Окна`} className={'img AimgLeft'}>
									<img className={'image'} src={img66} alt='' />{' '}
									<p className='image_span'>
										{' '}
										<TextSpan title={'Комплект окон'} />
									</p>
								</NavLink>
								<NavLink to={`/catalog/Готовые%20комплекты%20Окна`} className={'img Aimg8'}>
									<img className={'image'} src={img7} alt='' />{' '}
									<p className='image_span'>
										{' '}
										<TextSpan title={'Комплект окон'} />
									</p>
								</NavLink>
								<NavLink
									to={`/catalog/${categorys[2].title}`}
									className={'img Aimg91'}
								>
									<img className={'image'} src={img81} alt='' />{' '}
									<p className='image_span'>
										{' '}
										<TextSpan title={'Пояс KR'} />
									</p>
								</NavLink>
								<NavLink
									to={`/catalog/${categorys[2].title}`}
									className={'img Aimg92'}
								>
									<img className={'image'} src={img82} alt='' />{' '}
									<p className='image_span'>
										<TextSpan title={'Пояс KR'} />{' '}
									</p>
								</NavLink>
								<NavLink
									to={`/catalog/${categorys[2].title}`}
									className={'img Aimg93'}
								>
									<img className={'image'} src={img83} alt='' />{' '}
									<p className='image_span'>
										<TextSpan title={'Пояс KR'} />
									</p>
								</NavLink>
								<NavLink
									to={`/catalog/${categorys[2].title}`}
									className={'img Aimg94'}
								>
									<img className={'image'} src={img84} alt='' />{' '}
									<p className='image_span'>
										<TextSpan title={'Пояс KR'} />
									</p>
								</NavLink>
								<img className={'homeImg'} src={homeImg} alt='' />
								<div className='homeDv' />
							</div>
					  ))
					: null}
			</Container>
		</section>
	)
}

export default HomeImg
const useStyles = makeStyles(theme => ({
	title: {
		fontFamily: 'Manrope',
		fontSize: '50px',
		fontWeight: '600',
		marginTop: '100px',
		marginBottom: '-60px',
		[theme.breakpoints.down(768.1)]: {
			fontFamily: 'Manrope',
			fontSize: '40px',
			fontWeight: '600',
			marginTop: '20px',
			marginBottom: '-70px',
		},
		[theme.breakpoints.down(576.1)]: {
			fontFamily: 'Manrope',
			fontSize: '28px',
			fontWeight: '600',
			marginTop: '20px',
			marginBottom: '-70px',
		},
		[theme.breakpoints.down(425.1)]: {
			fontFamily: 'Manrope',
			fontSize: '28px',
			fontWeight: '600',
			marginTop: '0',
			marginBottom: '-70px',
		},
		[theme.breakpoints.down(375.1)]: {
			fontFamily: 'Manrope',
			fontSize: '24px',
			fontWeight: '600',
			marginTop: '0',
			marginBottom: '-70px',
		},
	},
	blockImg: {
		position: 'relative',
		paddingTop: '100px',
		width: '100%',
		height: '100%',

		'& .homeDv': {
			boxShadow: 'inset 0 -53px 80px 85px #1D1E23',
			width: '104%',
			height: '90%',
			position: 'absolute',
			top: '10%',
			left: '-2%',
			zIndex: '2',
			[theme.breakpoints.down(576.1)]: {
				display: 'none',
			},
		},
		'& .homeImg': {
			width: '100%',
			height: '100%',
			objectFit: 'cover',
			position: 'relative',
		},
		'& .img': {
			objectFit: 'cover',
			opacity: '0.1',
			transition: '0.4s',
			position: 'absolute',
			zIndex: '23',
			[theme.breakpoints.down(1024.1)]: {
				opacity: '0',
				'&:hover': {
					opacity: 1,
					transform: 'scale(1.003)',
				},
			},
			[theme.breakpoints.down(992.1)]: {
				display: 'none',
			},
			'&:hover': {
				opacity: 1,
				transform: 'scale(1.008)',
			},
			'&:hover .image_span': {
				opacity: 1,
				transform: 'scaleX(1) translate( 80px ,-20px)',
			},
		},
		'& .image_span': {
			position: 'absolute',
			borderRadius: '10px',
			padding: '10px',
			background: '#D0C5B7',
			opacity: '0',
			top: '-20px',
			color: 'black',
			left: '20px',
			transform: 'scaleX(0) translate(-40px,0)',
			overFlow: 'hidden',
			transition: '0.4s',
			[theme.breakpoints.down(992.1)]: {
				display: 'none',
			},
		},
		'& .image': {
			width: '100%',
			objectFit: 'cover',
		},
		'& .Aimg11': {
			width: '29%',
			left: '13%',
			marginTop: '17.8%',
		},
		'& .Aimg12': {
			width: '4.5%',
			left: '36.5%',
			marginTop: '12.6%',
		},
		'& .Aimg14': {
			width: '6.5%',
			left: '61.3%',
			marginTop: '13%',
		},
		'& .Aimg13': {
			width: '31%',
			left: '36.2%',
			marginTop: '12.3%',
		},
		'& .Aimg15': {
			width: '27%',
			left: '61.7%',
			marginTop: '17.5%',
		},
		'& .Aimg2': {
			width: '13%',
			left: '45%',
			marginTop: '43%',
			[theme.breakpoints.down(1024.1)]: {
				marginTop: '47.4%',
			},
		},
		'& .Aimg22': {
			width: '16%',
			left: '43.7%',
			marginTop: '21%',
		},
		'& .Aimg3': {
			width: '3.6%',
			left: '15.5%',
			marginTop: '20.3%',
		},
		'& .Aimg4': {
			width: '3.58%',
			left: '82.8%',
			marginTop: '20.3%',
		},
		'& .Aimg5': {
			left: '40%',
			width: '3.88%',
			marginTop: '17%',
		},
		'& .Aimg6': {
			width: '3.87%',
			left: '59.6%',
			marginTop: '17%',
		},
		'& .Aimg7': {
			width: '13.4%',
			left: '65%',
			marginTop: '43.3%',
		},
		'& .Aimg77': {
			width: '16%',
			left: '63.5%',
			marginTop: '22%',
		},
		'& .Aimg8': {
			width: '13.55%',
			left: '23.3%',
			marginTop: '43.3%',
		},
		'& .AimgLeft': {
			width: '15.55%',
			left: '22.5%',
			marginTop: '21%',
		},
		'& .Aimg91': {
			width: '10%',
			left: '6%',
			marginTop: '42%',
		},
		'& .Aimg92': {
			width: ' 25%',
			left: '15.4%',
			marginTop: '39.3%',
		},
		'& .Aimg93': {
			width: '16.5%',
			left: '43.5%',
			marginTop: '39%',
		},
		'& .Aimg94': {
			width: '23.8%',
			left: '63%',
			marginTop: '39.6%',
		},
	},
}))
