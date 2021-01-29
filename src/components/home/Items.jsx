import React, { Component } from "react";
import { USER_API, MAP21_URL, CdcLinks } from "../Constants";
import CardDeck from "react-bootstrap/CardDeck";
import "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Row, Col } from "reactstrap";
import Button from "react-bootstrap/Button";
import ReactPlayer from "react-player/lazy";
import { translate } from "react-i18next";
import { ReactComponent as CloudIconSec } from "../../assets/cloud.svg";
import { ReactComponent as CloudIconFirst } from "../../assets/cloudFirst.svg";
import notavailable from "../../assets/unnamed.png";
import Popup from "reactjs-popup";
import CloudTag from "../nuageDeThemes/CloudTag";
import "./Items.css";
import { SemipolarLoading } from "react-loadingg";

class Items extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  state = {
    isToggleOn: true,
    checked: true,
    currentDateTime: Date().toLocaleString(),
    count: 0,
    Icdc: [],
    Icdc2: [],
    sortType: "asc",
    itemsLoaded: false,
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
          this.setState(function (prevState, props) {
            var newcount = prevState.count + 1;
            return { count: newcount };
          });
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
            if (itemCard["035 summary:"][0].length > 280) {
              itemCard["resume"] =
                itemCard["035 summary:"][0].substr(0, 250) + "...";
            } else {
              itemCard["resume"] = itemCard["035 summary:"][0];
            }
          } else {
            if (itemCard["030 résumé:"][0].length > 280) {
              itemCard["resume"] =
                itemCard["030 résumé:"][0].substr(0, 250) + "...";
            } else {
              itemCard["resume"] = itemCard["030 résumé:"][0];
            }
          }
          if (itemCard["035 summary:"] === undefined) {
            if (itemCard["030 résumé:"][0].length > 280) {
              itemCard["resumeEn"] =
                itemCard["030 résumé:"][0].substr(0, 250) + "...";
            } else {
              itemCard["resumeEn"] = itemCard["030 résumé:"][0];
            }
          } else {
            if (itemCard["035 summary:"][0].length > 280) {
              itemCard["resumeEn"] =
                itemCard["035 summary:"][0].substr(0, 250) + "...";
            } else {
              itemCard["resumeEn"] = itemCard["035 summary:"][0];
            }
          }
        
          if(itemCard["500 collaborative evaluation: "]){
            // eslint-disable-next-line
            this.setState(function (prevState, props) {
              var joined = prevState.Icdc.concat(itemCard);
              return { Icdc: joined };
            });
          }

          if(itemCard["400 contribution date:"]){
            // eslint-disable-next-line
          this.setState(function (prevState, props) {
            var joined = prevState.Icdc2.concat(itemCard);
            return { Icdc2: joined };
          });
          }
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
        .then(() => {
          setTimeout(() => {
            this.setState({ itemsLoaded: true });
          }, 4000);
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

  handleClick() {
    if (this.state.checked === true) {
      this.setState({
        checked: false,
      });
    } else {
      this.setState({
        checked: true,
      });
    }
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    const { t } = this.props;
    //Ordering
    const { Icdc, Icdc2 } = this.state;

    const sorted = Icdc.sort((a, b) => {
      return b["500 collaborative evaluation: "][0].localeCompare(
        a["500 collaborative evaluation: "][0]
      );
    });

    //sort by date

    let datesorted = Icdc2.sort((a, b) => {
      return (
        new Date(
          (b["400 contribution date:"][0] + "/01")
        ) -
        new Date(
          (a["400 contribution date:"][0] + "/01")
        )
      );
    });

    if (this.state.itemsLoaded) {
      return (
        <div className="content">
          <Row>
            <Col>
              <div onChange={this.onChangeValue}>
                <button className="btn btn-dark" onClick={this.handleClick}>
                  {this.state.isToggleOn
                    ? t("home.dateorder")
                    : t("home.rankorder")}
                </button>
              </div>
            </Col>
            <Col>
              <p className="text-right">
                {t("home.quantity")} {this.state.count}
              </p>
            </Col>
          </Row>
          {this.state.checked === true ? (
            <CardDeck>
              {sorted.map((item, idx) => (
                <Card bg="light" key={idx} style={{ flexGrow: 4 }}>
                  {item["image/video"] === undefined ? (
                    <Card.Img variant="top" src={item["imageUrl"]} />
                  ) : item["videoUrl"] === undefined ? (
                    <Card.Img variant="top" src={item["imageUrl"]} />
                  ) : (
                    <ReactPlayer
                      controls={true}
                      width="100%"
                      height="30%"
                      url={item["videoUrl"]}
                    />
                  )}

                  <Card.Body>
                    <Row>
                      <Col sm={8}>
                        {item["010 nom de l'initiative:"] === undefined ? (
                          <Card.Title>
                            {item["005 nom de l’élément:"][0]}
                          </Card.Title>
                        ) : (
                          <Card.Title>
                            {item["010 nom de l'initiative:"][0]}
                          </Card.Title>
                        )}
                      </Col>
                      <Col sm={4}>
                        <div className="text-right">
                          {item["500 collaborative evaluation: "] ===
                          undefined ? (
                            <span className="rank">No rang</span>
                          ) : (
                            <span className="rank"> {idx + 1} </span>
                          )}
                        </div>
                      </Col>
                    </Row>

                    {item["048 organisation:"] === undefined ? (
                      <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                    ) : (
                      <Card.Subtitle className="mb-2 text-muted">
                        {item["048 organisation:"][0]}
                      </Card.Subtitle>
                    )}
                    <Card.Text>{item[t("home.resume")]}</Card.Text>
                    <div className="text-right">
                      {item["400 contribution date:"] === undefined ? (
                        <span className="itemDate"> No date </span>
                      ) : (
                        <span className="itemDate">
                          {item["400 contribution date:"][0]}
                        </span>
                      )}
                    </div>
                  </Card.Body>

                  <Card.Footer>
                    <Button variant="primary" href={item["url"]}>
                      {t("home.card-plus")}
                    </Button>
                    <Popup
                      trigger={
                        <Button variant="primary">
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
            </CardDeck>
          ) : (
            <CardDeck>
              {datesorted.map((item, idx) => (
                <Card bg="light" key={idx} style={{ flexGrow: 4 }}>
                  {item["image/video"] === undefined ? (
                    <Card.Img variant="top" src={item["imageUrl"]} />
                  ) : item["videoUrl"] === undefined ? (
                    <Card.Img variant="top" src={item["imageUrl"]} />
                  ) : (
                    <ReactPlayer
                      controls={true}
                      width="100%"
                      height="30%"
                      url={item["videoUrl"]}
                    />
                  )}

                  <Card.Body>
                    <Row>
                      <Col sm={8}>
                        {item["010 nom de l'initiative:"] === undefined ? (
                          <Card.Title>
                            {item["005 nom de l’élément:"][0]}
                          </Card.Title>
                        ) : (
                          <Card.Title>
                            {item["010 nom de l'initiative:"][0]}
                          </Card.Title>
                        )}
                      </Col>
                    </Row>

                    {item["048 organisation:"] === undefined ? (
                      <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                    ) : (
                      <Card.Subtitle className="mb-2 text-muted">
                        {item["048 organisation:"][0]}
                      </Card.Subtitle>
                    )}
                    <Card.Text>{item[t("home.resume")]}</Card.Text>
                    <div className="text-right">
                      {item["400 contribution date:"] === undefined ? (
                        <span className="itemDate"> No date </span>
                      ) : (
                        <span className="itemDate">
                          {item["400 contribution date:"][0]}
                        </span>
                      )}
                    </div>
                  </Card.Body>

                  <Card.Footer>
                    <Button variant="primary" href={item["url"]}>
                      {t("home.card-plus")}
                    </Button>
                    <Popup
                      trigger={
                        <Button variant="primary">
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
            </CardDeck>
          )}
        </div>
      );
    } else {
      return (
        <div className="itemloading">
          <SemipolarLoading color="#144f5d" />
        </div>
      );
    }
  }
}

export default translate("common")(Items);
