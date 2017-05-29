import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class Article extends Component {
  constructor(props){
    super(props);

    this.state = {
      likes: 0
    };
    
    // this.handleArticleClick = this.handleArticleClick.bind(this);
    // this.handleLikeButton = this.handleLikeButton.bind(this);
  }

  // handleArticleClick = (e) => {
  //   e.preventDefault();
  //   this.props.handleArticleURL(this.props.article.url);
  // }

  // handleLikeButton =(e) => {
  //   /*
  //   * Check if the user is the same and disable the like button if pressed. 
  //   */
  //   this.setState({
  //    likes: this.state.likes +1, 
  //   })
  // }

  render() {
    return (
      <div className="demo-card-wide mdl-card mdl-shadow--2dp">
        <div className="mdl-card__media">
          <img
            className="articleImage" 
            src={ this.props.article.urlToImage } />
        </div>
        <div className="mdl-card__supporting-text ">
          { this.props.article.description }
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <a
          href ={ this.props.article.url }
          target="_blank"
          className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
          >
            Read More
          </a>
          <Button
            onClick ={ this.handleLikeButton }
            floated = "right"
            color='green'
            content='Like'
            icon='heart'
            label={{ 
              basic: true,
              color: 'green', 
              pointing: 'left',
              content: this.state.likes  
            }}
          />
        </div>
        
      </div>
    );
  }
}

export default Article;