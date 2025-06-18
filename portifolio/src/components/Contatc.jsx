export function Contatc() {
  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <h2>Contact Me</h2>
        <p>If you would like to get in touch, please fill out the form below:</p>
        <form>
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensagem:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Mande Mensagem</button>
        </form>
      </div>
    </section>
  );
}    