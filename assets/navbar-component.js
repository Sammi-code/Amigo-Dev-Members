class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- Navbar Links Area -->
        <div class="nav-bar">
            <a class="logo" href="../../index.html">
              Amigo Junior Dev
            </a>
          <div class="nav-link-wrapper" id="nav-links">
            <a class="nav-link join" href="https://chat.whatsapp.com/GkIZkbVRgve5AqPVduYf2Q">Join Us</a>
            <a class="nav-link" href="">Members</a>
            <a class="nav-link" href="https://amigodevcommunity.netlify.app/contents/readme.html">ReadME</a>
            <a class="last-link nav-link" href="https://amigodevcommunity.netlify.app/contents/weekly.html">Weekly</a>
          </div>
        </div>
      `;
    }
}

customElements.define('nav-header', Header);
