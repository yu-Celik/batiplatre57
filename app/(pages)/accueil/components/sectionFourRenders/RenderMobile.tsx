'use client'
import { Box, Container, Typography, Button, Tabs, Tab, Card, CardContent, Grid, IconButton, styled, Collapse, CardActions, IconButtonProps } from '@mui/material';
import { TextDecoration } from '@/components/ui/CircleScrollAnimation';
import CustomSwiper from '@/components/Slider/SimpleSlide';
import { tabsClasses } from '@mui/material/Tabs';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { peintureImg, platerieImg, amenagementCombleImg, carrelageImg, poseDeSolImg } from "@/data/imageSlideHome";
import { ArrowForwardIos, LiveHelp } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useRouter } from 'next/navigation';
import { SpringUpFadeInBox } from '@/components/motion/SpringUpFadeInBox';
import { CardDecoration } from '@/components/ui/CardDecoration';
import ConsultationBox from '@/components/Card/ConsultationBox';


interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const services = [
    {
        path: '/debarras-et-nettoyage',
        title: "Débarras et néttoyage",
        description: "Nous vous proposons des services de débarras et de nettoyage pour vos projets de rénovation. Que ce soit pour des espaces résidentiels ou commerciaux, notre équipe expérimentée assure un nettoyage approfondi et professionnel, en utilisant des équipements de pointe et des techniques respectueuses de l'environnement."
    },
    {
        path: '/platerie-et-isolation',
        title: "Plâtrerie et isolation",
        description: "Création et aménagement de divisions intérieures selon vos besoins. Nos solutions d'isolation thermique et acoustique sont conçues pour améliorer le confort et l'efficacité énergétique de votre bâtiment, tout en respectant les normes de sécurité et de durabilité les plus strictes."
    },
    {
        path: '/amenagement-decoration-interieur',
        title: "Aménagement de combles et décoration",
        description: "Nous vous proposons des services d'aménagement de combles et de décoration pour optimiser l'espace de votre maison. Transformez vos combles en espaces de vie attrayants et fonctionnels avec nos solutions sur mesure, qui allient esthétique et praticité."
    },
    {
        path: '/peinture',
        title: "Peinture",
        description: "Nous vous proposons des services de peinture intérieure et extérieure pour rafraîchir et embellir votre espace. Choisissez parmi une large gamme de couleurs et de finitions pour donner une nouvelle vie à vos murs, avec des peintures de haute qualité qui garantissent durabilité et résistance aux intempéries."
    },
    {
        path: '/pose-de-sol',
        title: "Pose de sols",
        description: "Nous vous proposons des services de pose de sols pour un intérieur moderne et élégant. Que vous préfériez le parquet, le carrelage ou le vinyle, nos experts vous aideront à choisir le meilleur matériau pour votre espace et s'assureront d'une installation impeccable et durable."
    },
    {
        path: '/nos-services',
        title: "Tous nos Services",
        description: "Découvrez la gamme complète de nos services de rénovation et d'aménagement. Chez BatiPlatre57, nous couvrons tous les aspects de votre projet, de la conception à la réalisation. Nos experts sont à votre disposition pour vous fournir des solutions personnalisées et adaptées à vos besoins spécifiques, garantissant qualité et satisfaction."
    }
];

