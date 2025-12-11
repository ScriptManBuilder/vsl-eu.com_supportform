import styled from 'styled-components';

// Breakpoints
const breakpoints = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 100%);
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;

  /* Минималистичный размытый круг сверху */
  &::before {
    content: '';
    position: absolute;
    width: 700px;
    height: 700px;
    background: radial-gradient(circle, rgba(66, 133, 244, 0.08) 0%, transparent 70%);
    border-radius: 50%;
    top: -250px;
    right: -250px;
    filter: blur(100px);
    animation: floatSlow 30s ease-in-out infinite;
  }

  /* Минималистичный размытый круг снизу */
  &::after {
    content: '';
    position: absolute;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(138, 180, 248, 0.06) 0%, transparent 70%);
    border-radius: 50%;
    bottom: -200px;
    left: -200px;
    filter: blur(90px);
    animation: floatSlow 25s ease-in-out infinite reverse;
  }

  @keyframes floatSlow {
    0%, 100% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(30px, 30px);
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 16px;

    &::before {
      width: 500px;
      height: 500px;
      filter: blur(80px);
    }

    &::after {
      width: 450px;
      height: 450px;
      filter: blur(70px);
    }
  }

  @media (max-width: ${breakpoints.mobileL}) {
    padding: 10px;

    &::before {
      width: 350px;
      height: 350px;
      filter: blur(60px);
    }

    &::after {
      width: 300px;
      height: 300px;
      filter: blur(50px);
    }
  }

  @media (max-width: ${breakpoints.mobileM}) {
    padding: 8px;
  }

  @media (max-width: ${breakpoints.mobileS}) {
    padding: 6px;
  }
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 30px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 24px;
  }

  @media (max-width: ${breakpoints.mobileL}) {
    margin-bottom: 16px;
  }

  @media (max-width: ${breakpoints.mobileM}) {
    margin-bottom: 12px;
  }

  @media (max-width: ${breakpoints.mobileS}) {
    margin-bottom: 10px;
  }
`;

export const IconWrapper = styled.div`
  width: 72px;
  height: 72px;
  background: linear-gradient(135deg, #4285f4 0%, #5a9afc 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  box-shadow: 0 8px 24px rgba(66, 133, 244, 0.25);

  @media (max-width: ${breakpoints.tablet}) {
    width: 64px;
    height: 64px;
    margin-bottom: 20px;
  }

  @media (max-width: ${breakpoints.mobileL}) {
    width: 52px;
    height: 52px;
    margin-bottom: 14px;
    border-radius: 12px;
  }

  @media (max-width: ${breakpoints.mobileM}) {
    width: 48px;
    height: 48px;
    margin-bottom: 12px;
    border-radius: 10px;
  }

  @media (max-width: ${breakpoints.mobileS}) {
    width: 44px;
    height: 44px;
    margin-bottom: 10px;
  }
`;

export const Icon = styled.svg`
  width: 36px;
  height: 36px;
  color: white;

  @media (max-width: ${breakpoints.tablet}) {
    width: 32px;
    height: 32px;
  }

  @media (max-width: ${breakpoints.mobileL}) {
    width: 26px;
    height: 26px;
  }

  @media (max-width: ${breakpoints.mobileM}) {
    width: 24px;
    height: 24px;
  }

  @media (max-width: ${breakpoints.mobileS}) {
    width: 22px;
    height: 22px;
  }
`;

export const MainTitle = styled.h1`
  color: #1a1a2e;
  font-size: 32px;
  margin-bottom: 12px;
  font-weight: 700;
  letter-spacing: -0.5px;

  @media (max-width: ${breakpoints.laptop}) {
    font-size: 28px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 26px;
  }

  @media (max-width: ${breakpoints.mobileL}) {
    font-size: 22px;
    margin-bottom: 8px;
    letter-spacing: -0.3px;
  }

  @media (max-width: ${breakpoints.mobileM}) {
    font-size: 20px;
    margin-bottom: 6px;
  }

  @media (max-width: ${breakpoints.mobileS}) {
    font-size: 18px;
    line-height: 1.3;
  }
`;

export const Subtitle = styled.p`
  color: #6b7280;
  font-size: 16px;
  margin-bottom: 24px;
  line-height: 1.6;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 15px;
    margin-bottom: 20px;
  }

  @media (max-width: ${breakpoints.mobileL}) {
    font-size: 13px;
    margin-bottom: 14px;
    line-height: 1.5;
  }

  @media (max-width: ${breakpoints.mobileM}) {
    font-size: 12px;
    margin-bottom: 12px;
    line-height: 1.4;
  }

  @media (max-width: ${breakpoints.mobileS}) {
    font-size: 11px;
    margin-bottom: 10px;
  }
