export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span className="footer-logo">Coach Potato</span>

        <nav className="footer-links" aria-label="Footer navigation">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="mailto:hello@coachpotato.app">Contact</a>
          <a href="#waitlist">Join Waitlist</a>
        </nav>

        <span className="footer-copy">© {new Date().getFullYear()} Coach Potato</span>
      </div>
    </footer>
  );
}
