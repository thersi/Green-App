import { Alert } from '@material-ui/lab'
import React from 'react'
import StPaper from 'styledComponents/StPaper'
import StSubmitButton from 'styledComponents/StSubmitButton'
import StTextField from 'styledComponents/StTextField'
import { Grid } from '@material-ui/core'

const ChangePasswordForm = ({
    error,
    onOldPasswordChange,
    onNewPasswordChange,
    onNewPasswordConfirmationChange,
    onSubmitButtonClick,
  }: {
    error: any;
    onOldPasswordChange: (e: any) => void;
    onNewPasswordChange: (e: any) => void;
    onNewPasswordConfirmationChange: (e: any) => void;
    onSubmitButtonClick: any;
  }) => {
    return (
        <StPaper elevation={0}>
            <StTextField
                required
                id="oldPassword"
                type="password"
                label={'Current Password'}
                variant="outlined"
                onChange={onOldPasswordChange}
            />
            <StTextField
                required
                id="newPassword"
                type="password"
                label={'New Password'}
                variant="outlined"
                onChange={onNewPasswordChange}
            />
            <StTextField
                required
                id="newPasswordConfirmation"
                type="password"
                label={'New Password'}
                variant="outlined"
                onChange={onNewPasswordConfirmationChange}
            />
            <br />
            {error && (
                <Alert severity="error">{error}</Alert>
            )}
            <StSubmitButton onClick={onSubmitButtonClick}>
                Save changes
            </StSubmitButton>
        </StPaper>
    )
}

export default ChangePasswordForm