`;

export const BadgesWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 32px;

  @media (max-width: ${breakpoints.tablet}) {
    gap: 10px;
    margin-bottom: 28px;
  }

  @media (max-width: ${breakpoints.mobileL}) {
    gap: 6px;
    margin-bottom: 16px;
  }

  @media (max-width: ${breakpoints.mobileM}) {
    gap: 5px;
    margin-bottom: 14px;
  }

  @media (max-width: ${breakpoints.mobileS}) {
    gap: 4px;
    margin-bottom: 12px;
  }
`;

export const Badge = styled.div<{ color: string }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: ${props => props.color === 'blue' ? '#e8f2ff' : '#e7f7f0'};
  color: ${props => props.color === 'blue' ? '#1967d2' : '#137752'};
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 7px 14px;
    font-size: 13px;
    gap: 5px;
  }

  @media (max-width: ${breakpoints.mobileL}) {
    padding: 5px 10px;
    font-size: 11px;
    gap: 4px;
    border-radius: 16px;
  }

  @media (max-width: ${breakpoints.mobileM}) {
    padding: 4px 8px;
    font-size: 10px;
    gap: 3px;
  }

  @media (max-width: ${breakpoints.mobileS}) {
    padding: 3px 7px;
    font-size: 9px;
    gap: 2px;
  }

  svg {
    @media (max-width: ${breakpoints.mobileL}) {
      width: 12px;
      height: 12px;
    }

    @media (max-width: ${breakpoints.mobileM}) {
      width: 10px;
      height: 10px;
    }

    @media (max-width: ${breakpoints.mobileS}) {
      width: 9px;
      height: 9px;
    }
  }
`;

export const FormWrapper = styled.div`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  padding: 48px;
  border-radius: 16px;
  box-shadow: 
    0 0 60px rgba(66, 133, 244, 0.15),
    0 8px 32px rgba(0, 0, 0, 0.04),
    0 1px 2px rgba(0, 0, 0, 0.06);
  width: 100%;
  max-width: 680px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  position: relative;
  z-index: 1;

  @media (max-width: ${breakpoints.laptop}) {
    padding: 40px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 28px;
    border-radius: 12px;
    box-shadow: 
      0 0 50px rgba(66, 133, 244, 0.12),
      0 8px 32px rgba(0, 0, 0, 0.04);
  }

  @media (max-width: ${breakpoints.mobileL}) {
    padding: 16px;
    border-radius: 10px;
    box-shadow: 
      0 0 40px rgba(66, 133, 244, 0.1),
      0 4px 16px rgba(0, 0, 0, 0.04);
  }

  @media (max-width: ${breakpoints.mobileM}) {
    padding: 14px;
    border-radius: 8px;
  }

  @media (max-width: ${breakpoints.mobileS}) {
    padding: 12px;
    border-radius: 8px;
  }
`;

export const SectionTitle = styled.h2`
  color: #1a1a2e;
  font-size: 24px;
  margin-bottom: 8px;
  font-weight: 600;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 22px;
  }

  @media (max-width: ${breakpoints.mobileL}) {
    font-size: 18px;
    margin-bottom: 6px;
  }

  @media (max-width: ${breakpoints.mobileM}) {
    font-size: 16px;
    margin-bottom: 4px;
  }

  @media (max-width: ${breakpoints.mobileS}) {
    font-size: 15px;
  }
`;

export const SectionDescription = styled.p`
  color: #6b7280;
  font-size: 15px;
  margin-bottom: 32px;
  line-height: 1.5;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
    margin-bottom: 28px;
  }

  @media (max-width: ${breakpoints.mobileL}) {
    font-size: 12px;
    margin-bottom: 18px;
    line-height: 1.4;
  }

  @media (max-width: ${breakpoints.mobileM}) {
    font-size: 11px;
    margin-bottom: 14px;
  }

  @media (max-width: ${breakpoints.mobileS}) {
    font-size: 10px;
    margin-bottom: 12px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: ${breakpoints.tablet}) {
    gap: 20px;
  }

  @media (max-width: ${breakpoints.mobileL}) {
    gap: 14px;
  }

  @media (max-width: ${breakpoints.mobileM}) {
    gap: 12px;
  }

  @media (max-width: ${breakpoints.mobileS}) {
    gap: 10px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: ${breakpoints.mobileL}) {
    gap: 5px;
  }

  @media (max-width: ${breakpoints.mobileM}) {
    gap: 4px;
  }
