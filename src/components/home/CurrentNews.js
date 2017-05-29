import React, { Component } from 'react';
import ArticlesList from './ArticlesList';
import Footer from './../common/Footer';

class CurrentNews extends React.Component {
	constructor(props){
		super(props);

	}

	// handleURLClick = (sourceName, event) => {
	// 	event.preventDefault();
	// 	this.props.handleSourceClick(
	// 		this.props.articlesURL,
	// 		this.props.sourceList,
	// 		"&source="+sourceName
	// 	);
	// }
	
  render() {
		let articleSources = this.props.sourceList[0].sources.map((source, index) => 
			<div key={index}>
				<a
					className="mdl-navigation__link"
					href={ '/'+source.id }
				>
					{ source.name }
				</a>
				<br />
			</div>
		);

    return (
			<div className="mdl-layout mdl-js-layout">
				<div className="mdl-layout__drawer">
					<span className="mdl-layout-title">Sources</span>
						<div className="sourcePage">
							<nav className="mdl-navigation">
								{ articleSources }
							</nav>		
						</div>
				</div>
				<main className="mdl-layout__content extra">
					<div className="page-content">
						<div className="articlesPage">
              <ArticlesList
								articlesList={ this.props.currentArticles[0].articles }
							/>
						</div>
					<Footer />
				</div>
			</main>
		</div>
    );
  }
}

export default CurrentNews;