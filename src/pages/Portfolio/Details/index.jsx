import React, { useEffect } from 'react'
import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import house from '../../../assets/images/house.webp'
import arrow from '../../../assets/images/arrow.svg'
import { Link, useNavigate } from 'react-router-dom'
import { Container, useTheme } from '@mui/system'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { makeStyles } from '@mui/styles'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { PortfolioId } from '../../../reducers/main/main-api'

const Details = () => {
	const theme = useTheme()
	const lg = useMediaQuery(theme.breakpoints.down('992'))
	const md = useMediaQuery(theme.breakpoints.down('768'))
	const idx = 1
	const params = useParams()
	const dispatch = useDispatch()
	const { portfolioItem } = useSelector(store => store.main)
	useEffect(() => {
		dispatch(PortfolioId(params.id))
	}, [dispatch])
	const classes = useStyles()
	const navigate = useNavigate()
	return (
		<section>
			<Container maxWidth='xl'>
				<Box display='flex' flexDirection={{ xs: 'column', lg: 'row' }}>
					<Box
						display='flex'
						flexDirection='column'
						width={{ xs: '100%', lg: '50%' }}
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
									<Box data-fancybox={idx} data-src={portfolioItem.poster}>
										<img
											src={portfolioItem.poster}
											height={!lg ? '380px' : '296px'}
											width={!lg ? '570px' : '100%'}
											style={{ objectFit: 'cover', borderRadius: '10px' }}
											alt=''
										/>
									</Box>
								</SwiperSlide>
								<SwiperSlide>
									<Box data-fancybox={idx} data-src={portfolioItem.image1}>
										<img
											src={portfolioItem.image1}
											height='296px'
											width='100%'
											style={{ objectFit: 'cover', borderRadius: '10px' }}
											alt=''
										/>
									</Box>
								</SwiperSlide>
								<SwiperSlide>
									<Box data-fancybox={idx} data-src={portfolioItem.image2}>
										<img
											src={portfolioItem.image2}
											height='296px'
											width='100%'
											style={{ objectFit: 'cover', borderRadius: '10px' }}
											alt=''
										/>
									</Box>
								</SwiperSlide>
								<SwiperSlide>
									<Box data-fancybox={idx} data-src={portfolioItem.image3}>
										<img
											src={portfolioItem.image3}
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
								data-src={portfolioItem.poster}
								width='100%'
								height={!lg ? '380px' : '400px'}
							>
								<img
									src={portfolioItem.poster}
									height='100%'
									width='100%'
									style={{ objectFit: 'cover', borderRadius: '10px' }}
									alt=''
								/>
							</Box>
						)}
						{!md && (
							<Box
								display='flex'
								mt={3}
								width='100%'
								sx={{ columnGap: { xs: 3, lg: 3 } }}
							>
								<Box
									data-fancybox={idx}
									height={!lg ? '114px' : '120px'}
									data-src={portfolioItem.image1}
									width='100%'
								>
									<img
										src={portfolioItem.image1}
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
									height={!lg ? '114px' : '120px'}
									data-src={portfolioItem.image2}
									width='100%'
								>
									<img
										src={portfolioItem.image2}
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
									height={!lg ? '114px' : '120px'}
									data-src={portfolioItem.image3}
									width='100%'
								>
									<img
										src={portfolioItem.image3}
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
						width={{ lg: '80%', xs: '100%' }}
					>
						<Typography variant='h4' textTransform='uppercase' mb={2}>
							{portfolioItem.title}
						</Typography>
						{/* <table>
                <tr
                  style={{
                    paddingBottom: 15,
                  }}
                >
                  <td style={{ paddingRight: 36 }}>Pharetra</td>
                  <td>{portfolioItem.pharetra}</td>
                </tr>
                <tr>
                  <td>Uorttitor</td>
                  <td>{portfolioItem.uorttitor}</td>
                </tr>
                <tr>
                  <td>Quisque</td>
                  <td>{portfolioItem.quisque}</td>
                </tr>
                <tr>
                  <td> Aliquet </td>
                  <td>{portfolioItem.aliquet}</td>
                </tr>
              </table> */}
						<Typography variant='subtitle1' mt={6} mb={1}>
							Описание
						</Typography>
						<Typography variant='subtitle2' component='p'>
							{portfolioItem.description}
						</Typography>
					</Box>
				</Box>
				<Button
					variant='contained'
					sx={{
						m: '56px auto 0',
						display: 'table',
						background:
							'linear-gradient(180deg, #FFD15B 0%, #FDC841 100%)!important',
						boxShadow: '0px 1px 25px 5px rgba(255, 243, 220, 0.24)',
					}}
					size='medium'
					onClick={() => navigate(-1)}
				>
					Вернуться в портфолио
				</Button>
			</Container>
		</section>
	)
}

export default Details

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
