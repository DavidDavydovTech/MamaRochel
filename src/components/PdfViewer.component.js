import React, { Component } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import {Link} from 'react-router-dom'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class PdfViewer extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
    width: undefined,
    clientUsingFirefox: typeof InstallTrigger !== 'undefined'
  }
  componentDidMount(){
    console.log(this.refs.pdfContainer.parentNode.clientWidth)
    this.setState({WinWidth: this.refs.pdfContainer.parentNode.clientWidth - 32}) 
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
    this.setState({WinWidth: this.refs.pdfContainer.parentNode.clientWidth - 32})
  }

  updateDimensions = () => {
    this.setState({WinWidth: this.refs.pdfContainer.parentNode.clientWidth - 32})
  };
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div ref="pdfContainer" style={{maxWidth: "100%", minWidth: "100%"}}>

           


            

            <p style={{textAlign: "center"}}>
                <Link to={this.props.pdf} rel="noopener noreferrer" target="_blank" download style={{float: "left", textAlign: "left"}}><img
                
                    className="pdf-buttons" 
                    src="https://img.icons8.com/material-sharp/24/000000/download.png"
                    alt="Download PDF"
                
                /></Link>

                <img
                    onClick={(e) => {
                        e.preventDefault();
                        this.state.pageNumber > 1? 
                            this.setState({pageNumber: pageNumber - 1})
                        :
                            console.log("Can't go back!")
                    }}

                    className="pdf-buttons" 
                    src="https://img.icons8.com/material-sharp/24/000000/previous.png"

                    alt="Previous Page"
                
                />

                Page {pageNumber} of {numPages}
            
                <img
                    onClick={(e) => {
                      e.preventDefault();
                      this.state.pageNumber < numPages? 
                          this.setState({pageNumber: pageNumber + 1})
                      :
                          console.log("Can't go forward!")
                    }}
                    
                    className="pdf-buttons"
                    
                    src="https://img.icons8.com/material-sharp/40/000000/next.png"
                
                    alt="Next Page"
                />

                    <Link to={this.props.pdf} rel="noopener noreferrer" target="_blank" style={{float: "right", textAlign: "right"}}><img
                    onClick={(e) => {
                        e.preventDefault();
                        if(this.state.clientUsingFirefox){
                            alert("Printing in Firefox is unsupported due to a open bug from 2014 ( https://github.com/mozilla/pdf.js/issues/5397 ).")
                        }
                        else{
                            let w = window.open(this.props.pdf, "PRINT", "height=400,width=600");
                            w.print();

                        }
                        
                        
                }}
                
                className="pdf-buttons" 
                src="https://img.icons8.com/material-sharp/24/000000/print.png"

                alt="Print PDF"
            
            /></Link>
            </p>
        
        <div style={{maxWidth: `${this.state.WinWidth}px`, minWidth: `${this.state.WinWidth}px`, boxShadow: "0px 5px 15px #00000077"}}><Document 
                    
          file={this.props.pdf}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page 
          pageNumber={pageNumber} 
          width={this.state.WinWidth} 
          loading={<div style={{minHeight: `${this.state.WinWidth*1.414}px`}}>Loading...</div>}/>
        </Document></div>
        
      </div>
    );
  }
}

export default PdfViewer;