import { ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import styles from './FAQs.module.css';
import { FAQsType } from '../../types/CommonType';

interface FAQsProps {
  faqs: FAQsType[];
}

const FAQs = (props: FAQsProps) => {
  const { faqs } = props;

  return (
    <div className={styles.faqContainer}>
      {faqs?.length > 0 && <Typography className={styles.faqHeading}>FAQs</Typography>}
      {faqs?.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMore />} className={styles.faqQuestion}>
            {faq.question}
          </AccordionSummary>
          <AccordionDetails>{faq.answer}</AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default FAQs;
