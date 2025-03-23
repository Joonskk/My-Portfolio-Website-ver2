import FAQItem from './FAQItem'

const FAQ = () => {
  const faq = [
    {
      id: 1,
      question: "How did you make this website?",
      answer: "I used React to make this website because I thought React's Router option was really attractive to implement functions without refreshing."
    },
    {
      id: 2,
      question: "Where can I find you code?",
      answer: "I have Github account and my projects (including this website) are in the repository."
    },
    {
      id: 3,
      question: "Can I use your code?",
      answer: "I do allow everyone to use my code because I think this could also be some source in the internet."
    }
  ]
  
  return (
    <div className="faq">
      {faq.map((item)=><FAQItem key={item.id} item={item} />)}
    </div>
  )
}

export default FAQ