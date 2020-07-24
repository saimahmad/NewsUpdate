import React from "react";
import { Card, Col, Row } from "antd";

const { Meta } = Card;

class NewsList extends React.Component {
  constructor() {
    super();
    this.state = {
      newsList: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/everything?sources=" +
        this.props.sourceId +
        "&apiKey=9f0b2b206db44fbd9fb27ca34e33c828"
    )
      .then((response) => response.json())
      .then((data) => {
        let tmp = [];
        for (var i = 0; i < data.articles.length; i++) {
          tmp.push(data.articles[i]);
        }
        this.setState({
          newsList: tmp,
        });
      });
  }

  render() {
    return (
      <div className="site-card-wrapper">
        <Row gutter={15}>
          {this.state.newsList.map((data) => (
            <Col xs={{ span: 24 }} md={{ span: 12}} xl={{ span: 8}}>
              <Card
                hoverable
                style={{ width: 320 }}
                cover={<img alt="example" src={data.urlToImage!=="null" && data.urlToImage? data.urlToImage:"https://upload.wikimedia.org/wikipedia/commons/6/6c/No_image_3x4.svg"} />}
              >
                <Meta title={data.title} description={data.publishedAt} />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default NewsList;
