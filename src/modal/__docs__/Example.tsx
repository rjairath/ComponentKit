import React, { useState } from "react";
import { Button } from '../../button';
import Modal, { ModalProps } from '../Modal';

const Example: React.FC<ModalProps> = ({
	headerTitle,
	contentChildren,
	footer
}) => {
	const [isOpen, setIsOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const buttonText = "Open Modal";
	const buttonSize = "small";


    const handleAsyncOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setIsOpen(false); 
            setConfirmLoading(false);
        }, 2000);
    }

	const renderFooter = () => {
		if(footer) {
			return footer;
		} 
		if(headerTitle === 'Async Modal') {
			return (
				<div>
					<Button
						handleClick={handleAsyncOk}
						text="OK"
						size="small"
						primary={true}
						confirmLoading={confirmLoading}
					/>
				</div>
			);
		}
	}

	return (
		<>
			<Button
				size={buttonSize}
				text={buttonText}
				handleClick={() => setIsOpen(true)}
				primary={true}
			/>
			<Modal
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				headerTitle={headerTitle}
				contentChildren={contentChildren}
				footer={renderFooter()}
			/>
		</>
	);
};

export default Example;
