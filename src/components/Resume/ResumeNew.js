import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/../Assets/abhishek(CV).pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <div style={{ position: "relative", zIndex: 1 }}>
          {/* Page heading */}
          <div style={{ textAlign: "center", paddingBottom: "30px" }}>
            <h1
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 800,
                fontSize: "2.5em",
                paddingTop: "10px",
              }}
            >
              My <span className="purple">Resume</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.05em" }}>
              View or download my latest CV below
            </p>
          </div>

          <Row style={{ justifyContent: "center", position: "relative", marginBottom: "30px" }}>
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{ maxWidth: "220px" }}
            >
              <AiOutlineDownload style={{ marginRight: "6px" }} />
              Download CV
            </Button>
          </Row>

          <Row className="resume" style={{ justifyContent: "center" }}>
            <Document file={pdf} className="d-flex justify-content-center">
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          </Row>

          <Row style={{ justifyContent: "center", position: "relative", marginTop: "30px" }}>
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{ maxWidth: "220px" }}
            >
              <AiOutlineDownload style={{ marginRight: "6px" }} />
              Download CV
            </Button>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default ResumeNew;
