import { useEffect } from 'react';

function ContactPage() {
  useEffect(() => {
    document.title = 'Contact - Marvel App';
  }, []);

  return (
    <div>
      <h2>Contact</h2>
      <p>
        Feel free to contact us at 
        <a href="marvelApp@gmail.com">contact@marvelapp.com</a>
      </p>
    </div>
  );
}

export default ContactPage;