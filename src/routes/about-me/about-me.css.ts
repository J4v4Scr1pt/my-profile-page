import {style} from 'styled-vanilla-extract/qwik';

export const container=style({
    color: 'green',
    paddingTop: '30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    justifyItems: 'center',
    width: '100%',
    height: '500px',
    contain: 'strict'
});
