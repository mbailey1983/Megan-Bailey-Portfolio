import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer class="page-footer black">
                <div class="container">
                <div class="row">
                    <div class="col s12 m8 l6">
                    <h5 data-text="Credits" class="glitch white-text">Credits</h5>
                        <ul class="grey-text text-lighten-4">
                            <li>Glitch Text <a href="https://codepen.io/cipherbeta"
                            target="_blank" rel="noopener noreferrer">from Isaac Doud</a></li>
                            <li>Glitch PNG <a href="https://www.deviantart.com/beapanda/art/Renders-267-Glitch-Pngs-795207085"
                            target="_blank" rel="noopener noreferrer">from Renders 267</a></li>
                        </ul>
                    </div>
                    <div class="col s12 m4 l6">
                    <h5 data-text="See the Code" class="glitch white-text">See the Code</h5>
                    <button className="btn purple accent-3">Visit the Repo</button>
                    </div>
                </div>
                </div>
                <div class="footer-copyright">
                <div class="container center-align">
                <p white-text>&copy; {new Date().getFullYear()}, Megan Bailey</p>
                </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
