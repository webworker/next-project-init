import React from 'react';
import styled from '@emotion/styled';

const Button = styled.button`
  display: block;
  color: red;
`;

export default class IndexPage extends React.Component {
  state = {
    title: 'Hello Next.js',
  };

  timeID: number = NaN;

  componentWillUnmount = () => {
    window.clearInterval(this.timeID);
  };

  componentDidMount = () => {
    this.timeID = window.setInterval(() => this.tick(), 1000);
  };

  handleClick = () => {
    const { title } = this.state;
    this.setState({ title: [...title].reverse().join('') });
  };

  tick = () => {
    this.handleClick();
  };

  render() {
    const { title } = this.state;

    return (
      <div>
        <h1 className="title">
          这里是H1标签，Nicholas, <span>HHHHH</span>
        </h1>
        <Button className="button" type="button" onClick={this.handleClick}>
          Index Page: {title}
        </Button>
        <style jsx>{`
          .title {
            color: blue;
            text-align: center;

            span {
              color: #f00;
            }
          }
        `}</style>
      </div>
    );
  }
}
