import React, { Component } from "react";
import Hypertopic from "hypertopic";
import { USER_API, MAP21_URL, CdcLinks } from "../Constants";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";
import ReactPlayer from "react-player/lazy";
import { translate } from "react-i18next";
import { ReactComponent as CloudIconSec } from "../../assets/cloud.svg";
import { ReactComponent as CloudIconFirst } from "../../assets/cloudFirst.svg";
import Popup from "reactjs-popup";
import CloudTag from "../nuageDeThemes/CloudTag";

let db = new Hypertopic([USER_API]);

class Items extends Component {
  state = {
    items: [],
    Icdc: [],
  };

  abortController = new AbortController();

  checkURL(url) {
    return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
  }

  async componentDidMount() {
    document.title = "Home";
    // les items avec le statut Agoare coup-de-coeur
    await fetch(USER_API + CdcLinks[0], { signal: this.abortController.signal })
      .then((results) => results.json())
      .then((data) => {
        this.setState(function (prevState, props) {
          var joined = prevState.items.concat(data.rows);
          return { items: joined };
        });
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        throw err;
      });
    // les items avec le statut Agoare coup-de-cœur
    await fetch(USER_API + CdcLinks[1], { signal: this.abortController.signal })
      .then((results) => results.json())
      .then((data) => {
        this.setState(function (prevState, props) {
          var joined = prevState.items.concat(data.rows);
          return { items: joined };
        });
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        throw err;
      });
    //
    if (this.state.items.length > 0) {
      this.state.items.map(async (item) => {
        await db
          .getView("item/" + item["key"][0] + "/" + item["id"])
          .then((data) => {
            data = data[item["key"][0]][item["id"]];
            data["itemId"] = item["id"];
            data["corpusId"] = item["key"][0];
            data["url"] =
              MAP21_URL +
              "#" +
              USER_API +
              "item/" +
              data["corpusId"] +
              "/" +
              data["itemId"];
            if (data["image/video"] === undefined) {
              if (data["image"] === undefined) {
                data["imageUrl"] = "lien image pour item sans image/vid ";
              } else {
                data["imageUrl"] = data["image"][0];
              }
            } else {
              if (this.checkURL(data["image/video"][0])) {
                data["imageUrl"] = data["image/video"][0];
              } else {
                data["videoUrl"] = data["image/video"][0];
              }
            }
            if (data["030 résumé:"][0].length > 280) {
              data["resume"] = data["030 résumé:"][0].substr(0, 250) + "...";
            } else {
              data["resume"] = data["030 résumé:"][0];
            }
            if (data["035 summary:"][0].length > 280) {
              data["resumeEn"] = data["035 summary:"][0].substr(0, 250) + "...";
            } else {
              data["resumeEn"] = data["035 summary:"][0];
            }
            this.setState(function (prevState, props) {
              var joined = prevState.Icdc.concat(data);
              return { Icdc: joined };
            });
          })
          .catch((err) => {
            if (err.name === "AbortError") return;
            throw err;
          });
      });
    }
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
