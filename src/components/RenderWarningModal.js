import React, { Component } from 'react';
import { Modal, Effect } from 'react-dynamic-modal';

class RenderWarningModal extends Component {
	render() {
		const { text, onRequestClose } = this.props;
		return (
			<Modal onRequestClose={onRequestClose} effect={Effect.FlipVertical3D}>
				<div className="text-center p-2">
					<h1>Baited</h1>
					<h2>{text}</h2>
					<h5>Click anywhere on screen to continue</h5>
				</div>
			</Modal>
		);
	}
}

export default RenderWarningModal;
