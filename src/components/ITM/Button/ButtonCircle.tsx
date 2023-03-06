import { Button, ButtonProps, OverlayTrigger, Tooltip } from 'react-bootstrap';

export interface ButtonCircleProps extends ButtonProps {
	icon: any;
	title: string;
}

export const ButtonCircle = (props: ButtonCircleProps) => {
	let { icon, title, className, ...buttonProps } = props;
	className = 'btn-circle' + (className ? ` ${className}` : '');

	return (
		<OverlayTrigger placement="bottom" overlay={<Tooltip>{title}</Tooltip>}>
			<Button className={className} {...buttonProps}>
				{icon}
			</Button>
		</OverlayTrigger>
	);
};