`;

export const Label = styled.label`
  color: #1a1a2e;
  font-size: 14px;
  font-weight: 600;

  @media (max-width: ${breakpoints.mobileL}) {
    font-size: 12px;
  }

  @media (max-width: ${breakpoints.mobileM}) {
    font-size: 11px;
  }

  @media (max-width: ${breakpoints.mobileS}) {
    font-size: 10px;
  }
`;

export const Input = styled.input`
  padding: 14px 16px;
  font-size: 15px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  transition: all 0.2s ease;
  outline: none;
  background: white;
  font-family: inherit;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 12px 14px;
    font-size: 14px;
  }

  @media (max-width: ${breakpoints.mobileL}) {
    padding: 10px 10px;
    font-size: 13px;
    border-radius: 6px;
  }

  @media (max-width: ${breakpoints.mobileM}) {
    padding: 9px 9px;
    font-size: 12px;
  }

  @media (max-width: ${breakpoints.mobileS}) {
    padding: 8px 8px;
    font-size: 11px;
  }

  &:hover {
    border-color: #9ca3af;
  }

  &:focus {
    border-color: #4285f4;
    box-shadow: 0 0 0 3px rgba(66, 133, 244, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

export const TextArea = styled.textarea`
  padding: 14px 16px;
  font-size: 15px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  transition: all 0.2s ease;
  outline: none;
  background: white;
  font-family: inherit;
  resize: vertical;
  min-height: 140px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 12px 14px;
    font-size: 14px;
    min-height: 120px;
  }

  @media (max-width: ${breakpoints.mobileL}) {
    padding: 10px 10px;
    font-size: 13px;
    min-height: 100px;
    border-radius: 6px;
  }

  @media (max-width: ${breakpoints.mobileM}) {
    padding: 9px 9px;
    font-size: 12px;
    min-height: 90px;
  }

  @media (max-width: ${breakpoints.mobileS}) {
    padding: 8px 8px;
    font-size: 11px;
    min-height: 80px;
  }

  &:hover {
    border-color: #9ca3af;
  }

  &:focus {
    border-color: #4285f4;
    box-shadow: 0 0 0 3px rgba(66, 133, 244, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

export const Button = styled.button`
  background: #4285f4;
  color: white;
  padding: 16px 32px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 8px;
  box-shadow: 0 2px 8px rgba(66, 133, 244, 0.25);

  @media (max-width: ${breakpoints.tablet}) {
    padding: 14px 28px;
    font-size: 15px;
  }

  @media (max-width: ${breakpoints.mobileL}) {
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 6px;
    margin-top: 4px;
  }

  @media (max-width: ${breakpoints.mobileM}) {
    padding: 11px 18px;
    font-size: 13px;
    margin-top: 2px;
  }

  @media (max-width: ${breakpoints.mobileS}) {
    padding: 10px 16px;
    font-size: 12px;
  }

  &:hover {
    background: #1967d2;
    box-shadow: 0 4px 12px rgba(66, 133, 244, 0.35);
    transform: translateY(-1px);

    @media (max-width: ${breakpoints.mobileL}) {
      transform: none;
    }
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 24px;
  color: #137752;
  font-size: 14px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 20px;
    font-size: 13px;
    gap: 6px;
  }

  @media (max-width: ${breakpoints.mobileL}) {
    margin-top: 14px;
    font-size: 11px;
    gap: 5px;
  }

  @media (max-width: ${breakpoints.mobileM}) {
    margin-top: 12px;
    font-size: 10px;
    gap: 4px;
  }

  @media (max-width: ${breakpoints.mobileS}) {
    font-size: 9px;
    margin-top: 10px;
  }
`;

export const CheckIcon = styled.svg`
  width: 20px;
  height: 20px;
  color: #137752;
  flex-shrink: 0;

  @media (max-width: ${breakpoints.mobileL}) {
    width: 16px;
    height: 16px;
  }

  @media (max-width: ${breakpoints.mobileM}) {
    width: 14px;
    height: 14px;
  }

  @media (max-width: ${breakpoints.mobileS}) {
    width: 12px;
    height: 12px;
  }
`;
