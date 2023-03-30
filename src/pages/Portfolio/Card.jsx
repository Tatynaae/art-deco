import React from 'react'
import { Box, Typography, useMediaQuery } from '@mui/material'
import arrow from '../../assets/images/arrow.svg'
import { Link } from 'react-router-dom'
import { useTheme } from '@mui/system'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { makeStyles } from '@mui/styles'
import SwiperCore, { Autoplay, Navigation } from 'swiper'

SwiperCore.use([Autoplay, Navigation])

const Card = ({ idx, item }) => {
	const theme = useTheme()
	const lg = useMediaQuery(theme.breakpoints.down('992'))
	const md = useMediaQuery(theme.breakpoints.down('768'))
	const classes = useStyles()
	return (
		<Link
			to={`/portfolio/details/${item.id}`}
			style={{
				width: '100%',
				position: 'relative',
				marginTop: '30px',
			}}
		>
			<Box
				display='flex'
				sx={{
					mb: { xs: 8, lg: 5 },
					'&:last-child': {
						mb: 0,
					},
					pb: { xs: 5, lg: 0 },
				}}
				mb={!lg ? '60px' : '23px'}
				flexDirection={{ xs: 'column', lg: 'row' }}
			>
				<Box
					display='flex'
					mb={'20px'}
					width={{ xs: '100%', lg: '65%' }}
					position={'relative'}
				>
					{md ? (
						<Swiper
							slidesPerView={1}
							spaceBetween={10}
							navigation={true}
							className={classes.swiper}
							autoplay={{
								delay: 3000,
								pauseOnMouseEnter: true,
								disableOnInteraction: false,
							}}
						>
							<SwiperSlide>
								<Box data-fancybox={idx} data-src={item.poster}>
									<img
										src={item.poster}
										height={!lg ? '380px' : '296px'}
										width={!lg ? '570px' : '100%'}
										style={{ objectFit: 'cover', borderRadius: '10px' }}
										alt=''
									/>
								</Box>
							</SwiperSlide>
							<SwiperSlide>
								<Box data-fancybox={idx} data-src={item.image1}>
									<img
										src={item.image1}
										height='296px'
										width='100%'
										style={{ objectFit: 'cover', borderRadius: '10px' }}
										alt=''
									/>
								</Box>
							</SwiperSlide>
							<SwiperSlide>
								<Box data-fancybox={idx} data-src={item.image2}>
									<img
										src={item.image2}
										height='296px'
										width='100%'
										style={{ objectFit: 'cover', borderRadius: '10px' }}
										alt=''
									/>
								</Box>
							</SwiperSlide>
							<SwiperSlide>
								<Box data-fancybox={idx} data-src={item.image3}>
									<img
										src={item.image3}
										height='296px'
										width='100%'
										style={{ objectFit: 'cover', borderRadius: '10px' }}
										alt=''
									/>
								</Box>
							</SwiperSlide>
						</Swiper>
					) : (
						<Box
							data-fancybox={idx}
							mr={{ xs: 0, md: 2 }}
							data-src={item.poster}
							width={{ xs: '75%', md: '75%', position: 'relative' }}
						>
							<img
								src={item.poster}
								height={!lg ? '380px' : '296px'}
								width={'100%'}
								style={{ objectFit: 'cover', borderRadius: '10px' }}
								alt=''
							/>
						</Box>
					)}
					{!md && (
						<Box
							display='flex'
							flexDirection={'column'}
							style={{ width: '25%' }}
							sx={{ rowGap: { xs: '12px', lg: '16px' } }}
						>
							<Box
								data-fancybox={idx}
								height={!lg ? '116px' : '90.5px'}
								data-src={item.image1}
								width='100%'
							>
								<img
									src={item.image1}
									style={{
										objectFit: 'cover',
										borderRadius: '10px',
									}}
									width='100%'
									height='100%'
									alt=''
								/>
							</Box>
							<Box
								data-fancybox={idx}
								height={!lg ? '116px' : '90.5px'}
								data-src={item.image2}
								width='100%'
							>
								<img
									src={item.image2}
									style={{
										objectFit: 'cover',
										borderRadius: '10px',
									}}
									width='100%'
									height='100%'
									alt=''
								/>
							</Box>
							<Box
								data-fancybox={idx}
								height={!lg ? '116px' : '90.5px'}
								data-src={item.image3}
								width='100%'
							>
								<img
									src={item.image3}
									style={{
										objectFit: 'cover',
										borderRadius: '10px',
									}}
									width='100%'
									height='100%'
									alt=''
								/>
							</Box>
						</Box>
					)}
				</Box>
				<Box
					ml={{ xs: 0, lg: 3 }}
					mt={{ xs: 2, lg: 0 }}
					width={{ xs: '100%', lg: '35%' }}
				>
					<Typography variant='h4' textTransform='uppercase' mb={2}>
						{item.title}
					</Typography>
					{/*<table>*/}
					{/*	<tr*/}
					{/*		style={{*/}
					{/*			paddingBottom: 15,*/}
					{/*		}}*/}
					{/*	>*/}
					{/*		<td style={{ paddingRight: 36 }}>Pharetra</td>*/}
					{/*		<td>{item.pharetra} шт</td>*/}
					{/*	</tr>*/}
					{/*	<tr>*/}
					{/*		<td>Uorttitor</td>*/}
					{/*		<td>{item.uorttitor}см</td>*/}
					{/*	</tr>*/}
					{/*	<tr>*/}
					{/*		<td>Quisque</td>*/}
					{/*		<td>{item.quisque}</td>*/}
					{/*	</tr>*/}
					{/*	<tr>*/}
					{/*		<td> Aliquet </td>*/}
					{/*		<td>{item.aliquet}</td>*/}
					{/*	</tr>*/}
					{/*</table>*/}
					<Typography variant='subtitle2' component='p'>
						{item.description.slice(0,140)}...
					</Typography>
					<Link
						to={`/portfolio/details/${item.id}`}
						style={{
							fontSize: 16,
							marginTop: !lg ? 40 : 20,
							display: 'block',
							textAlign: 'center',
						}}
						className='link primary'
					>
						Посмотреть на карте
					</Link>
				</Box>
			</Box>
		</Link>
	)
}

export default Card

const useStyles = makeStyles(theme => ({
	swiper: {
		width: '100%',

		'& .swiper-button-next, .swiper-button-prev': {
			width: 40,
			height: 40,
			position: 'absolute',
			top: '50%',
			transform: 'translateY(-50%)',
			zIndex: 2,
			cursor: 'pointer',

			'&:before': {
				content: `''!important`,
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				background: `no-repeat url('${arrow}') center/cover`,
			},
		},

		'& .swiper-button-next': {
			right: 0,
			transform: 'translateY(-50%) ',
		},

		'& .swiper-button-prev': {
			left: 0,
			transform: 'translateY(-50%) rotate(180deg)',
		},
	},
}))
