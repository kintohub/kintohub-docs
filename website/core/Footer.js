const React = require('react')

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl
    return baseUrl + 'docs/' + (language ? language + '/' : '') + doc
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl
    return baseUrl + (language ? language + '/' : '') + doc
  }

  imgUrl(img) {
    const baseUrl = this.props.config.baseUrl
    return `${baseUrl}img/${img}`
  }

  render() {
    const currentYear = new Date().getFullYear()
    return (
      <div className="footer-background">
        <div className="line" />
        <div className="footerWrapper wrapper">
          <footer>
            <div className="content">
              <div className="footer">
                <div className="left">
                  <ul className="unstyled-list" />
                  <h6 className="byline">
                    Copyright © {currentYear} KintoHub. All rights reserved.
                  </h6>
                </div>

                <div className="right">
                  <ul className="social-icons unstyled-list">
                    <li className="social-icon">
                      <a
                        href="https://twitter.com/kintohub"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={this.imgUrl('footer-socials-twitter.svg')}
                          alt=""
                        />
                      </a>
                    </li>
                    <li className="social-icon">
                      <a
                        href="https://github.com/kintohub"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={this.imgUrl('footer-socials-github.svg')}
                          alt=""
                        />
                      </a>
                    </li>
                    <li className="social-icon">
                      <a
                        href="https://www.linkedin.com/company/13376177/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={this.imgUrl('footer-socials-linkedin.svg')}
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>

                  <a href={this.props.config.baseUrl}>
                    <div className="footer-logo">
                      <img
                        src={this.imgUrl('logo-grey-single-color.svg')}
                        alt=""
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    )
  }
}

module.exports = Footer
