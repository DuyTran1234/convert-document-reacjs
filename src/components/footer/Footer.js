import { Button, Grid, IconButton, Link, Typography } from '@mui/material';
import { defaultColor } from '../../services/pickColor';
import { Icon } from '@iconify/react';
import FooterIcons from './FooterIcons';
import FooterInfomation from './FooterInfomation';
import FooterIntroduceGeneral from './FooterIntroduceGeneral';



export default function Footer() {
    return (
        <div>
            <FooterIntroduceGeneral />
            <FooterIcons />
            <FooterInfomation />
        </div>
    );
}
