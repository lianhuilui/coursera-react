function ReviewTitle({ children }) {
  return (<h3>{children}</h3>);
}
export function Review({ children }) {
  return (<div className="review">
    <div>
      {children}
    </div>
  </div>);
}
function ReviewBody({ children }) {
  return (<div>{children}</div>);
}
function ReviewStars({ stars }) {

  let starNum = parseFloat(stars);
  let starIcons = '';

  for (let i = 0; i < starNum; i++) {
    starIcons += '⭐️'
  }

  return (<div className="stars">
    {starIcons}
  </div>)
}
Review.Title = ReviewTitle;
Review.Body = ReviewBody;
Review.Stars = ReviewStars;
