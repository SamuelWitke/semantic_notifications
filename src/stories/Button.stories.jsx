import React from 'react';
import { Button } from './Button';
import { useNotifications } from '../index'
import {  Notifications } from '../index'


export default {
  title: 'Example/Send Messages',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => {
  const { label, typeButton} = args
  const {showSuccess, showError, showInfo, showWarning} = useNotifications()

  const showSuccessClick = () => showSuccess({ title: label, content: label})
  const showInfoClick = () => showInfo({ title: label, content: label})
  const showErrorClick = () => showError({ title: label, content: label})
  const showWarningClick = () => showWarning({ title: label, content: label})

  let onClick;
  switch(typeButton){
    case "success": {
      onClick = showSuccessClick 
      break;
    }
    case "info": {
      onClick = showInfoClick
      break;
    }
    case "error": {
      onClick = showErrorClick 
      break;
    }
    default: {
      onClick = showWarningClick 
 
    }
  }
  return(
    <>
    <Notifications/>
    <Button onClick={onClick} {...args} />
  </>
  )
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Send Success',
  typeButton: 'success'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Send Info',
  typeButton: 'info'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Error',
  typeButton: 'error'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Warning',
  typeButton: "warning"
};
