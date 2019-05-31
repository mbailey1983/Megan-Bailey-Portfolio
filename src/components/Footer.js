import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer class="page-footer black">
                <div class="container">
                <div class="row">
                    <div class="col s12 m8 l6">
                    <h5 class="white-text">Credits</h5>
                        <ul class="grey-text text-lighten-4">
                            <li>Glitch Text <a href="https://codepen.io/cipherbeta"
                            target="_blank" rel="noopener noreferrer">from Isaac Doud</a></li>
                            <li>Glitch PNG <a href="https://www.deviantart.com/beapanda/art/Renders-267-Glitch-Pngs-795207085"
                            target="_blank" rel="noopener noreferrer">from Renders 267</a></li>
                        </ul>
                    </div>
                    <div class="col s12 m4 l6">
                    <h5 class="white-text">See the Website's Code</h5>
                    <button className="btn pink accent-3">Visit the Repo</button>
                    </div>
                </div>
                </div>
                <div class="footer-copyright">
                <div class="container center-align">
                <p white-text>&copy; <script>new Date().getFullYear()&&document.write(new Date().getFullYear());</script>, Megan Bailey</p>
                </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
