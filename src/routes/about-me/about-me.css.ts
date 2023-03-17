import {style} from 'styled-vanilla-extract/qwik';

export const container=style({
    color: 'red',
    paddingTop: '30px',
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center',
    justifyItems: 'center',
    width: '100%',
    height: '500px',
    contain: 'strict'
});
