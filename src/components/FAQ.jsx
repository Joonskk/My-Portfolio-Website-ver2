import FAQItem from './FAQItem'

const FAQ = () => {
  const faq = [
    {
      id: 1,
      question: "How did you make the background effect in this website?",
      answer: "I use three.js to write WebGL faster and the background effect is written in glsl. If you are interested in glsl, I recommend you to read The Book of Shaders."
    },
    {
      id: 2,
      question: "Where can I find you code?",
      answer: "I have Github account but my projects (including this website) are private repository."
    },
    {
      id: 3,
      question: "Can I use your code?",
      answer: "I don't allow anyone to use my code. I don't wanna say such thing but I got too much questions about that."
    }
  ]
  
  return (
    <div className="faq">
      {faq.map((item)=><FAQItem key={item.id} item={item} />)}
    </div>
  )
}

export default FAQ