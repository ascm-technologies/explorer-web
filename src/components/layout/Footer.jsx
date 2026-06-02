import Container from "../ui/Container";

export default function Footer() {
  return (
    <Container>
      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} Explorer. All rights reserved.
        </p>
      </footer>
    </Container>
  );
}
