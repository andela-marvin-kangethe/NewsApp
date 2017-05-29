import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import Article from './Article';

class ArticlesList extends Component {
	constructor(props){
		super(props);
	}

  render() {
    const articlesToRead = this.props.articlesList.map((article, index) =>
      <Grid.Column>
        <div className="articleList">
          <Article
            key = { index }
            article = { article }
          />
        </div>
      </Grid.Column>
  );

    return (
      <div>
        <Grid columns="equal">
          <Grid.Row columns={3}>
            { articlesToRead }
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default ArticlesList;