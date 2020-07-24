import React from "react";
import { Tabs } from "antd";
import NewsList from './NewsList.js'

const { TabPane } = Tabs;

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      sourceList: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/sources?language=en&apiKey=9f0b2b206db44fbd9fb27ca34e33c828"
    )
      .then((response) => response.json())
      .then((data) => {
        let tmp = [];
        for (var i = 0; i < data.sources.length; i++) {
          tmp.push(data.sources[i]);
        }
        this.setState({
          sourceList: tmp,
        });
      });
  }

  render() {
    return (
      <div>
        <Tabs>
          {this.state.sourceList.map((data) => (
            <TabPane tab={data.name} key={data.id}>
              <NewsList sourceId={data.id}></NewsList>
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}

export default Home;
