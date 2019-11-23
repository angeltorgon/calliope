import React from 'react'
import useStyles from './styles/_settings'
import SettingsNavbar from '../components/SettingsNavbar'
import ProfileImage from '../components/ProfileImage'
import TextInput from '../components/inputs/TextInput'
import SecondaryButton from '../components/buttons/SecondaryButton'

export default function Settings() {
    const classes = useStyles();
    return (
        <div>
            <SettingsNavbar />
            <div className={classes.settingsContainer}>
                <ProfileImage />
                <form>
                    <TextInput value="" placeholder="Full Name" />
                    <TextInput value="" placeholder="Bio" />
                    <SecondaryButton title="Save"/>
                </form>
            </div>
        </div>
    )
}
