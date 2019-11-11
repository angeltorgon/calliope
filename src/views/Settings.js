import React from 'react'
import useStyles from './styles/_settings'
import SettingsNavbar from '../components/SettingsNavbar'
import ProfileImage from '../components/ProfileImage'

export default function Settings() {
    const classes = useStyles();
    return (
        <div>
            <SettingsNavbar />
            <div className={classes.settingsContainer}>
                <ProfileImage />
            </div>
        </div>
    )
}
