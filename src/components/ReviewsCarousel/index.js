import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {review: this.props.reviewsList[0], id: 0}

  rightArrow = () => {
    const {reviewsList} = this.props
    const {id} = this.state
    if (id + 1 < reviewsList.length) {
      this.setState(prevState => ({
        review: reviewsList[prevState.id + 1],
        id: prevState.id + 1,
      }))
    }
  }

  leftArrow = () => {
    const {reviewsList} = this.props
    const {id} = this.state
    if (id > 0) {
      this.setState(prevState => ({
        review: reviewsList[prevState.id - 1],
        id: prevState.id - 1,
      }))
    }
  }

  render() {
    const {review} = this.state
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="bg-cont">
        <div className="card">
          <h1 className="head">Reviews</h1>
          <div className="img-cont">
            <img className="img" alt={username} src={imgUrl} />
            <div className="arrow">
              <button type="button" className="button" data-testid="leftArrow">
                <img
                  className="arrow-img"
                  alt="left arrow"
                  src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                  onClick={this.leftArrow}
                />
              </button>
              <div>
                <p className="name">{username}</p>
                <p className="para">{companyName}</p>
                <p>{description}</p>
              </div>
              <button type="button" className="button" data-testid="rightArrow">
                <img
                  className="arrow-img"
                  alt="right arrow"
                  src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                  onClick={this.rightArrow}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
