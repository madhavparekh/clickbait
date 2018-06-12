import React, { Component } from 'react';
import './App.css';

import RenderImage from './containers/RenderImage';
import images from './images.json';

class App extends Component {
	state = {
		images,
		guessedText: 'Click an image to being!',
		guessed: true,
		clicked: false,
		score: 0,
		topScore: 0,
	};

	onImageClicked = (id) => {
		this.setState({
			images: this.state.images
				.filter((e) => {
					if (e.id === id) {
						e.clicked = true;
						return e;
					} else {
						return e;
					}
				})
				.sort(() => Math.random() - 0.5),
			score: this.state.score + 1,
			guessedText: 'You guessed it correctly!',
		});
	};

	doubleClicked = () => {
		this.setState({
			images: this.state.images.filter((e) => {
				e.clicked = false;
				return e;
			}),
			guessedText: 'You guessed it incorrectly!',
			topScore:
				this.state.topScore < this.state.score
					? this.state.score
					: this.state.topScore,
			score: 0,
		});
	};

	render() {
		return (
			<div>
				<nav className="navbar sticky-top navbar-dark bg-dark m-auto">
					<div className="container">
						<span className="navbar-brand mb-0">
							<h1>Clickbait</h1>
						</span>
						<span className="navbar-brand mb-0">
							<h2>{this.state.guessedText}</h2>
						</span>
						<span className="navbar-brand mb-0">
							<h2>
								Score: {this.state.score} | Top Score: {this.state.topScore}
							</h2>
						</span>
					</div>
				</nav>
				<div className="jumbotron m-auto text-center">
					<h1 className="display-4">Game of Click & Bait!</h1>
					<p className="lead">
						Click on an image to earn points, but don't click on any more than
						once!
					</p>
				</div>
				<div className="container d-flex flex-wrap justify-content-around mt-2">
					{this.state.images.map((e, i) => (
						<RenderImage
							key={i}
							image={e}
							imageClicked={this.onImageClicked}
							doubleClicked={this.doubleClicked}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default App;
