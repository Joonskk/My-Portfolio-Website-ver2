const FAQItem = ({item}) => {
  return (
    <div className="item">
      <div className="question">
        {item.question}
      </div>
      <div className="answer">
        {item.answer}
      </div>
    </div>
  )
}

export default FAQItem