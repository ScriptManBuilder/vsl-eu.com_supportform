import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const AlertOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: ${fadeIn} 0.3s ease-out;
  padding: 20px;
`;

export const AlertBox = styled.div`
  background: white;
  border-radius: 16px;
  padding: 32px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: ${slideIn} 0.3s ease-out;
  text-align: center;

  @media (max-width: 425px) {
    padding: 24px;
    max-width: 90%;
  }
`;

export const AlertIcon = styled.div<{ type: 'success' | 'error' }>`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: ${props => props.type === 'success' 
    ? 'linear-gradient(135deg, #34d399 0%, #10b981 100%)'
    : 'linear-gradient(135deg, #f87171 0%, #ef4444 100%)'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  box-shadow: 0 8px 24px ${props => props.type === 'success' 
    ? 'rgba(16, 185, 129, 0.3)'
    : 'rgba(239, 68, 68, 0.3)'};

  svg {
    width: 32px;
    height: 32px;
    color: white;
  }

  @media (max-width: 425px) {
    width: 56px;
    height: 56px;

    svg {
      width: 28px;
      height: 28px;
    }
  }
`;

export const AlertTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 12px;
  line-height: 1.3;

  @media (max-width: 425px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

export const AlertMessage = styled.p`
  font-size: 16px;
  color: #6b7280;
  margin-bottom: 24px;
  line-height: 1.6;

  @media (max-width: 425px) {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

export const AlertButton = styled.button`
  background: linear-gradient(135deg, #4285f4 0%, #1967d2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 32px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(66, 133, 244, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(66, 133, 244, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 425px) {
    width: 100%;
    padding: 12px 24px;
    font-size: 15px;
  }
`;
