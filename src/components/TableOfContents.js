import React from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw';

class TableOfContents extends React.Component {
    state = {
      myGithubBlogReadme: '',
    };
  
    componentDidMount() {
      this.getMyGitHubBlogReadme();
    }
  
    getMyGitHubBlogReadme() {
      axios
        .get('https://raw.githubusercontent.com/qingquan-li/blog/master/README.md')
        .then(res => {
          this.setState({ myGithubBlogReadme: res.data });
        })
        .catch(err => {
          console.log(err);
        });
    }

    render() {
      return (
        <div>
          <ReactMarkdown
            children={this.state.myGithubBlogReadme}
            rehypePlugins={[remarkGfm, rehypeRaw]}
          />
        </div>
      );
    }
  }

export default TableOfContents;
