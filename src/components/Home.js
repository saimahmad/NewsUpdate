import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchSources } from '../redux'
import { Tabs } from "antd";
import NewsList from './NewsList.js'

const { TabPane } = Tabs;

// class Home extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       sourceList: [],
//     };
//   }

//   componentDidMount() {
//     fetch(
//       "https://newsapi.org/v2/sources?language=en&apiKey=9f0b2b206db44fbd9fb27ca34e33c828"
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         let tmp = [];
//         for (var i = 0; i < data.sources.length; i++) {
//           tmp.push(data.sources[i]);
//         }
//         this.setState({
//           sourceList: tmp,
//         });
//       });
//   }

//   render() {
//     return (
//       <div>
//         <Tabs>
//           {this.state.sourceList.map((data) => (
//             <TabPane tab={data.name} key={data.id}>
//               <NewsList sourceId={data.id}></NewsList>
//             </TabPane>
//           ))}
//         </Tabs>
//       </div>
//     );
//   }
// }

function Home (props) {
  useEffect(() => {
    props.fetchSources()
  }, [])
  return props.sourceList.loading ? (
    <h2>Loading</h2>
  ) : props.sourceList.error ? (
    <h2>{props.sourceList.error}</h2>
  ) : (
         <div>
        <Tabs>
          {props.sourceList.sources.map((data) => (
            <TabPane tab={data.name} key={data.id}>
              <NewsList sourceId={data.id}></NewsList>
            </TabPane>
          ))}
        </Tabs>
      </div>
  )
}

const mapStateToProps = state => {
  return {
    sourceList: state.newsSource
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSources: () => dispatch(fetchSources())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