type Props = {}
export default function RenderMobile({ }: Props) {
    const [value, setValue] = useState(1);
    const refBox = useRef(null);
    const [expanded, setExpanded] = useState(Array(services.length).fill(false));
    const router = useRouter();

    const handleExpandClick = (index: number) => {
        const newExpanded = [...expanded];
        newExpanded[index] = !newExpanded[index];
        setExpanded(newExpanded);
    };


    const handleChange = (_: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <>
            <Box component={'section'} position={'relative'} display={{ xs: 'flex', md: 'none' }} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} mb={2} sx={{ '& strong': { fontWeight: 500 } }}>
                <TextDecoration styles={{ my: 6 }} variant={'h2'} text={"Découvrez nos prestations"} />
                <Container>
                    <Typography variant="body1">
                        Chez <strong>BatiPlatre57</strong>, nous offrons une gamme complète de services de <strong>rénovation</strong>, allant de la <strong>conception initiale</strong> à la <strong>réalisation finale</strong>.
                    </Typography>
                </Container>
                <Container
                    disableGutters
                    sx={{
                        position: 'relative',
                        flexGrow: 1,
                        backgroundColor: 'var(--mui-palette-background-paper)',
                        borderRadius: 'var(--mui-spacing-1) var(--mui-spacing-1) 0 0',
                    }}
                >
                    <Button
                        variant='contained'
                        size='large'
                        aria-label="Voir la galerie précédente"
                        onClick={() => { router.push('/galerie') }}
                        color="secondary"
                        sx={{
                            position: 'absolute',
                            top: { xs: '20%', sm: '15%' },
                            right: 10,
                            zIndex: 2,
                            // backgroundColor: 'var(--mui-palette-blueAndAmber-main)',
                        }}
                    >
                        Voir la galerie
                    </Button>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="Catégories de services de rénovation"
                        variant="scrollable"
                        allowScrollButtonsMobile
                        scrollButtons='auto'
                        TabIndicatorProps={{
                            sx: {
                                backgroundColor: 'var(--mui-palette-blueAndAmber-main)',
                            }
                        }}
                        TabScrollButtonProps={{
                            'aria-label': 'scroll tabs',
                        }}
                        sx={{
                            [`& .${tabsClasses.scrollButtons}`]: {
                                '&.Mui-disabled': { opacity: 0.3 },
                            },
                            '& .Mui-selected.MuiButtonBase-root': {
                                color: 'var(--mui-palette-blueAndAmber-main)',
                            }
                        }}
                    >
                        <Tab label="Débarras & néttoyage" value={0} />
                        <Tab label="Plâtrerie & isolation" value={1} />
                        <Tab label="Aménagement & décoration" value={2} />
                        <Tab label="Peinture" value={3} />
                        <Tab label="Pose de sol" value={4} />
                    </Tabs>
                    <CustomTabPanel value={value} index={0} aria-label="Débarras & néttoyage" aria-controls="Débarras & néttoyage" >
                        <CustomSwiper images={peintureImg} />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1} aria-label="Plâtrerie & isolation" aria-controls="Plâtrerie & isolation" >
                        <CustomSwiper images={platerieImg} />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2} aria-label="Aménagement & décoration" aria-controls="Aménagement & décoration" >
                        <CustomSwiper images={amenagementCombleImg} />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={3} aria-label="Peinture" aria-controls="Peinture" >
                        <CustomSwiper images={carrelageImg} />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={4} aria-label="Pose de sol" aria-controls="Pose de sol" >
                        <CustomSwiper images={poseDeSolImg} />
                    </CustomTabPanel>
                </Container>
                <Container sx={{ px: { sm: 2 } }} className='brightness-100 dark:backdrop-brightness-100 bg-gradientToBottomLight dark:bg-gradientToBottom block sm:hidden'>
                    <CardDecoration className='bg-amber-500 dark:bg-amber-600 mb-2 w-1/4 h-full -z-10'>
                        <Grid container spacing={2} alignItems={'stretch'}>
                            {services.map((service, index) => (
                                <Grid item xs={12} sm={6} md={4} height={'100%'} key={index}>
                                    <Card raised variant='outlined' sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                    }}>
                                        <CardContent sx={{ display: 'flex', flexDirection: 'row', flexGrow: 1 }}>
                                            <Typography variant="h6" color="primary" sx={{ minHeight: { sm: '64px' } }}>
                                                {service.title}
                                            </Typography>
                                        </CardContent>
                                        <CardActions disableSpacing sx={{ px: 1.5 }}>
                                            <Button
                                                aria-label={`En savoir plus sur ${service.title}`}
                                                size="small"
                                                variant='text'
                                                onClick={() => { router.push(service.path) }}
                                                endIcon={<ArrowForwardIos fontSize='inherit' />}
                                            >
                                                Détails
                                            </Button>
                                            <ExpandMore
                                                expand={expanded[index]}
                                                onClick={() => handleExpandClick(index)}
                                                aria-expanded={expanded[index]}
                                                aria-label="Afficher plus"
                                            >
                                                <ExpandMoreIcon />
                                            </ExpandMore>
                                        </CardActions>
                                        <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
                                            <CardContent>
                                                <Typography variant="body2">
                                                    {service.description}
                                                </Typography>
                                            </CardContent>
                                        </Collapse>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </CardDecoration>
                </Container>
            </Box >
            <ConsultationBox />
        </>
    )
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    {children}
                </Box>
            )}
        </div>
    );
}