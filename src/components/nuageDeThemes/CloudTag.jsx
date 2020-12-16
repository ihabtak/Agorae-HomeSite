import React, { Component } from "react";
import Hypertopic from "hypertopic";
import { USER_API, MAP21_URL, ViewpointIDs, ViewpointCC } from "../Constants";
import "./CloudTag.css";
import { SolarSystemLoading } from "react-loadingg";

let db = new Hypertopic([USER_API]);

class CloudTag extends Component {
  state = {
    tagcc: [],
    tagc: [],
    tr1: [],
    tr2: [],
    r1: {},
    r2: {},
    ccIsLoading: true,
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
  updateList(viewpointId, topicId, topicName, nb) {
    if (this.ismounted) {
      var r1List = this.state.r1;
      var r2List = this.state.r2;
      if (nb === 1) {
        if (!(topicName in r1List)) {
          r1List[topicName] = { topics: [], size: 0 };
          r1List[topicName].topics.push({
            viewpointID: viewpointId,
            topicID: topicId,
          });
          r1List[topicName].url =
            MAP21_URL + "#" + USER_API + "topic/" + viewpointId + "/" + topicId;
          r1List[topicName].name = topicName;
          r1List[topicName].topicID = topicId;
        } else {
          r1List[topicName].size += 1;
        }
      } else if (topicName in r1List) {
        r1List[topicName].size += 1;
      }

      if (!(topicName in r2List)) {
        r2List[topicName] = { topics: [], size: 0 };
        r2List[topicName].topics.push({
          viewpointID: viewpointId,
          topicID: topicId,
        });
        r2List[topicName].url =
          MAP21_URL + "#" + USER_API + "topic/" + viewpointId + "/" + topicId;
        r2List[topicName].name = topicName;
        r2List[topicName].topicID = topicId;
      } else {
        r2List[topicName].size += 1;
      }

      this.setState({
        r1: r1List,
        r2: r2List,
      });
      this.updateCcList();
    }
  }
  updateCCloud(item) {
    if (this.ismounted) {
      var itemList = {};
      if (item.topic && this.ismounted) {
        var topics = item.topic;

        topics.map(async (topic, idx) => {
          var topicData = await db.getView(
            "topic/" + topic.viewpoint + "/" + topic.id
          );

          var topicOb = this.normalize(topicData);

          var topicName = topicOb[topic.viewpoint][topic.id].name[0];
          this.updateList(topic.viewpoint, topic.id, topicName, 1);
          var narrower = topicOb[topic.viewpoint][topic.id].narrower;
          var items = topicOb[topic.viewpoint][topic.id].item;
          if (narrower && this.ismounted) {
            if (narrower.length > 0) {
              // eslint-disable-next-line
              narrower.map((childTopic) => {
                this.updateList(
                  topic.viewpoint,
                  childTopic.id,
                  childTopic.name,
                  1
                );
              });
            }
          }

          if (items.length > 0 && this.ismounted) {
            items.map(async (item) => {
              var itemUrl = "item/" + item.corpus + "/" + item.id;
              if (!(itemUrl in itemList)) {
                itemList[itemUrl] = { size: 1 };
                var itemData = await db.getView(itemUrl);
                itemData = this.normalize(itemData);
                itemData = itemData[item.corpus][item.id];
                if (itemData.topic && this.ismounted) {
                  var topics1 = itemData.topic;

                  topics1.map(async (topic, idx) => {
                    var topicData1 = await db.getView(
                      "topic/" + topic.viewpoint + "/" + topic.id
                    );

                    var topicOb1 = this.normalize(topicData1);

                    if (
                      !(topicOb1[topic.viewpoint][topic.id].name === undefined)
                    ) {
                      var topicName1 =
                        topicOb1[topic.viewpoint][topic.id].name[0];
                      this.updateList(topic.viewpoint, topic.id, topicName1, 1);
                      var narrower1 =
                        topicOb1[topic.viewpoint][topic.id].narrower;
                      var items1 = topicOb1[topic.viewpoint][topic.id].item;
                      if (narrower1 && this.ismounted) {
                        if (narrower1.length > 0) {
                          // eslint-disable-next-line
                          narrower1.map((childTopic) => {
                            this.updateList(
                              topic.viewpoint,
                              childTopic.id,
                              childTopic.name,
                              2
                            );
                          });
                        }
                      }

                      if (items1.length > 0 && this.ismounted) {
                        items1.map(async (item) => {
                          var itemUrl1 = "item/" + item.corpus + "/" + item.id;
                          if (!(itemUrl1 in itemList)) {
                            itemList[itemUrl1] = { size: 1 };
                            var itemData1 = await db.getView(itemUrl1);
                            itemData1 = this.normalize(itemData1);
                            itemData1 = itemData1[item.corpus][item.id];
                            if (itemData1.topic && this.ismounted) {
                              var topics2 = itemData1.topic;
                              topics2.map(async (topic, idx) => {
                                var topicData2 = await db.getView(
                                  "topic/" + topic.viewpoint + "/" + topic.id
                                );

                                var topicOb2 = this.normalize(topicData2);
                                if (
                                  !(
                                    topicOb2[topic.viewpoint][topic.id].name ===
                                    undefined
                                  )
                                ) {
                                  var topicName2 =
                                    topicOb2[topic.viewpoint][topic.id].name[0];
                                  this.updateList(
                                    topic.viewpoint,
                                    topic.id,
                                    topicName2,
                                    2
                                  );
                                  var narrower2 =
                                    topicOb2[topic.viewpoint][topic.id]
                                      .narrower;
                                  if (narrower2 && this.ismounted) {
                                    if (narrower2.length > 0) {
                                      // eslint-disable-next-line
                                      narrower2.map((childTopic) => {
                                        this.updateList(
                                          topic.viewpoint,
                                          childTopic.id,
                                          childTopic.name,
                                          2
                                        );
                                      });
                                    }
                                  }
                                }
                              });
                            }
                          }
                        });
                      }
                    }
                  });
                }
              }
            });
          }
        });
      }
    }
  }
  updateTagCloud(viewpoint, cloudtype) {
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
    if (cloudtype === "c") {
      this.setState(function (prevState, props) {
        var joined = prevState.tagc.concat(res);
        return { tagc: joined };
      });
    }
    if (cloudtype === "cc") {
      this.setState(function (prevState, props) {
        var joined = prevState.tagcc.concat(res);
        return { tagcc: joined };
      });
    }
  }
  updateCcList() {
    if (this.ismounted) {
      var r1List = this.state.r1;
      var r2List = this.state.r2;
      var t1 = [];
      var t2 = [];
      for (var tName in r1List) {
        t1.push({
          key: r1List[tName].topicID,
          name: r1List[tName].name,
          size: r1List[tName].size,
          url: r1List[tName].url,
        });
      }
      for (var tName1 in r2List) {
        t2.push({
          key: r2List[tName1].topicID,
          name: r2List[tName1].name,
          size: r2List[tName1].size,
          url: r2List[tName1].url,
        });
      }

      var topicList = this.state.tagcc;
      var newR1 = [];
      var newR2 = [];
      for (var i = 0, len = topicList.length; i < len; i++) {
        for (var j = 0, len2 = t1.length; j < len2; j++) {
          if (topicList[i].key === t1[j].key) {
            newR1.push(t1[j]);
            break;
          }
        }
        for (var z = 0, len3 = t2.length; z < len3; z++) {
          if (topicList[i].key === t2[z].key) {
            newR2.push(t2[z]);
            break;
          }
        }
      }
      this.setState({
        tr1: newR1,
        tr2: newR2,
      });
      setTimeout(() => {
        this.setState({
          ccIsLoading: false,
        });
      }, 6000);
    }
  }
  abortController = new AbortController();
  ismounted = false;
  componentDidMount() {
    this.ismounted = true;
    if (this.ismounted) {
      if (this.props.cc) {
        ViewpointCC.map(async (viewpointID) => {
          await fetch(USER_API + "viewpoint/" + viewpointID, {
            signal: this.abortController.signal,
          })
            .then((results) => results.json())
            .then((data) => {
              this.updateTagCloud(data, "cc");
            })
            .catch((err) => {
              if (err.name === "AbortError") return;
              throw err;
            });
        });
      }
      if (this.props.item) {
        this.updateCCloud(this.props.item);
      }

      if (!this.props.cc) {
        document.title = "Topic map";
        ViewpointIDs.map(async (viewpointID) => {
          await fetch(USER_API + "viewpoint/" + viewpointID, {
            signal: this.abortController.signal,
          })
            .then((results) => results.json())
            .then((data) => {
              this.updateTagCloud(data, "c");
            })
            .catch((err) => {
              if (err.name === "AbortError") return;
              throw err;
            });
        });
      }
    }
  }

  componentWillUnmount() {
    this.ismounted = false;
    this.abortController.abort();
  }

  render() {
    const tags = [];
    var max = 0;
    var min = 32768;
    var taglist = this.state.tagc;
    if (this.props.r1) {
      taglist = this.state.tr1;
    }
    if (this.props.r2) {
      taglist = this.state.tr2;
    }
    const myData = []
      .concat(taglist)
      .sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));

    // eslint-disable-next-line
    myData.map((viewpoint) => {
      var fs1 = viewpoint["size"];
      if (fs1 > max) max = fs1;
      if (fs1 < min) min = fs1;
    });
    // eslint-disable-next-line
    myData.map((viewpoint, idx) => {
      var fs = viewpoint["size"];
      var name = viewpoint["name"];
      var url = viewpoint["url"];
      if (fs > 0) {
        fs = Math.round(((fs - min) / (max - min)) * 12) + 14;
        if (max === min) fs = 14;

        tags.push(
          <a key={viewpoint["key"]} style={{ fontSize: fs }} href={url}>
            {name}
          </a>
        );
      }
    });
    if (this.props.item) {
      if (this.state.ccIsLoading) {
        return (
          <div className="cloudloading">
            <SolarSystemLoading />
          </div>
        );
      } else {
        return <div className="cloudtags">{tags}</div>;
      }
    } else {
      return <div className="cloudtags">{tags}</div>;
    }
  }
}

export default React.memo(CloudTag);
