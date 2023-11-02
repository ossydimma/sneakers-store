

function Navbar() {
  return (
    <nav>
        <div className="menu">
            <div className="menu-left">

                <div className="title">
                    <h1>Sneakers</h1>
                </div>
                <div>
                    <img src="/src/images/icon-menu.svg" className="bar-icon" alt="" />
                </div>
                <ul>
                    <li><a href="/">Collections</a></li>
                    <li><a href="/">Men</a></li>
                    <li><a href="/">Women</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </div>
            <div className="menu-right">
                <img src="/src/images/icon-cart.svg" alt="cart" />
                <img src="/src//images/image-avatar.png" alt="dp" />
            </div>
        </div>
    </nav>
  )
}

export default Navbar