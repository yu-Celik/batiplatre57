'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import name from '@/assets/chantier photo/2nd/IMG_20210107_162721.jpg';
import { Parallax, Pagination } from 'swiper/modules';
import { Typography, alpha, useTheme } from '@mui/material';
import { CSSProperties } from 'react';
import Image from 'next/image';

interface CustomCSSProperties extends CSSProperties {
    [key: `--${string}`]: string | undefined;
}

export default function SlideParallax() {
    const theme = useTheme();
    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': theme.palette.grey[200],
                    '--swiper-pagination-bullet-inactive-color': `${alpha(theme.palette.grey[800], 0.5)}`,
                    '--swiper-pagination-color': `${theme.palette.mode === 'dark' ? 'var(--mui-palette-secondary-main)' : 'var(--mui-palette-primary-main)'}`,
                } as CustomCSSProperties}
                speed={600}
                parallax={true}
                pagination={pagination}
                modules={[Parallax, Pagination]}
                slidesPerView={1}
                height={900}
                keyboard={{ enabled: true }}
                grabCursor={true}
                className="slideParallax md:min-h-[calc(60vh-156px)] lg:min-h-[calc(80vh-156px)]"
            >
                <Image
                    src={name}
                    alt=""
                    loading='lazy'
                    slot="container-start"
                    className="absolute left-0 top-0"
                    data-swiper-parallax="-23%"
                    // sizes='130vw'
                    // fill
                    style={{
                        objectFit: 'cover',
                        // objectPosition: 'center',
                        width: '130%',
                        height: '100%'
                    }}
                />
                <SwiperSlide >
                    <div className='max-w-[900px] mx-auto flex flex-col gap-2'>
                        <div className="step-number" data-swiper-parallax="-400">Étape 1</div>
                        <Typography variant="h3" fontSize={{ xs: 32, md: 40 }} data-swiper-parallax="-300" gutterBottom sx={{
                            color: 'var(--mui-palette-primary-main)',
                            '[class="dark"] &': {
                                color: 'var(--mui-palette-secondary-main)'
                            }
                        }}>
                            <strong>Planification Initiale</strong>
                        </Typography>
                        <Typography variant="h4" fontSize={{ xs: 24, md: 32 }} data-swiper-parallax="-200" gutterBottom >
                            La première étape vers la <strong>réussite</strong>
                        </Typography>
                        <Typography variant="body1" fontSize={{ xs: 16, md: 20 }} lineHeight={1.75} data-swiper-parallax="-100" >
                            Notre processus commence par une <strong>consultation détaillée</strong> pour comprendre vos <strong>besoins</strong> et vos attentes. Nous discutons de vos <strong>objectifs</strong>, évaluons les <strong>contraintes</strong> et proposons des <strong>solutions personnalisées</strong>. Cette étape est cruciale pour établir un plan solide qui guidera toutes les phases suivantes du projet.
                        </Typography>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='max-w-[900px] mx-auto flex flex-col gap-2'>
                        <div className="step-number" data-swiper-parallax="-400">Étape 2</div>
                        <Typography variant="h3" fontSize={{ xs: 32, md: 40 }} data-swiper-parallax="-300" gutterBottom sx={{
                            color: 'var(--mui-palette-primary-main)',
                            '[class="dark"] &': {
                                color: 'var(--mui-palette-secondary-main)'
                            }
                        }}>
                            <strong>Conception</strong> et <strong>Développement</strong>
                        </Typography>
                        <Typography variant="h4" fontSize={{ xs: 24, md: 32 }} data-swiper-parallax="-200" gutterBottom >
                            Créer avec <strong>précision</strong>
                        </Typography>
                        <Typography variant="body1" fontSize={{ xs: 16, md: 20 }} lineHeight={1.75} data-swiper-parallax="-100" >
                            Après avoir établi un plan clair, nous démarrerons la phase de <strong>conception</strong>. Utilisant les dernières <strong>technologies de pointe</strong>, nous transformons les idées en plans détaillés. Chaque <strong>conception</strong> est revue et raffinée pour assurer qu&apos;elle répond bien à vos attentes avant de passer à la <strong>réalisation</strong>.
                        </Typography>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='max-w-[900px] mx-auto flex flex-col gap-2'>
                        <div className="step-number" data-swiper-parallax="-400">Étape 3</div >
                        <Typography variant="h3" fontSize={{ xs: 32, md: 40 }} data-swiper-parallax="-300" gutterBottom sx={{
                            color: 'var(--mui-palette-primary-main)',
                            '[class="dark"] &': {
                                color: 'var(--mui-palette-secondary-main)'
                            }
                        }}>
                            <strong>Exécution</strong> du Projet
                        </Typography>
                        <Typography variant="h4" fontSize={{ xs: 24, md: 32 }} data-swiper-parallax="-200" gutterBottom >
                            <strong>Réalisation</strong> et <strong>finitions</strong>
                        </Typography>
                        <Typography variant="body1" fontSize={{ xs: 16, md: 20 }} lineHeight={1.75} data-swiper-parallax="-100" >
                            La dernière étape est l&apos;<strong>exécution</strong> du projet. Nos équipes travaillent avec efficacité pour <strong>matérialiser</strong> votre projet, en respectant strictement les normes de qualité du DTU et les délais convenus. Nous assurons une communication continue tout au long de cette phase pour garantir que le projet avance selon le plan. Une fois terminé, nous procédons à une inspection finale et à la <strong>livraison</strong> du projet.
                        </Typography>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
