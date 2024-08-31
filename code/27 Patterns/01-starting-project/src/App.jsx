import Accordion from "./components/Accordion/Accordion";
import AccordionItem from "./components/Accordion/AccordionItem";

function App() {
  return <main>
    <section>
      <h2>Why work with us?</h2>
      <Accordion className="accordion">
        <AccordionItem id="experience" className='accordion-item' title="We deliver on time">
          <article>
            <p>Your can&apos;t go wrong with us. </p>
            <p>We are in the business of planing highly individualized vacation trips for more than 20 years </p>
          </article>
        </AccordionItem>
        <AccordionItem id="local-guides" className='accordion-item' title="We're working with local guides ">
          <article>
            <p>Your can&apos;t doing this along from our offices. </p>
            <p>Instead of we are working with local guides </p>
          </article>
        </AccordionItem>
      </Accordion>
    </section>
    </main>;
}

export default App;
