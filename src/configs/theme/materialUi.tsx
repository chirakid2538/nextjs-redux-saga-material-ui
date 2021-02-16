import { createMuiTheme } from '@material-ui/core/styles';
import { Shadows } from '@material-ui/core/styles/shadows';

const shadows: Shadows = [
    'none',
    '0px 0px 15px rgba(38, 50, 56, 0.1)',
    '0px 0px 15px rgba(38, 50, 56, 0.1)',
    '0px 0px 15px rgba(38, 50, 56, 0.1)',
    '0px 0px 15px rgba(38, 50, 56, 0.1)',
    '0px 0px 15px rgba(38, 50, 56, 0.1)',
    '0px 0px 15px rgba(38, 50, 56, 0.1)',
    '0px 0px 15px rgba(38, 50, 56, 0.1)',
    '0px 0px 15px rgba(38, 50, 56, 0.1)',
    '0px 0px 15px rgba(38, 50, 56, 0.1)',
    '0px 0px 15px rgba(38, 50, 56, 0.1)',
    '0px 0px 15px rgba(38, 50, 56, 0.1)',
    '0px 0px 15px rgba(38, 50, 56, 0.1)',
    '0px 0px 15px rgba(38, 50, 56, 0.1)',
    '0px 0px 15px rgba(38, 50, 56, 0.1)',
    '0px 0px 15px rgba(38, 50, 56, 0.1)',
    '0px 0px 15px rgba(38, 50, 56, 0.1)',
    '0px 0px 15px rgba(38, 50, 56, 0.1)',
    '0px 0px 15px rgba(38, 50, 56, 0.1)',
    '0px 0px 15px rgba(38, 50, 56, 0.1)',
    '0px 0px 15px rgba(38, 50, 56, 0.1)',
    '0px 0px 15px rgba(38, 50, 56, 0.1)',
    '0px 0px 15px rgba(38, 50, 56, 0.1)',
    '0px 0px 15px rgba(38, 50, 56, 0.1)',
    '0px 0px 15px rgba(38, 50, 56, 0.1)'
];

const fontFamily = {
    title: ['"Prompt"', '"Roboto"', '"Arial"', 'sans-serif'].join(' , '),
    content: ['"Sarabun"', '"Roboto"', '"Arial"', 'sans-serif'].join(' , '),
}

// Create a theme instance.
const theme = createMuiTheme({
    shadows,
    props: {
        MuiAppBar: {
            color: 'inherit'
        }
    },
    overrides: {
        MuiDrawer: {
            paperAnchorDockedLeft: {
                borderRight: '0px'
            }
        }
    },
    typography: {
        fontFamily: fontFamily.title,
        body1: {
            fontFamily: fontFamily.content,
        },
        body2: {
            fontFamily: fontFamily.content,
        },
        caption: {
            fontFamily: fontFamily.content,
        }
    }
});


export default theme;
