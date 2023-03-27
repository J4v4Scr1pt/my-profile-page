import {style} from 'styled-vanilla-extract/qwik';

export const container=style({
    display: 'grid',
    grid: '0.5fr 10fr 0.5fr / 100%',
    gridTemplateAreas: '"header" "main-conent" "footer"',
    height: '100vh',
    width: '100vw',
});

export const mainContent=style({
    gridArea: 'main-conent',
    overflowY: 'auto',
    overflowX: 'hidden',
    scrollBehavior: 'smooth',

    // '::-webkit-scrollbar': {
    //     display: 'none'
    // },

    '::-webkit-scrollbar': {
        width: 16,
        height: 12,
        borderRadius: '100vw',
    },

    '::-webkit-scrollbar-track': {
        background: 'transparent',
        marginBlock: '0.3em'
    },

    '::-webkit-scrollbar-thumb': {
        background: 'rgba(0, 0, 0, 0.3)',
        border: '4px solid transparent',
        backgroundClip: 'padding-box',
        borderRadius: '100vw'
    },



    selectors: {
        '&::-webkit-scrollbar-thumb:hover': {
            background: 'rgba(0,255,0, 0.8)',
            backgroundClip: 'padding-box',
            border: '1px solid transparent'
        },

        '&::-webkit-scrollbar-thumb:active': {
            background: 'rgba(0, 0, 0, 0.6)',
            backgroundClip: 'padding-box',
            border: '1px solid transparent'
        },
    }
});
