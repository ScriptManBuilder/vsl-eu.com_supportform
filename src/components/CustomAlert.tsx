import React from 'react';
import {
  AlertOverlay,
  AlertBox,
  AlertIcon,
  AlertTitle,
  AlertMessage,
  AlertButton,
} from './CustomAlert.styles';

interface CustomAlertProps {
  type: 'success' | 'error';
  title: string;
  message: string;
  onClose: () => void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({ type, title, message, onClose }) => {
  return (
    <AlertOverlay onClick={onClose}>
      <AlertBox onClick={(e) => e.stopPropagation()}>
        <AlertIcon type={type}>
          {type === 'success' ? (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 8V12M12 16H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </AlertIcon>
        <AlertTitle>{title}</AlertTitle>
        <AlertMessage>{message}</AlertMessage>
        <AlertButton onClick={onClose}>OK</AlertButton>
      </AlertBox>
    </AlertOverlay>
  );
};

export default CustomAlert;
