import React, { useEffect, useRef } from "react";
import { createPortal } from 'react-dom';
import styled, { DefaultTheme, useTheme } from "styled-components";

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    headerTitle?: string;
    contentChildren?: React.ReactNode;
    footer?: React.ReactNode;
}

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    font-family: ${props => props.theme.fonts.base};
    background: white;
    border-radius: 8px;
    padding: 20px;
    width: 500px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    position: relative;
`;

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 800;
`;

const CloseButton = styled.button`
    border: none;
    background: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    margin-left: auto;
`;

const Footer = styled.footer`
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
`;

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    headerTitle,
    contentChildren,
    footer
}) => {
    const theme = useTheme();
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    
    if(!isOpen) {
        return null;
    }

    return createPortal(
        <Overlay theme={theme}>
            <ModalContent ref={modalRef}>
                <Header>
                    {headerTitle && <span>{headerTitle}</span>}
                    <CloseButton onClick={onClose}>X</CloseButton>
                </Header>
                <div>{contentChildren}</div>
                {footer && <Footer>{footer}</Footer>}
            </ModalContent>
        </Overlay>,
        document.body
    )
}

export default Modal