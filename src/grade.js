
import React, { Component, useState } from 'react';
import { Button, makeStyles, withStyles, TextField } from "@material-ui/core";
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import Close from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
    loginModal: {
        '& .MuiPaper-root': {
            width: 680,
            height: 580
        },
        '& .MuiDialogContent-root': {
            padding: "0",
        },
        '& .MuiDialog-paper': {
            margin: 10,
        }
    },
    closeIcon: {
        position: "absolute",
        right: 0,
        padding: 20,
        cursor: "pointer"
    },
    loginHeading: {
        color: "#EAEAEA",
        margin: 0,
        fontSize: 20,
        fontWeight: "600",
        paddingTop: 60,
    },
    loginInput: {
        marginTop: 20,
        borderColor: "#dfdfdf",
        '& .MuiInputLabel-outlined': {
            color: '#a6a6a6',
            fontSize: 16,
            fontFamily: 'Poppins, san-serif'
        },
        '& .MuiInputLabel-shrink': {
            color: "#f33075 !important",
        },
        '& .MuiOutlinedInput-root > fieldset': {
            borderColor: "#f33075 !important",
        },
    },
    continueBtn: {
        marginTop: 20,
        background: "#f33075",
        width: "100%",
        fontFamily: "Poppins, sans-serif",
        textTransform: "capitalize",
        borderRadius: 8,
        fontWeight: "500",
        fontSize: 16,
        height: 50,
        boxShadow: "none",
        '&:hover': {
            background: "#f33075",
            boxShadow: "none",
        }
    },
    loginScreen: {
        background: "url(https://cdn1.acedms.com/photos/images/web/beta/images/dss/login-bg.png)",
        backgroundRepeat: "no-repeat",
        padding: "50px 40px 0 40px"
    },
    otpScreen: {
        padding: "50px 40px 0 40px",
        [theme.breakpoints.down('sm')]: {
            padding: "50px 20px 0 20px"
        },
        '& > p': {
            color: "#5c5c5c",
            fontWeight: '400',
            margin: 0,
            fontSize: 18,
            [theme.breakpoints.down('sm')]: {
                fontSize: 16,
            }
        },
    },
    otpInput: {
        '& .MuiOutlinedInput-input': {
            width: 65,
            height: 65,
            textAlign: "center",
            padding: 0,
            background: "#faf2f2",
            [theme.breakpoints.down('sm')]: {
                width: 55,
            },
        },
        '& .MuiOutlinedInput-root': {
            marginRight: 20,
        },
    },
    otpInputMain: {
        marginBottom: 15,
    },
    otpRecieve: {
        color: "#30343e",
        textDecoration: "none",
        display: "block",
        fontSize: 14,
    },
    resendBtn: {
        display: "block",
        color: "#f33075",
        fontSize: 14,
        fontWeight: "500",
        marginTop: 5,
    },
    changeNumber: {
        color: "#f33075",
        fontSize: 14,
        marginTop: 15,
        display: "block"
    },
    verifyOtpBtn: {
        width: "83%",
        [theme.breakpoints.down('sm')]: {
            width: "90%",
        },
    }
}));

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);


function GradePage({ open, handleClose }) {
    const classes = useStyles();
    const [message, setMessage] = useState('');

    const [text, enableButton] = useState("");

    const [phone, shopInputScreen] = useState(true);
    const [otp, showOtpScreen] = useState(false);


    const handleChange = event => {
        setMessage(event.target.value);
        console.log( "handleChange => ", message.length)
        if(event.target.value.length>9){
            enableButton(true);
        }else{
            enableButton(false);
        }
        
        console.log('value is:', event.target.value, "  L = ", event.target.value.length);
    };
    const handleClick = event => {
        alert('Hello')    
    };
    const handleChangeMobileClick = event => {
        showOtpScreen(false);
        shopInputScreen(true);    
    }
    const handleVerifyOtpClick = event => {
        console.log("handleVerifyOtpClick");  
    }
    return (
        <div className={classes.loginModalMain}>
          
          { phone && 
                    <div className={classes.loginScreen}>
                    <h4 className={classes.loginHeading}>Grade Calculator</h4>
                    <TextField onInput={(e) => {
                        e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 10)
                    }}
                    label="Enter Mobile" variant='outlined' className={classes.loginInput} type="number" fullWidth onChange={handleChange} value={message} />
                    <Button disabled={!text} variant="contained" className={classes.continueBtn} color="primary" onClick={handleClick} >Continue</Button>
                </div>
                    }

        </div>
    )
}

export default GradePage;


 