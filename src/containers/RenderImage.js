import React, { Component } from 'react';

class RenderImage extends Component {
	onClickHandler = () => {
		if (!this.props.image.clicked) {
			this.props.imageClicked(this.props.image.id);
		} else {
      this.props.doubleClicked();
		}
	};
	render() {
		var cardStyle = {
			height: '250px',
			width: '250px',
		};
		return (
			<div className="card m-2">
				<img
					className="card-img-top img-thumbnail"
					style={cardStyle}
					src={this.props.image.img}
					alt="card"
					onClick={this.onClickHandler}
				/>
			</div>
		);
	}
}

export default RenderImage;
