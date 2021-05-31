import React, { Component } from "react";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardsChosen: [],
      cardsChosenId: [],
      cardsWon: [],
    };
  }
  chooseImage = (cardId) => {
    cardId = cardId.toString();
    if (this.state.cardsWon.includes(cardId)) {
      return window.location.origin + "/images/white.png";
    } else if (this.state.cardsChosenId.includes(cardId)) {
      return this.props.listCards[cardId].img;
    } else {
      return window.location.origin + "/images/question.png";
    }
  };

  flipCard = async (cardId) => {
    let alreadyChosen = this.state.cardsChosen.length;

    this.setState({
      cardsChosen: [
        ...this.state.cardsChosen,
        this.props.listCards[cardId].name,
      ],
      cardsChosenId: [...this.state.cardsChosenId, cardId],
    });

    if (alreadyChosen === 1) {
      setTimeout(this.checkForMatch, 100);
    }
  };

  checkForMatch = async () => {
    const optionOneId = this.state.cardsChosenId[0];
    const optionTwoId = this.state.cardsChosenId[1];

    if (optionOneId === optionTwoId) {
      alert("You have clicked the same image!");
    } else if (this.state.cardsChosen[0] === this.state.cardsChosen[1]) {
      alert("You found a match");
      this.props.token.methods
        .mint(
          this.props.account,
          window.location.origin +
            this.props.listCards[optionOneId].img.toString()
        )
        .send({ from: this.props.account })
        .on("transactionHash", (hash) => {
          this.setState({
            cardsWon: [...this.state.cardsWon, optionOneId, optionTwoId],
            tokenURIs: [
              ...this.props.tokenURIs,
              this.props.listCards[optionOneId].img,
            ],
          });
        });
    } else {
      alert("Sorry, try again");
    }
    this.setState({
      cardsChosen: [],
      cardsChosenId: [],
    });
    if (this.state.cardsWon.length === this.props.listCards.length) {
      alert("Congratulations! You found them all!");
    }
  };
  render() {
    return (
      <div className="container-fluid mt-5">
        <div className="row">
          <main role="main" className="col-lg-12 d-flex text-center">
            <div className="content mr-auto ml-auto">
              <h1 className="d-4">Start matching now!</h1>
              <div className="grid mb-4">
                {this.props.listCards.map((card, key) => {
                  return (
                    // eslint-disable-next-line jsx-a11y/alt-text
                    <img
                      style={{ width: "100px" }}
                      key={key}
                      src={this.chooseImage(key)}
                      data-id={key}
                      onClick={(event) => {
                        let cardId = event.target.getAttribute("data-id");
                        if (!this.state.cardsWon.includes(cardId.toString())) {
                          this.flipCard(cardId);
                        }
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Body;
