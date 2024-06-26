import { TextDecoration } from '@/components/ui/CircleScrollAnimation';
import { Box, CircularProgress } from '@mui/material';
import dynamic from 'next/dynamic';

const RenderTablet = dynamic(() => import('(pages)/accueil/components/sectionOneRenders/RenderTablet'), {
    loading: () => <CircularProgress />,
})
const RenderMobile = dynamic(() => import('(pages)/accueil/components/sectionOneRenders/RenderMobile'), {
    loading: () => <CircularProgress />,
})
const RenderDesktop = dynamic(() => import('(pages)/accueil/components/sectionOneRenders/RenderDesktop'), {
    loading: () => <CircularProgress />,
})

type Props = {}
export default function SectionOne({ }: Props) {
    return (
        <>
            <Box
                component={'section'}
                display={'flex'}
                flexDirection={'column'}
            // className="md:bg-grey-200 md:dark:bg-grey-800"
            >
                <TextDecoration variant={'h2'} styles={{ my: 6, display: { xs: 'flex', md: 'none' } }} text={"Pourquoi choisir BatiPlatre57 ?"} />
                <RenderTablet />
                <RenderMobile />
                <RenderDesktop />
            </Box>
        </>
    )
}

