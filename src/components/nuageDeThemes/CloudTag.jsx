import React, { Component } from "react";

import { USER_API, MAP21_URL, ViewpointIDs } from "../Constants";
import "./CloudTag.css";

class CloudTag extends Component {
  state = {
    tagcloudb: {},
    tagc: [],
    tags: null,
  };
  normalize(obj) {
    if (!obj.rows) return obj;
    var rows = obj.rows;
    var result = {};
    for (var i = 0; i < rows.length; i++) {
      var r = rows[i];
      var keys = r.key;
      var current = result;
      for (var k = 0; k < keys.length; k++) {
        if (!current[keys[k]]) current[keys[k]] = {};
        current = current[keys[k]];
      }
      var value = r.value;
      for (var attribute in value) {
        if (!current[attribute]) current[attribute] = [];
        current[attribute].push(value[attribute]);
      }
    }
    return result;
  }
  updateTagCloud(viewpoint) {
    var tagcloud = {};
    viewpoint = this.normalize(viewpoint);
    var viewpointID;
    for (viewpointID in viewpoint) break;
    if (!viewpointID) return;
    viewpoint = viewpoint[viewpointID];
    viewpoint.id = viewpointID;
    //Generate tag cloud
    for (var topicID in viewpoint) {
      if (viewpoint[topicID].name) {
        var topicName = viewpoint[topicID].name;
        if (!(topicName in tagcloud))
          tagcloud[topicName] = { topics: [], size: 0 };
        tagcloud[topicName].topics.push({
          viewpointID: viewpoint.id,
          topicID: topicID,
        });
        tagcloud[topicName].size +=
          viewpoint[topicID].item && viewpoint[topicID].item.length > 0
            ? viewpoint[topicID].item.length
            : 0;
        tagcloud[topicName].url =
          MAP21_URL + "#" + USER_API + "topic/" + viewpoint.id + "/" + topicID;
        tagcloud[topicName].name = topicName[0];
        tagcloud[topicName].topicID = topicID;
      }
    }
    var t = [];
    for (var tagname in tagcloud) {
      t.push({
        key: tagcloud[tagname].topicID,
        name: tagcloud[tagname].name,
        size: tagcloud[tagname].size,
        url: tagcloud[tagname].url,
      });
    }
    const res = t.reduce((acc, current) => {
      const x = acc.find((item) => item.name === current.name);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);

    this.setState(function (prevState, props) {
      var joined = prevState.tagc.concat(res);
      return { tagc: joined };
    });
  }
  abortController = new AbortController();
  componentDidMount() {
    document.title = "Topic map";

    ViewpointIDs.map(async (viewpointID) => {
      await fetch(USER_API + "viewpoint/" + viewpointID, {
        signal: this.abortController.signal,
      })
        .then((results) => results.json())
        .then((data) => {
          this.updateTagCloud(data);
        })
        .catch((err) => {
          if (err.name === "AbortError") return;
          throw err;
        });
    });

    setInterval(() => {
      this.forceUpdate();
    }, 5000);
  }

  componentWillUnmount() {
    this.abortController.abort();
  }

  render() {
    const tags = [];
    var max = 0;
    var min = 32768;
    //const uniq = new Set(this.state.tagc.map(e => JSON.stringify(e)));

    const myData = []
      .concat(this.state.tagc)
      .sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));

    // eslint-disable-next-line
    myData.map((viewpoint) => {
      var fs1 = viewpoint["size"];
      if (fs1 > max) max = fs1;
      if (fs1 < min) min = fs1;
    });

    myData.map((viewpoint, idx) => {
      var fs = viewpoint["size"];
      var name = viewpoint["name"];

      var url = viewpoint["url"];
      if (fs > 0) {
        fs = Math.round(((fs - min) / (max - min)) * 12) + 14;
        tags.push(
          <a key={viewpoint["key"]} style={{ fontSize: fs }} href={url}>
            {name}
          </a>
        );
      }
    });
    return <div className="cloudtags">{tags}</div>;
  }
}

export default CloudTag;
