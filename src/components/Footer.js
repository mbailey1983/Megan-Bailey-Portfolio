import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="page-footer black">
        <div className="container">
          <div className="row">
            <div className="col s12 m8 l6">
              <h5 data-text="Credits" className="glitch white-text">
                Credits
              </h5>
              <ul className="grey-text text-lighten-4">
                <li>
                  Glitch Text{' '}
                  <a href="https://codepen.io/cipherbeta" target="_blank" rel="noopener noreferrer">
                    from Isaac Doud
                  </a>
                </li>
                <li>
                  Glitch PNG{' '}
                  <a
                    href="https://www.deviantart.com/beapanda/art/Renders-267-Glitch-Pngs-795207085"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    from Renders 267
                  </a>
                </li>
              </ul>
            </div>
            <div className="col s12 m4 l6">
              <h5 data-text="See the Code" className="glitch white-text">
                See the Code
              </h5>
              <button
                href="https://github.com/rockstarcreativestudio/Megan-Bailey-Portfolio"
                className="btn purple accent-3"
              >
                Visit the Repo
              </button>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container center-align">
            <p className="white-text">&copy; {new Date().getFullYear()}, Megan Bailey</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
