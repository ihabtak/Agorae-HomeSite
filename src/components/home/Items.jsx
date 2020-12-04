import React, { Component } from "react";
import { USER_API, MAP21_URL, CdcLinks } from "../Constants";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";
import ReactPlayer from "react-player/lazy";
import { translate } from "react-i18next";
import { ReactComponent as CloudIconSec } from "../../assets/cloud.svg";
import { ReactComponent as CloudIconFirst } from "../../assets/cloudFirst.svg";
import notavailable from "../../assets/unnamed.png";
import Popup from "reactjs-popup";
import CloudTag from "../nuageDeThemes/CloudTag";

class Items extends Component {
  state = {
    items: [],
    Icdc: [],
  };

  abortController = new AbortController();

  checkURL(url) {
    return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
  }
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
  updateItems(data) {
    for (var corpusId in data) {
      for (var itemId in data[corpusId]) {
        var itemCard;
        itemCard = data[corpusId][itemId];
        if (itemId !== "user" && itemId !== "name") {
          itemCard["itemId"] = itemId;
          itemCard["corpusId"] = corpusId;
          itemCard["url"] =
            MAP21_URL +
            "#" +
            USER_API +
            "item/" +
            itemCard["corpusId"] +
            "/" +
            itemCard["itemId"];
          if (itemCard["image/video"] === undefined) {
            if (itemCard["image"] === undefined) {
              itemCard["imageUrl"] = notavailable;
            } else {
              itemCard["imageUrl"] = itemCard["image"][0];
            }
          } else {
            if (this.checkURL(itemCard["image/video"][0])) {
              itemCard["imageUrl"] = itemCard["image/video"][0];
            } else {
              itemCard["videoUrl"] = itemCard["image/video"][0];
            }
          }
          if (itemCard["030 résumé:"] === undefined) {
            itemCard["resume"] = itemCard["035 summary:"][0];
          } else {
            if (itemCard["030 résumé:"][0].length > 280) {
              itemCard["resume"] =
                itemCard["030 résumé:"][0].substr(0, 250) + "...";
            } else {
              itemCard["resume"] = itemCard["030 résumé:"][0];
            }
          }
          if (itemCard["035 summary:"] === undefined) {
            itemCard["resumeEn"] = itemCard["030 résumé:"][0];
          } else {
            if (itemCard["035 summary:"][0].length > 280) {
              itemCard["resumeEn"] =
                itemCard["035 summary:"][0].substr(0, 250) + "...";
            } else {
              itemCard["resumeEn"] = itemCard["035 summary:"][0];
            }
          }
          // eslint-disable-next-line
          this.setState(function (prevState, props) {
            var joined = prevState.Icdc.concat(itemCard);
            return { Icdc: joined };
          });
        }
      }
    }
  }

  componentDidMount() {
    document.title = "Home";
    // les items avec le statut Agoare coup-de-coeur
    CdcLinks.map(async (corpus, idx) => {
      await fetch(USER_API + corpus, { signal: this.abortController.signal })
        .then((results) => results.json())
        .then((data) => {
          data = this.normalize(data);
          this.updateItems(data);
        })
        .catch((err) => {
          if (err.name === "AbortError") return;
          throw err;
        });
    });
  }

  componentWillUnmount() {
    this.abortController.abort();
  }

  render() {
    const { t } = this.props;
    return (
      <CardColumns>
        {this.state.Icdc.map((item, idx) => (
          <Card bg="light" key={idx} style={{ flexGrow: 4 }}>
            {item["image/video"] === undefined ? (
              <Card.Img variant="top" src={item["imageUrl"]} />
            ) : item["videoUrl"] === undefined ? (
              <Card.Img variant="top" src={item["imageUrl"]} />
            ) : (
              <ReactPlayer
                controls={true}
                width="100%"
                height="80%"
                url={item["videoUrl"]}
              />
            )}

            <Card.Body>
              {item["010 nom de l'initiative:"] === undefined ? (
                <Card.Title>{item["005 nom de l’élément:"][0]} </Card.Title>
              ) : (
                <Card.Title>{item["010 nom de l'initiative:"][0]} </Card.Title>
              )}
              {item["048 organisation:"] === undefined ? (
                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
              ) : (
                <Card.Subtitle className="mb-2 text-muted">
                  {item["048 organisation:"][0]}
                </Card.Subtitle>
              )}
              <Card.Text>{item[t("home.resume")]}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="primary" href={item["url"]}>
                {t("home.card-plus")}
              </Button>
              <Popup
                trigger={
                  <Button variant="primary">
                    {" "}
                    <CloudIconFirst />
                  </Button>
                }
                modal
                nested
              >
                {(close) => (
                  <div className="modalPop">
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                    <div className="header">
                      Nuage contextuel 1:{" "}
                      {item["010 nom de l'initiative:"] === undefined
                        ? item["005 nom de l’élément:"][0]
                        : item["010 nom de l'initiative:"][0]}
                    </div>
                    <div className="content">
                      <CloudTag cc item={item} r1 />
                    </div>
                  </div>
                )}
              </Popup>
              <Popup
                trigger={
                  <Button variant="primary">
                    <CloudIconSec />
                  </Button>
                }
                modal
                nested
              >
                {(close) => (
                  <div className="modalPop">
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                    <div className="header">
                      Nuage contextuel 2:{" "}
                      {item["010 nom de l'initiative:"] === undefined
                        ? item["005 nom de l’élément:"][0]
                        : item["010 nom de l'initiative:"][0]}
                    </div>

                    <div className="content">
                      <CloudTag cc item={item} r2 />
                    </div>
                  </div>
                )}
              </Popup>
            </Card.Footer>
          </Card>
        ))}
      </CardColumns>
    );
  }
}

export default translate("common")(Items);
